(ns message-log-3.views
  (:require
   [re-frame.core :as re-frame]
   [message-log-3.events :as events]
   [message-log-3.routes :as routes]
   [message-log-3.subs :as subs]
   ))

(defn display-messages [{:keys [unix-time message]}]
  [:div
   {:key unix-time}
   [:p message]])

(defn text-input [id label]
  (let [value (re-frame/subscribe [::subs/form id])]
    [:label label]
    [:input.input {:value @value
                   :on-change #(re-frame/dispatch [::events/update-db id (-> % .-target .-value)])
                   :type "text"
                   :placeholder "Type here"}]))

(defn button-send [id label]
  (let [value (re-frame/subscribe [::subs/form id])]
    [:button {:disabled (zero? (count @value))
              :on-click #(do
                           (re-frame/dispatch [::events/update-list id])
                           (re-frame/dispatch [::events/submit])
                           (re-frame/dispatch [::events/clear-input])
                           )} label]))

;; home

(defn home-panel []
  (let [messages (re-frame/subscribe [::subs/messages])]
    [:div
     [text-input :message "message"]
     [button-send :message "submit"]
     (map display-messages @messages)]))

(defmethod routes/panels :home-panel [] [home-panel])

;; main

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))
