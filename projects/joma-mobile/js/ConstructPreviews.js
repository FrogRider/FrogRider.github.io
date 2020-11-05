export default Vue.component('joma-construct-previews', {
  template: `
    <div class="construct__sliders">
      <div 
        v-for="(item, idx) in exemplar" 
        :key="idx"
        class="construct__slider"
      >
        <div 
          @click=prevImage(idx)
          class="construct__slider-control construct__slider-control_prev"
        ></div>

        <div class="construct__slider-image">
          <img :src=getImage(idx) alt=""/>
        </div>
        
        <div 
          @click=nextImage(idx)
          class="construct__slider-control construct__slider-control_next"
        ></div>
      </div>
    </div>
  `,
  data: function () {
    return {
      images: [],
      exemplar: [],
      folder: '/assets/img/'
    };
  },
  methods: {
    getImage(setId) {
      const src =  this.exemplar[setId].sources[this.exemplar[setId].active]
      // console.log(src.src)
      return `${this.folder}${src.src}`
    },
    nextImage(setId) {
      const imagesInCurentList = this.exemplar[setId].sources.length
      const nextImage = this.exemplar[setId].active + 1
      if (imagesInCurentList <= nextImage) {
        this.exemplar[setId].active = 0
      } else {
        this.exemplar[setId].active += 1
      }
    },
    prevImage(setId) {
      const imagesInCurentList = this.exemplar[setId].sources.length
      const prevImage = this.exemplar[setId].active - 1
      if (prevImage < 0) {
        this.exemplar[setId].active = imagesInCurentList - 1
      } else {
        this.exemplar[setId].active -= 1
      }
    }
  },
  mounted() {
    window.addEventListener('load', () => {

      const containers = document.querySelectorAll('.construct__images');
      containers.forEach((el, idxOne) => {
        const imageSets = el.querySelectorAll('img');
        const sources = [];
        imageSets.forEach((img, idxTwo) => {
          const imageName = img.src.split('/').splice(-1).toString()
          sources.push({src: imageName, idx: `${idxOne}${idxTwo}`});
        });
        this.images.push(sources);
      });

    });
  },
  watch: {
    images: function() {
      if(this.images.length) {
        this.exemplar = []
        this.images.forEach((set) => {
          this.exemplar.push({sources: set, active: 0})
        })
      }
    }
  },
});
