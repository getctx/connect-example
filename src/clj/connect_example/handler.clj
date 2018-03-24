(ns connect-example.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.util.response :refer [response]]))



(def event-store (atom '()))


(defn persist!
  [e]
  (swap! event-store conj e)
  (println e)
  e)


(defn transform
  [e1]
  (let [id        (-> e1 :issue :key)
        user      (-> e1 :user :displayName)
        timestamp (-> e1 :timestamp)
        type      (-> e1 :webhookEvent)
        summary   (-> e1 :issue :fields :summary)]

    {:user user :id id :timestamp timestamp :summary summary :type type}))


(defn handle-event
  [raw]
  (-> raw
    clojure.walk/keywordize-keys
    transform
    persist!))


(defn recv
  "Handler function for all events"
  [req]
  (handle-event (:body req))
  {:status 200 :body "OK"})


(defn events
  [_]
  @event-store)



(defroutes app-routes
  (POST "/installed" [] {:status 200 :body "OK"})
  (GET "/events" req (response (events req)))
  (POST "/recv" req (recv req))
  (route/resources "/"))


(def app
  (-> app-routes
    wrap-json-body
    wrap-json-response
    (wrap-defaults api-defaults)))
