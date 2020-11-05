export default Vue.component('drop-down', {
  template: `
    <div 
      class="dropdown"
      :class="modifyer('dropdown')"
    >
      <div 
        class="dropdown__title"
        @click="!disabled ? expanded = !expanded : null"
      >
        {{label}}
        <span   
          class="arrow" 
          :class="{arrow_fliped: expanded}" 
          v-if="!disabled"
        >
        </span>

        <span class="status">
          {{status}}
        </span>
      </div>

      <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div 
          class="dropdown__content"
          :class="modifyer('dropdown__content')"
          v-if="expanded"
        >
          <slot v-model="data"/>

        </div>
      </transition>
    </div>
  `,
  data: function () {
    return {
      expanded: false
    }
  },
  methods: {
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'relative';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      
      element.style.height = height;

      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
    modifyer (block) {
      return block + '_' + this.mod
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "Default"
    },
    mod: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: 'В обробці'
    }
  }

})
