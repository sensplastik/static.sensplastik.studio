<script setup lang="ts">
import { computed } from 'vue'
import Article from '../../block/Content/Article.vue'
import BaseTitle from '../../base/Title.vue';


interface Content {
    image?:any
    title?:string 
    article?:any
    options?:any  
}

// ---

// Define props for the component
const props = withDefaults(defineProps<Content>(), {
});


const hasImage = !!props?.image
</script>
<template>
    <div class="content">

        <div class="content__image" v-if="hasImage">
            <div class="picture">
                <img :src="image?.src" alt="" class="picture__img" />
            </div>
        </div>


        <div class="content__left">
            <BaseTitle :options="{ title: { level: 2 } }" :text="title"
                class="content__title" />
        </div>

        <div class="content__right">
            <Article v-bind="article"/>
        </div>

    </div>
</template>

<style scoped lang="scss">
.content {
    grid-column: 1/-1;
    @include grid;

    row-gap: 3rem;

    background-color: $color-block-background;

    &__image {

        grid-column: 1/-1;

        :deep() .picture {
            border-radius: 1.5rem;
            overflow: hidden;

            &__img {
                width: 100%;
            }
        }
    }



    &__left {
        grid-column: 1/span 4;
    }

    &__right {
        grid-column: 7/span 5;
    }

    &__title {
        display: inline-block;


        :deep() {
            .title__heading {
                text-align: left;
                font-weight: $font-weight-medium;
                font-family: $font-secondary;

                h2,
                h3 {
                    @include font-style-6;
                }
            }
        }
    }
}
</style>