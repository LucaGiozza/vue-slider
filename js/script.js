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
          'img/vold.jpg',
          'img/hag.jpg',
          'img/malfoy.jpg',


      ],

      intervallo: ''
    },
       // aggiunta set interval
       mounted(){
        this.intervallo = setInterval(this.endPhoto, 3000);

        document.addEventListener("keydown", (element) => {
            console.log(element.key);
            if(element.key == 'ArrowRight'){
                this.endPhoto();
            }else if(element.key == 'ArrowLeft'){
                this.startPhoto();
            }



        } );

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
  
    },

 
  
    }
  
  
  
  
  
  
  
  );



