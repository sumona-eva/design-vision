<script setup lang="ts">
import Container from '@/components/Layouts/Container.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
const modules  = [FreeMode, Navigation, Thumbs,Autoplay];

const props = defineProps({
    slides: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <div class="lg:pb-12">
        <Swiper
            :breakpoints="{
                '320': {
                    slidesPerView:1,
                    spaceBetween: 5,
                },
                '768': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView:1,
                    spaceBetween: 10,
                },
            }"
                :navigation="true"
                :autoplay="true"
                :modules="modules"
                class="mySwiper"
        >
            <SwiperSlide v-for="slide in slides">
                <div class="w-full h-full">
                    <img class="w-full h-full" :src="slide?.url" alt="">
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>

</style>
