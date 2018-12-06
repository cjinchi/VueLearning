var app  = new Vue({
   el:'#app',
    data:{
       items:['Sunday','Monday','Tuesday','Wednesday']
    },
    methods:{
       buttonClick:function(index){
            Vue.set(this.items,index,'  ');
       }
    }


});