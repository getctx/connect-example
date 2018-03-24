(ns figwheel.connect.build-dev (:require [connect-example.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3000/figwheel-ws"})

