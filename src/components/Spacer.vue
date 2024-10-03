<script setup lang="ts">
import {computed} from 'vue'
import {resolveColor} from '/src/utils/resolve'

interface SpacerOptions {
  paddingTop:any
  paddingBottom:any 
  lineSize:any
  bgColor:any

}

// ---

// Define props for the Spacer component
const props = defineProps<SpacerOptions>()

// Helper function to get the responsive value or default
function getResponsiveValue(
  value: { default: string, laptop?: string, mobile?: string } | undefined,
  defaultValue: string,
): { default: string, laptop: string, mobile: string } {
  // Provide a default object if value is undefined
  const defaultObject = { default: defaultValue, laptop: defaultValue, mobile: defaultValue }
  const resolvedValue = value ?? defaultObject

  return {
    default: resolvedValue.default,
    laptop: resolvedValue.laptop ?? resolvedValue.default,
    mobile: resolvedValue.mobile ?? resolvedValue.default,
  }
}

// Create responsive padding and line size styles
const responsivePaddingTop = computed(() => {
  const padding = getResponsiveValue(props.paddingTop, '160px')
  return {
    '--spacer-padding-top': padding.default,
    '--spacer-padding-top-laptop': padding.laptop,
    '--spacer-padding-top-mobile': padding.mobile,
  }
})

const responsivePaddingBottom = computed(() => {
  const padding = getResponsiveValue(props.paddingBottom, '10px')
  return {
    '--spacer-padding-bottom': padding.default,
    '--spacer-padding-bottom-laptop': padding.laptop,
    '--spacer-padding-bottom-mobile': padding.mobile,
  }
})

const responsiveLineSize = computed(() => {
  const lineSize = getResponsiveValue(props.lineSize, '1px')
  return {
    '--spacer-line-size': lineSize.default,
    '--spacer-line-size-laptop': lineSize.laptop,
    '--spacer-line-size-mobile': lineSize.mobile,
  }
})
</script>

<template>
  <!-- Main spacer container with ARIA role for accessibility -->
  <div
    data-sanity-edit-target
    class="spacer"
    role="separator"
    aria-orientation="horizontal"
    :class="{
      'spacer--striped-lines': stripedLines,
    }"
    :style="{
      '--spacer-bg-color': resolveColor(bgColor),
      ...responsivePaddingTop,
      ...responsivePaddingBottom,
      ...responsiveLineSize,
    }"
  >
    <!-- Line element with ARIA role for accessibility -->
    <div
      class="spacer__line"
      role="presentation"
      :class="{
        'spacer__line--custom': !!lineColor,
      }"
      :style="{
        '--spacer-line-color': resolveColor(lineColor),
        ...responsiveLineSize,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.spacer {
  // Default padding
  padding-top: var(--spacer-padding-top, $space-6);
  padding-bottom: var(--spacer-padding-bottom, $space-1);

  // Background color for striped lines
  background-color: var(--spacer-bg-color, transparent);

  &__line {
    // Default line styles
    background-color: var(--spacer-line-color, $color-primary);
    height: var(--spacer-line-size, 1px);
  }

  &--striped-lines {
    padding-bottom: 0 !important; // Remove bottom padding

    background: repeating-linear-gradient(
      90deg,
      /* 90 degrees for horizontal stripes */ #fff,
      /* First color */ #fff 1px,
      /* First color stops after 1px */ var(--spacer-bg-color, #f5f5f5) 1px,
      /* Second color starts at 1px */ var(--spacer-bg-color, #f5f5f5) 8px /* Second color stops after 8px */
    );

    .spacer__line {
      height: 0 !important; // Remove height for lines in striped lines
    }
  }

  // Responsive styles
  @include media('>mobile', '<laptop') {
    padding-top: var(--spacer-padding-top-laptop, var(--spacer-padding-top, $space-6));
    padding-bottom: var(--spacer-padding-bottom-laptop, var(--spacer-padding-bottom, $space-1));

    .spacer__line {
      height: var(--spacer-line-size-laptop, var(--spacer-line-size, 1px));
    }
  }

  @include media('<=mobile') {
    padding-top: var(--spacer-padding-top-mobile, var(--spacer-padding-top, $space-6));
    padding-bottom: var(--spacer-padding-bottom-mobile, var(--spacer-padding-bottom, $space-1));

    .spacer__line {
      height: var(--spacer-line-size-mobile, var(--spacer-line-size, 1px));
    }
  }
}
</style>
