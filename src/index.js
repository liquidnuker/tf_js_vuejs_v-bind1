// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok
let Vue = require("./js/vendor/vue.min.js");
let app2 = new Vue({
  el: '#app-2',
  data: {
    message: "v-bind message"
  }
});