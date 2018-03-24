(ns connect-example.core
  (:require [rum.core :as rum :refer [defc]]
            [ajax.core :refer [GET]]))


(defn fetch-issues
  [handler]
  (GET "/events" {:handler handler :response-format :json :keywords? true}))



(defc heading []
  [:h1 "JIRA Activity Feed"])


(defc issue
  [{:keys [id summary type user timestamp] :as issue}]

  [:div.issue
   [:div.id id]

   [:div.info
    [:div.summary summary]
    [:div.detail
     (-> type (clojure.string/split #"_") second clojure.string/capitalize)
     " by "
     user
     " at "
     (str (.toLocaleString (js/Date. timestamp)))]]])


(defc issues
  [is]
  [:div.issues
   (map issue is)])


(defc content
  [data]
  [:div.container
   (heading)

   (if data
     (issues data)
     [:div "No activity found in feed."])])


(defn handler [data]
  (rum/mount (content data) (.getElementById js/document "content")))


(fetch-issues handler)


(js/setInterval
  #(fetch-issues handler)
  5000)
