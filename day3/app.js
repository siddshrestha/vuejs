new Vue({
    el: '#vue-app',

    data: {
        characters: ['Siddhartha', 'Saurav', 'Rishab', 'Prajit'],
        ninjas: [
            { name: 'Sidd', age: 24},
            { name: 'Saurav', age: 24},
            { name: 'Rishab', age: 18},
        ],
        error: false,
        success: false,

        health: 100, 
        ended: false
    },

    methods: {
        punch: function(){
            this.health -=10;
            if(this.health <= 0){
                this.ended = true;
            }
        },

        restart: function(){
            this.health = 100;
            this.ended = false;
        }


    
    }

})