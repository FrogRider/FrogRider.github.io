export default Vue.component('joma-header', {
  template: `
    <header 
      class="header"
      :class="{'header_labled': lable}"
    >
      <div class="header__menu">
        <div class="header__burger-button" id="menu-btn"
          @click="menuBtnClicked()"
        >
          <span />
        </div>
        <div class="header__logo" :title=lable>
          {{ lable }}
        </div>
      </div>

      <div class="header__icons">
        <div class="header__icon header__icon_phone"></div>
        <div 
          class="header__icon header__icon_search"
          @click="searchClicked()"
        ></div>
        <div 
          class="header__icon header__icon_cart"
          @click="cartClicked()"
        >
          <div v-if="itemsAmount > 0" class="itemsAmount">{{itemsAmount}}</div>
        </div>
      </div>
    </header> 
  `,
  methods: {
    menuBtnClicked () {
      this.$emit('menu-btn-clicked')
    },
    cartClicked () {
      this.$emit('cart-clicked')
    },
    searchClicked () {
      this.$emit('search-clicked')
    }
  },
  props: {
    'lable': {
      type: String,
      default: ''
    },
    itemsAmount: {
      type: Number,
      default: 0
    }
  }
})