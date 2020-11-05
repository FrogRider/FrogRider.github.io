export default Vue.component('joma-password-input', {
  template: `
    <div class="password-input">
      <input 
        :type='isVisible' 
        placeholder='Password'
      >
      <span 
        @click="showHide"
        :class="{transparent: !this.show}"
      ></span>
    </div>
  `,
  data: function () {
    return {
      show: false
    };
  },
  methods: {
    showHide: function () {
      this.show = !this.show
    }
  },
  mounted() {
  },
  computed: {
    isVisible: function () {
      if (this.show) return 'text'
      else return 'password'
    }
  },
});
