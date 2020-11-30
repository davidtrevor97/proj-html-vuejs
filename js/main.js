const slider = new Vue({
  el: ".slider",
  data:{
    indexPhoto: 0,
    photos:[
      "./img/speaker-1.jpg ",
      "./img/speaker-2.jpg" ,
      "./img/speaker-3.jpg" ,
      "./img/speaker-4.jpg" ,
      "./img/speaker-5.jpg" ,
      "./img/speaker-6.jpg" ,
      "./img/speaker-7.jpg ",
      "./img/speaker-8.jpg ",
    ]
  },
  methods:{
    nextPhoto(indexPhoto){
      this.indexPhoto += 1;
      if ( this.indexPhoto === this.photos.length ) {
        this.indexPhoto = 0
      }
    },
    prevPhoto(indexPhoto){
      this.indexPhoto -= 1;
      if ( this.indexPhoto < 0 ) {
        this.indexPhoto = this.photos.length
      }
    }
  },

});
