(defproject connect-example "0.1.0-SNAPSHOT"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.217"]
                 [compojure "1.6.0"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-json "0.4.0"]
                 [rum "0.11.2"]
                 [clj-connect "0.2.4"]
                 [cljs-ajax "0.7.3"]]

  :plugins [[lein-ring "0.9.7"]
            [lein-figwheel "0.5.13"]]

  :source-paths ["src/clj"]
  :resource-pahts ["resources" "target/cljsbuild"]
  :ring {:handler connect-example.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}}

  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]

  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 3000
             :ring-handler connect-example.handler/app}

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main "connect-example.core"
                                   :asset-path "cljs/out"
                                   :output-to  "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}
                        }]
              })
