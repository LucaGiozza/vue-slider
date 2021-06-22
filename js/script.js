const app = new Vue(

    {
    el : '#app',
  
    data: {
  
      incremento : 0,
  
      photos:[
  
          'img/zz.jpg',
          'img/treno.jpg',
          'img/erm.jpg',
          'img/iton.jpg',
          'img/dobby.jpg',
          'img/sile.jpg',
          'img/vold.jpg.crdownload',
          'img/hag.jpg',
          'img/malfoy.jpg',


      ]
    },
  
    
  
    methods :{
        endPhoto(){
  
          
          (this.incremento == this.photos.length - 1) ? this.incremento = 0
          : this.incremento++;
        },
  
        startPhoto(){
             if(this.incremento == 0){
          this.incremento = this.photos.length - 1 ;
      
  
             }else{
                 this.incremento--;
             }
  
        },
        cambiaPhoto(indice){
            this.incremento = indice;
        }
  
    }
  
    }
  
  
  
  
  
  
  
  );