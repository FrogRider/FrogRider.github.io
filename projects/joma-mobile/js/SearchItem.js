export default Vue.component('joma-search-item', {
  props: {
    'name': {
      type: String,
      default: 'Name',
    },
    'code': {
      type: String,
      default: ' ',
    },
    'image': {
      type: String,
      default: 'cart.png'
    },
    'price': {
      default: 0
    },
    'newPrice': {
      default: null
    }
  },
  computed: {
    imageSrc() {
      return `/assets/img/${this.image}`
    }
  },
  template: `
      <div class="search__item">
        <div class="search__item-inner">
          <div class="search__item-img">
            <img :src=imageSrc alt="">
          </div>
          <div class="search__item-info">
            <div class="search__item-name">
              {{name}}
            </div>
            <div class="search__item-code">
              {{code}}
            </div>
            <div class="search__item-price"
              :class="{'search__item-price_discount': newPrice}"
            >
              <div class="search__item-price-new">
                {{newPrice}} грн
              </div>

              <div class="search__item-price-old">
                {{price}} грн
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
});
