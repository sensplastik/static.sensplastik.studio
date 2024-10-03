<script setup lang="ts">
import { computed } from 'vue'
import Article from '../../block/Content/Article.vue'
import BaseTitle from '../../base/Title.vue';

// ---

</script>
<template>
    <div class="content">

        <div class="content__left">
            <BaseTitle :options="{ title: { level: 2 } }" text="We transport vehicles anywhere." />
        </div>

        <div class="content__right">
            <Article
                title="We transport vehicles anywhere with the highest precision and a seamlessly integrated customer journey"
                content="<p>With our innovative technology and systems and a team of around 100 specialist trained drivers, all employed by us, we transport vehicles where they need to be, exactly when they need to be there.Today Mobility provides a real - time solution that creates demonstrable control, traceability and efficiency improvements.</p>
            <p> Delivery is precise and scalable to handle any volume and we seamlessly integrate into your own customer journeys.Our optimised transport solutions minimise additional vehicle movements enabling you to reduce your environmental footprint compared to traditional solutions.Today we have national coverage in both Sweden and Norway, with structured plans for more countries in the near future.</p>"
                :button="{ label: 'Explore the content' }" />

        </div>

    </div>
</template>