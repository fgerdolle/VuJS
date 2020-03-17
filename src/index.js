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
        counter: 0,
        randomNumber: 1,
        items: [
            {id: 1, label: 'Nadochi'},
            {id: 2, label: 'Pistolet'},
            {id: 3, label: 'Fusil à levier'},
            {id: 4, label: 'Armure Samurai'},
        ]
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
        },
        noContentMessage: function() {
            return 'No content displayed, because random number genetared was : ' + this.randomNumber;
        }
    },
    methods: {
        increment: function() {
            this.counter++;
        },
        displayContent: function() {

            this.randomNumber = _.random(1, 10);

            console.log(this.randomNumber);

            return this.randomNumber % 2;
        }
    },
    
});