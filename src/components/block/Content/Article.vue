<script setup lang="ts">
import { computed } from 'vue'
import LazyBaseButton from '../../base/Button/Button.vue'
import LazyBaseSpacer from '../../Spacer.vue'

// ---

// TypeScript interface for ArticleOptions
interface ArticleOptions {
    title?: {
        level: number
        grid?: {
            column?: {
                width: number
            }
        }
    }
    content?: {
        grid?: {
            column?: {
                width: number
            }
        }
    }
}

// TypeScript interface for props
interface Props {
    title?: string
    content?: string | object
    button?: any
    options?: ArticleOptions
}

// Define props with default values
const props = withDefaults(
    defineProps<Props>(),
    {
        title: 'We are Sensplastik®',
        content: '',
        options: () => ({
            title: {
                level: 3,
                grid: {
                    column: {
                        width: 4,
                    },
                },
            },
            content: {
                grid: {
                    column: {
                        width: 5,
                    },
                },
            },
        }),
    },
)

// Determine the heading tag
const HeadingTag = computed(() => `h${props.options?.title?.level || 3}`)

// Check if content is available
const hasTitle = !!props.title
const hasContent = !!props.content
const hasButton = !!props.button
</script>

<template>
    <article class="article" itemscope itemtype="http://schema.org/Article">

        <component :is="HeadingTag" class="article__heading" v-if="hasTitle">{{ title }}</component>

        <LazyBaseSpacer class="article__spacer" :paddingTop="{ default: '105px' }" :paddingBottom="{ default: '0' }"
            :lineSize="{ default: '0' }" />

        <div v-if="hasContent" class="article__content" itemprop="articleBody">
            <span v-html="content" />
        </div>

        <LazyBaseSpacer class="article__spacer" :paddingTop="{ default: '24px' }" :paddingBottom="{ default: '0' }"
            :lineSize="{ default: '0' }" />

        <LazyBaseButton v-if="hasButton" class="article__button" :aria-label="button.label" role="button"
            v-bind="button">
            {{ button.label }}
        </LazyBaseButton>

    </article>
</template>

<style scoped lang="scss">
.article {
    grid-column: span 5;

    @include grid(5);

    @include media('>mobile', '<laptop') {
        grid-column: span 6;
    }

    @include media('<=mobile') {
        grid-column: 1/-1;
    }


    &__heading {
        @include font-style-6;
        font-weight: $font-weight-medium;
        line-height: 112.5%;
        font-family: $font-secondary;
        grid-column: 1/ span 4;

    }

    &__spacer {
        grid-column: 1/ -1;
    }

    &__content {
        @include font-style-4;
        font-weight: $font-weight-medium;
        font-family: $font-primary;
        color: $color-secondary;

        :deep() p:not(:last-child) {
            margin-bottom: 1.25rem;
            margin-bottom: 1lh;
        }

        grid-column: 1/ -1;
    }

    &__button {
        grid-column: 1/ -1;
        max-width: max-content;
    }
}
</style>