import jomaHeader from './Header.js'
import sideMenu from './SideMenu.js'
import dropDown from './DropDown.js'
import cartItem from './CartItem.js'
import searchItem from './SearchItem.js'
import constructPreviews from './ConstructPreviews.js'
import passwordInput from './PasswordInput.js'

new Vue({
  el: '#app',
  comments: {
    jomaHeader, sideMenu, dropDown, cartItem, searchItem, constructPreviews, passwordInput
  },
  data: function () {
    return {
      sideMenu: false,
      filters: false,
      cart: false,
      search: false,
    }
  },
  methods: {
    fixBody () {
      const body = document.querySelector('body')
      body.classList.toggle('fixed')
    },
    togleMenu () {
      if(this.filters) this.togleFilters()
      if(this.cart) this.togleCart()
      if(this.search) this.togleSearch()
      this.fixBody()
      this.sideMenu = !this.sideMenu
    },
    togleFilters () {
      if(this.sideMenu) this.togleMenu()
      if(this.cart) this.togleCart()
      if(this.search) this.togleSearch()
      this.fixBody()
      this.filters = !this.filters
    },
    togleCart () {
      if(this.sideMenu) this.togleMenu()
      if(this.filters) this.togleFilters()
      if(this.search) this.togleSearch()
      this.fixBody()
      this.cart = !this.cart
    },
    togleSearch () {
      if(this.sideMenu) this.togleMenu()
      if(this.filters) this.togleFilters()
      if(this.cart) this.togleCart()
      this.fixBody()
      this.search = !this.search
    }
  },
  mounted () {
    // document.addEventListener('click', (e) => {
    //   console.log(e.target.classList.value)
    //   if( this.sideMenu || this.filters || this.cart ) {
    //     if (e.target.classList.value === 'close') {
    //       this.sideMenu = this.filters = this.cart = false
    //       document.querySelector('body').classList.remove('fixed')
    //     }
    //   }
    // })
  }
});
