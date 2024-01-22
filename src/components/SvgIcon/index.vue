<template>
  <div
    v-if="External"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-bind="$attrs"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
import { isExternal } from '@/utils/validate'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const External = computed(() => {
      return isExternal(props.iconClass)
    })
    const symbolId = computed(() => {
      return `#icon-${props.iconClass}`
    })
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })
    const styleExternalIcon = computed(() => {
      return {
        mask: `url(${props.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
      }
    })

    return {
      External,
      symbolId,
      svgClass,
      styleExternalIcon,
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1.4em;
  height: 1.4em;
  margin: 0 0 0 2px;
  vertical-align: -0.1em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>