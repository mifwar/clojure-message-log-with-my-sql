(ns web.core
  (:require [reitit.ring :as ring]
            [reitit.middleware :as middleware]
            [muuntaja.core :as m]
            [aleph.http :as http]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [mount.core :as mount]
            [ring.adapter.jetty :as ring-jetty]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [xtdb.api :as xt]
            [clojure.java.jdbc :as jdbc]))

(defn index-handler [_]
  {:body (slurp (io/resource "public/index.html"))})

(def path (get (read-string (slurp (io/resource "public/param/param.edn"))) :db_path "kosong mas"))

(def mysql-db {:dbtype "mysql"
               :dbname "db_log_message"
               :user "root"
               :password "mif__mif"})

(def fruit-table-ddl
  (jdbc/create-table-ddl :msg
                         [[:unixtime :bigint]
                          [:message "varchar(32)"]]))

(defn insert-val [unix msg]
(jdbc/insert-multi! mysql-db :msg
                    [{:unixtime unix :msg msg}]))

(defn create-handler [{:keys [body-params]}]
  ;; (jdbc/insert-multi! mysql-db :fruit
  ;;                  [{:name "Apple" :appearance "rosy" :cost 24}
  ;;                   {:name "Orange" :appearance "round" :cost 49}])
  ;; (jdbc/db-do-commands mysql-db
  ;;                      [fruit-table-ddl
  ;;                       "CREATE INDEX name_ix ON fruit ( name );"])
  (println (get-in body-params [:input :message] "gaada message"))
  (jdbc/db-do-commands mysql-db
                       [
                        ;; fruit-table-ddl
                        ;; (str "CREATE TABLE IF NOT EXISTS :msg( "
                        ;;      "unixtime BIGINT, "
                        ;;      "message VARCHAR(100), "
                        ;;      "PRIMARY KEY ( unixtime )); ")
                        ;; "CREATE INDEX unix_idx ON :msg ( unix );"
                        (jdbc/insert-multi! mysql-db :msg
                                            [{:unixtime (get-in body-params [:input :unix-time] 0)
                                              :message (get-in body-params [:input :message] "gaada message")}])
                        ;; (insert-val (get-in body-params [:input :unixtime]) (get-in body-params [:input :message]))
                        ])
  (println body-params)

  ;; (spit (io/resource path) body-params)
  {
   :body {:unixtime (get-in body-params [:input :unix-time] 0)
          :message (get-in body-params [:input :message] "gaada message")}
   :timeout 8000
   :status 200}
  )

 (defn init-post [_]
   (println "init")
   (jdbc/db-do-commands mysql-db [
                                  ;; fruit-table-ddl
                                  (str "CREATE TABLE IF NOT EXISTS msg( "
                                       "unixtime BIGINT, "
                                       "message VARCHAR(100), "
                                       "PRIMARY KEY ( unixtime )); ")
                                  ;; "CREATE INDEX unix_idx ON :msg ( unixtime );"
                                  ;; "SELECT * FROM msg AS q;"
                                  ])
   (println "init 2")
   (println (json/write-str {:msg (jdbc/query mysql-db ["SELECT * FROM msg;"])}))
   (println "init 3")
   {
    :body (json/write-str {:msg (jdbc/query mysql-db ["SELECT * FROM msg;"])})
    ;; :body (slurp (io/resource path))
    :timeout 8000
    :status 200})

(def app
  (ring/ring-handler
   (ring/router
    [
     ["/init" {:get init-post}]
    ;;  ["/test-page"  (jdbc/db-do-commands mysql-db
    ;;                                      [fruit-table-ddl
    ;;                                       "CREATE INDEX name_ix ON fruits ( name );"])
      ;; (println "test-page bang")
      ;; ]
     ["/submit" {:post create-handler
                 :middleware [:content]}]
     ["/assets/*" (ring/create-resource-handler {:root "public/assets/"})]
     ["/" {:get index-handler}]]
    {::middleware/registry {:content muuntaja/format-middleware}
     :data {:muuntaja m/instance}})))

(mount/defstate server
  :start (http/start-server #'app {:port 8123})
  :stop (.close server))

(defn -main [& _]
  (mount/start))

;;pedestal router