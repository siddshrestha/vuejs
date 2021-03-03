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

        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    },
});
