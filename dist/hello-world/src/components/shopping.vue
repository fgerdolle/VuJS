<template>
<div>
    <h2>Shopping List {{ title }}</h2>
    <input v-model="itemToAdd" placeholder="Add item"><span><button v-on:click="addItem">Add item</button></span>
    <ul>
        <li v-for="item in items">{{ item.label }}</li>
    </ul>
</div>
</template>

<script>
export default {
    data: function() { 
        return {
            items : [],
            itemToAdd : ''
        };
    },
    props: ['title'],
    methods: {
        addItem: function() {
            
            this.items.push({label : this.itemToAdd});

            this.itemToAdd = '';
        }
    },
    
    created: function() {
        console.log('Shopping instance created');
    },
    mounted: function() {
        console.log('Shopping instance mounted');
    },
    watch: {
        title: function(to, from) {
            this.items = [];
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