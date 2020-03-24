<template>
  <button v-on:click="incrementCount">You clicked me {{ count }} times.</button>
</template>


<script>
    export default {
        props: { 
            count : {
                type : Number,
                default: 0
            }, 
            increment : {
                type : Number,
                default: 1
            }
        },
        methods: {
            incrementCount: function() {
                this.count = this.count + this.increment;
            }
        }
    }
</script>

<style scoped>
  button{
      color: rgb(130, 7, 245);
      background-color: black;
      }

</style>