export default Vue.component('joma-side-menu-block', {
props: ['item'],
template: `
    <div>
    <div class="side-menu__part">
      <div class="side-menu__subtitle">
        {{item.subtitle}}
      </div>
      <a 
        class="side-menu__item"
        v-for="row in item.items" 
        :class="'side-menu__item_' + row.mod"
        :key="row.mod"
        :href="row.linkTo"
      >
        {{row.lable}}
      </a>
    </div>
    </div>
    <!-- <p>BLOCK</p> -->
  `
})