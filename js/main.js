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
    ],
  },
  methods:{
    nextPhoto(indexPhoto){
      this.indexPhoto += 1;
      if ( this.indexPhoto >= this.photos.length ) {
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

const timerContainer = new Vue({
  el: ".timerContainer",
  data:{
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
  },
  computed:{
    seconds:() => 1000,
    minutes(){
      return this.seconds * 60
    },
    hours() {
      return this.minutes * 60
    },
    days(){
      return this.hours * 24
    }
  },
  mounted(){
    console.log("ciaooooo");
    this.showTime();
  },
  methods:{
    showTime(){
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020,12,25,0,0,0);
        const passingTime = end.getTime() - now.getTime();
        if (passingTime < 0) {
          clearInterval(timer);
          return;
        }
        const days = Math.floor(passingTime / this.days);
        const hours = Math.floor((passingTime % this.days) / this.hours );
        const minutes = Math.floor((passingTime % this.hours) / this.minutes );
        const seconds = Math.floor((passingTime % this.minutes) / this.seconds);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;

      }, 1);
    }
  },
});

const footer = new Vue({
  el:"#footer1",
  data:{
    footer:{
      about:{
        title: "about us",
        p:"Cum nociis natoquepenatibus et magnis dis parturient montesnascitus ridiculus mus",
        socials:[
          "fab fa-facebook-square",
          "fab fa-twitter-square",
          "fab fa-linkedin",
          "fab fa-google-plus-square",
          "fab fa-pinterest-square"
        ]
      },
      news:{
        title: "recent news",
        links:[
          "sem porta mollis parturient",
          "nullam lorem mattis purus",
          "nibh set sim ullamcorper",
          "donec luctus imperdiet",
          "magna pars studiorum"
        ],
      },
      seat:{
        title: "get your seat!",
        span:"Book for your seat before it's too late. We provide variety of ticket options.",
        button:"check out tickets!"
      },
      gallery:{
        title: "gallery from last year",
        pictures:[
          "tizia-cuffie.jpg",
          "photodune-multiethnic-people.jpg",
          "creative-man-relaxing.jpg",
          "card01.jpg",
          "card04.jpg",
          "13349065283.jpg",
          "2-item-1.jpg",
          "photodune-white-coffee.jpg",
          "essentials-denim.jpg"
        ]
      }
    },

  },
  methods:{

  }
});
