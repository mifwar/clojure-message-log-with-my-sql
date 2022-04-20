(ns message-log-3.events
  (:require [ajax.core :as ajax]
            [clojure.pprint :as pp]
            [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [message-log-3.db :as db]
            [cljs.reader :as reader]
            [ajax.core :refer [GET POST]]
            [re-frame.core :as re-frame]))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(re-frame/reg-event-fx
  ::navigate
  (fn-traced [_ [_ handler]]
   {:navigate handler}))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn-traced [{:keys [db]} [_ active-panel]]
   {:db (assoc db :active-panel active-panel)}))

(re-frame/reg-event-db
 ::update-db
 (fn [db [_ id val]]
   (assoc-in db [:form id] val)))

(re-frame/reg-event-db
 ::update-list
 (fn [db [_ id]]
   (let [input (conj {:unix-time (.now js/Date)} (:form db))
         messages (get db :msg [])
         merged (conj messages input)]
     (do (assoc db :msg merged)
         (assoc db :input input)))))

(re-frame/reg-event-db
 ::clear-input
 (fn [db]
   (dissoc db :form)))

(defn handler [response]
  (.log js/console (str response)))

(re-frame/reg-event-fx
 ::submit
 (fn [{:keys [db]}]
   {:http-xhrio {:method          :POST
                 :uri             "/submit"
                ;;  :params          (clj->json {:msg (:msg db)})
                  :params          {:input (:input db)}
                ;;  :params          (clj->json {:input (:input db)})
                 :timeout         8000
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-post-result]
                 :on-failure      [::failure-post-result]}}
   ))

(re-frame/reg-event-db
 ::good-http-result
 (fn [db [_ {:keys [msg]}]]
   (do (println msg)
       (assoc db :msg msg))))

(re-frame/reg-event-fx
 ::bad-http-result
 (fn [db [_ {:keys [data]}]]
   (do (println data)
       (println "fail init"))))

(re-frame/reg-event-fx
 ::read-msg-txt
 (fn []
   {:http-xhrio {:method          :GET
                 :uri             "/init"
                 :timeout         8000                                           ;; optional see API docs
                 :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                 :on-success      [::good-http-result]
                 :on-failure      [::bad-http-result]}}))

(re-frame/reg-event-fx
 ::success-post-result
 (fn []
   (pp/pprint "done brayy")))

(re-frame/reg-event-fx
 ::failure-post-result
 (fn []
   (pp/pprint "fail brayy")))