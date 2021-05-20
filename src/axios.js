import Vue from 'vue'
import axios from 'axios'
import proxy from "node-global-proxy";

// proxy.setConfig("http://localhost:9000");
// proxy.start();
Vue.prototype.$http = axios

export default {

}