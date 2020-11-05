export default Vue.component('joma-lang', {
  template: `
    <div class="side-menu__lang">
      <div class="side-menu__lang-title">
        Оберіть мову
      </div>
      <span class="side-menu__lang-switch">
        <input type="radio" name="lang" id="en" checked>
        <label class="" for="en">EN</label>

        <input type="radio" name="lang" id="ua">
        <label for="ua">UA</label>
      </span>
    </div>
  `
})
