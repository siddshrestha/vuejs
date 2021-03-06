new Vue({
    el: '#vue-app',
    data: {
        name: 'Siddhartha',
        job: 'Frontend Developer', 
        website: 'https://www.linkedin.com/in/siddhartha-shrestha-b93277190/',
        websiteTag: '<a href="https://www.linkedin.com/in/siddhartha-shrestha-b93277190/">Sidd Linkedin </a>',
        age: 24,
        x: 0,
        y: 0,
        fname: '',
        realage: '',
        a: 0,
        b: 0,
        available: false,
        nearby: false
    },
    methods: {
        greet: function(time){
            
            return 'Good' + time + ' ' + this.name;
        },

        add: function(inc){
            this.age += inc;
        },

        sub: function(dec){
            this.age -= dec;
        },

        logName: function(){
            console.log("You entered your name");
        },
        logAge: function(){
            console.log("You entered your age");
        },

        


        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }


    },

    computed: {
        addtoA: function(){
            return this.a + this.age;
        },

        addtoB: function(){
            return this.b + this.age;
        },

        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
