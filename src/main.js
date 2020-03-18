import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
//buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
//database
import database from "./database";

database.serialize(() => {
  database.run(`CREATE TABLE IF NOT EXISTS STOCKS(
                stockId INTEGER PRIMARY KEY, 
                name VARCHAR(150),
                description VARCHAR(150),
                quatity INTEGER,
                price INTEGER,
                gst INTEGER,
                total INTEGER)`);
  database.run(`CREATE TABLE IF NOT EXISTS CUSTOMERS(
                customerId INTEGER PRIMARY KEY, 
                name VARCHAR(150),
                phone NUMERIC,
                email VARCHAR(150),
                address VARCHAR(150))`);
});
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
