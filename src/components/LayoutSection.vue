<script setup lang="ts">
import defu from 'defu'

// Define the types for your props
const props = defineProps<{
  isFullWidth?: boolean
  hasGrid?: boolean
  children?: any
  options?: any
}>()

// Extract individual props with default values
const { isFullWidth = false, hasGrid = false } = props

const sectionLayout = props?.options?.layout?.default
</script>

<template>
  <section
    class="section"
    :class="[{ 'section--full': isFullWidth, 'section--grid': hasGrid }]"
    role="region"
    aria-label="Content Section"
  >
    <div class="section__container" >            
      <slot/>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  @include section-outer-layout;

  &--full {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  &__container {
    margin-left: auto;
    margin-right: auto;

    @include section-inner-layout;
  }

  &--grid {
    .section__container {
      @include grid;
    }
  }
}
</style>