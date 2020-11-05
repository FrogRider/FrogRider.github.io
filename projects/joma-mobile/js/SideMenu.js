import items from './sideMenuItems.js'
import sideMenuBlock from './SideMenuBlock.js'
import ChooseLang from './ChooseLang.js'

export default Vue.component('joma-side-menu', {
  components: {
    sideMenuBlock, ChooseLang
  },
  data: function() {
    return {
      items,
    }
  },
  template: `
    <nav class="side-menu">
      <div class="close"></div>
      <sideMenuBlock :item="items[0]"/>
      <sideMenuBlock :item="items[1]"/>
      <ChooseLang />
      <sideMenuBlock :item="items[2]"/>
    </nav>
  `
})