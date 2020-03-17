import Vue from 'vue';
import _ from 'lodash';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Hello from the End of The World !',
        rawHtmlMessage: '<small>(Stay tuned)</small>',
        textMessage: '2 < 3, isn\'t it ?',
        imageSrc: 'img/dta.png',
        firstName: "Franck",
        lastName: "Gerdolle",
        counter: 0
    },
    created: function(){
        console.log("instance created");
    },
    mounted:function(){
        console.log("instance mounted");
    },
    computed :{
        fullName: function(){
            return (this.firstName + ' ' + this.lastName);
        },
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        deburredMessage: function() {
            return _.deburr(this.message);
        }
    },
    methods: {
        increment: function() {
            this.counter++;
        }
    },
    
});