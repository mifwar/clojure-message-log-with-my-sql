(ns message-log-3.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::form
 (fn [db [_ id val]]
   (get-in db [:form id] val)))

(re-frame/reg-sub
 ::messages
 (fn [db]
  ;;  (:msg db)
   (reverse (:msg db))))