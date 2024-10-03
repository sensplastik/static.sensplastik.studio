<script setup lang="ts">
import LazyBaseButtonIconArrow from './icon/Arrow.vue'

interface  ButtonOptions {

}

interface Props {
  options?: ButtonOptions
  label?: string
  url?: string
  target?:string
  icon?: any
}

// Apply default values using withDefaults
const props = withDefaults(defineProps<Props>(), {
  options: () => ({

  }),
  label: 'Explore the content',
})
</script>

<template>
  <a
    class="button"
    :href="url"   
    role="button"
    aria-label="Explore the content"
  >
    <span class="button__label">
      {{ label }}
    </span>
    <LazyBaseButtonIconArrow :style="{ fill: '#48A427' }" aria-hidden="true" />
  </a>
</template>

<style scoped lang="scss">
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;
  padding: 0.5rem 1rem;
  font-weight: $font-weight-medium;

  border-radius: 22.5rem;
  border: 1px solid $color-primary;  

  &__label {
    font-family: $font-primary;
    @include font-style-4;
    line-height: 1.1875rem;

    @include media('>mobile', '<laptop') {
    }

    @include media('<=mobile') {
    }
  }
}
</style>
