const Vue = require('vue')
const App = require('./app.vue')

new Vue({
    el: '#app',
    render: h => h(App)
})