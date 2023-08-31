const bulb= {
    data(){
        return{
            showImage: false,
            isSelected: false,       
        };
    },
    methods: {
        changeImage(){
            {this.showImage = !this.showImage};
        },
    },
};
Vue.createApp(bulb).mount('#app') 