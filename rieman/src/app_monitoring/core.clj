(ns app-monitoring.core
  (:require
    [app-monitoring.elastic :as es]
    [app-monitoring.parser :refer :all]
    [riemann.config :as cfg]
    [riemann.client :as cli]
    [riemann.streams :as s]
    [riemann.slack :refer [slack]]
    [riemann.transport.sse :as sse]
    [riemann.logging :as logging]
    [riemann.time :as time]
    [riemann.core :as c]))

(defonce server (atom nil))
(defonce tcp (riemann.transport.tcp/tcp-server {:port 5555 :host "0.0.0.0"}))

(defn stop []
  (when-let [srv @server]
    (c/stop! srv)
    (reset! server nil)))

(defn reload [cfg]
  (reset! server (c/transition! (c/core) (assoc cfg :services [tcp])))
  "reloaded")

(defn start [cfg]
  (time/start!)
  (es/es-connect)
  (stop)
  (reload cfg)
  "started")

(def elastic
  (s/rollup 1 3 (es/es-index "kiries" :timestamping :day :index "logstash")))

(defn process-stream [e]
  #_(doseq [[k v] e] (println k ": " (pr-str  v)))
  (cond
    ;; Some dispatch
    ;;(= (:service e) "nginx_access")
    ;;(merge e (parse-nginx-access (:description e)) )
    ;;(= (:service e) "nginx_error")
    ;;(merge e (parse-nginx-error (:description e)) )

    :else e))

(def stream (s/smap #'process-stream elastic))

(defn -main [& args]
  (start {:streams  [stream]}))

(comment
  (if @server
    (reload {:streams  [stream]})
    (start {:streams  [stream]}))
  (stop))
