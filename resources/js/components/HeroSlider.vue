
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import {ref,onMounted} from "vue";
import useAxios from "@/composables/useAxios.js";

const modules = [Autoplay, Pagination, Navigation, EffectFade];

const {loading,error,sendRequest} = useAxios();
const sliders = ref(null);
const getSliders = async () => {
    const response = await sendRequest({
        method: 'get',
        url: '/v1/slider',
    });
    if  (response){
        sliders.value = response.data.data;
    }
}
onMounted(()=>{
    getSliders();
});

</script>

<template>

    <Swiper
        v-if="sliders"
        :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
        :effect="'fade'"
        :loop="true"
        :speed=10

        :mousewheel="{
      forceToAxis: true
    }"
        :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
        :modules="modules"
        :grabCursor= "true"
        class="mySwiper"
    >
        <SwiperSlide v-for="slider in sliders" :key="slider.id">
            <div class="relative w-full h-full">
                <img :src="slider?.image"
                     class="w-full h-full object-cover" alt="">
                <div class="content text-center">
                    <h3 class="text-2xl lg:text-6xl mb-5 font-playfair">{{ slider?.title }}</h3>
                    <p class="mb-5 font-roboto text-sm lg:text-md">{{ slider?.sub_title }}</p>
                    <RouterLink :to="slider?.redirect_url" class="border-2 border-white px-10 py-2 text-white hover:bg-primary font-roboto">More Info</RouterLink>
                </div>
            </div>
        </SwiperSlide>
        <div class="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"/></svg>
        </div>
        <div class="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"/></svg>
        </div>
    </Swiper>
</template>


<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 100%;
    background: #000;
    &-slide {
        height: 100vh !important;
        color: #fff;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.4);
            z-index: 99;
        }
        img {
            transform: scale(1);
            transition: all ease-in-out 5s !important;
        }
        .content {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            z-index: 999;
        }
        &-active {
            img {
                transform: scale(1.2);
                transition: all ease-in-out 5s !important;
            }
            .content {
                top: 50%;
                transition: all 2s !important;
                opacity: 1;
            }
        }
    }
}


.swiper-button-prev, .swiper-button-next{
    width:30px !important;
    height: 30px !important;
    border: 1px solid #fff !important;
    border-radius: 999px;
    &::after {
        content: unset !important;
    }
}

.swiper-button-prev svg, .swiper-button-next svg {
    width: 20px !important;
    height: 20px !important;
}
</style>
