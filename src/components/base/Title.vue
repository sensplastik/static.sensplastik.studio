<script setup lang="ts">
import {computed} from 'vue'

/**
 * Options for the title component.
 * @typedef {Object} TitleOptions
 * @property {Object} title - Title configuration.
 * @property {number} title.level - The heading level (e.g., 1 for <h1>).
 */
 interface TitleOptions {
  title: {
    level: number
  }
}

/**
 * Props for the LazyBaseTitle component.
 * @typedef {Object} Props
 * @property {TitleOptions} [options] - Options for configuring the title.
 * @property {string} [text] - The text to display as the title.
 */
 interface Props {
  options?: TitleOptions
  text?: string
}

// Apply default values using withDefaults
const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    title: {
      level: 1,
    },
  }),
  text: 'Building Brands with Lasting Stability',
})

const headingTag = computed(() => `h${props?.options?.title?.level || 1}`)
</script>

<template>
  <div class="title" itemscope itemtype="http://schema.org/CreativeWork">
    <div class="title__heading">
      <component :is="headingTag" itemprop="headline">
        {{ text }}
      </component>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Styles for title section
.title {
  @include grid;

  &__heading {
    font-family: $font-primary;
    grid-column: 5 / span 4;
    font-weight: $font-weight-medium;
    text-align: center;

    @include media('>mobile', '<laptop') {
      grid-column: 4 / span 6;
    }

    @include media('<=mobile') {
      grid-column: 3 / span 8;
    }

    h1,
    h2 {
      @include font-style-10;
    }

    h3 {
      @include font-style-9;
    }

    h4 {
      @include font-style-7;
    }

    h5 {
      @include font-style-6;
    }

    h6 {
      @include font-style-5;
    }
  }
}
</style>
