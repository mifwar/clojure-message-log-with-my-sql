(ns message-log-3.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [message-log-3.events :as events]
   [message-log-3.routes :as routes]
   [message-log-3.views :as views]
   [message-log-3.config :as config]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (routes/start!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::events/read-msg-txt])
  (dev-setup)
  (mount-root))
