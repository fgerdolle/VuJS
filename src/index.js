import Vue from 'vue';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Hello from the End of The World !',
        rawHtmlMessage: '<small>(Stay tuned)</small>',
        textMessage: '2 < 3, isn\'t it ?',
        imageSrc: 'img/dta.png'
    },
    created: function(){
        console.log("instance created");
    },
    mounted:function(){
        console.log("instance mounted");
    }
});