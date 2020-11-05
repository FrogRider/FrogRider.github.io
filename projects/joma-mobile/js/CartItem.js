export default Vue.component('joma-cart-item', {
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
    'size': {
      type: String,
      default: ' '
    },
    'spain': {
      type: Boolean,
      default: false
    },
    'oldPrice': {
      default: null
    },
    'amount': {
      type: Number,
      default: 1
    }
  },
  computed: {
    imageSrc() {
      return `/assets/img/${this.image}`
    }
  },
  template: `
      <div class="cart-item">
        <div class="cart-item__inner">
          <div class="cart-item__item">
            <div class="cart-item__img">
              <img :src=imageSrc alt=""/>
            </div>
            <div class="cart-item__info">
              <div class="cart-item__name">
                {{name}}
                <div class="cart-item__close">
                  <slot></slot>
                </div>
              </div>

              <div class="cart-item__code">
                {{code}}
              </div>

              <div class="cart-item__columns">
                <div class="cart-item__left">
                  <div 
                    class="cart-item__old-price"
                    :class="{'cart-item__old-price_show': oldPrice}"
                  >
                    {{oldPrice}} грн
                  </div>

                  <div 
                    class="cart-item__price"
                    :class="{'cart-item__price_sale': oldPrice}"
                  >
                    {{price}} грн
                  </div>
                </div>

                <div class="cart-item__right">
                  <div class="cart-item__size">
                  Розмір: <span>{{size}}</span>
                  </div>

                  <div class="cart-item__amount">
                    Кiлькiсть: <span>{{amount}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cart-item__spain" v-if="spain">
            Товар замовленно з іспанського складу. Доставка складає від 14 до 21 днів!
          </div>
        </div>
      </div>
    `
  })