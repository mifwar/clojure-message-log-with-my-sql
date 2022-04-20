(ns message-log-3.routes
  (:require
   [bidi.bidi :as bidi]
   [pushy.core :as pushy]
   [re-frame.core :as re-frame]
   [message-log-3.events :as events]))

(defmulti panels identity)
(defmethod panels :default [] [:div "No panel found for this route."])

(def routes
  (atom
   ["/" {""       :home
         "init" :init
         "test-page" :test-page
         "submit" :submit}]))

(defn parse
  [url]
  (bidi/match-route @routes url))

(defn url-for
  [& args]
  (apply bidi/path-for (into [@routes] args)))

(defn dispatch
  [route]
  (let [panel (keyword (str (name (:handler route)) "-panel"))]
    (re-frame/dispatch [::events/set-active-panel panel])))

(defonce history
  (pushy/pushy dispatch parse))

(defn navigate!
  [handler]
  (pushy/set-token! history (url-for handler)))

(defn start!
  []
  (pushy/start! history))

(re-frame/reg-fx
 :navigate
 (fn [handler]
   (navigate! handler)))