
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { FreeMode, Navigation, Thumbs,Autoplay, EffectFade} from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/effect-fade';
    import 'swiper/css/navigation';
    import 'swiper/css/thumbs';
    const modules  = [FreeMode, Navigation, Thumbs,Autoplay,EffectFade];

    const props = defineProps({
        sliders:Array,
    });
</script>
<template>
    <section class="py-10">
        <div class="text-center mx-w-[1444px] max-auto">
            <h1 data-aos="fade-right" data-aos-duration="1200" class="text-white text-6xl lg:text-8xl  font-extrabold py-12 tracking-wider"> GRAPHIC <span class="transparent-text" >DESIGN</span> AGENCY</h1>
        </div>
    </section>

    <section>
        <div data-aos="fade-up" data-aos-duration="1200" class="px-3 lg:px-10 w-full max-w-[1880px] rounded-lg overflow-hidden">
            <Swiper
                :effect="'fade'"
                :speed= "1500"
                :grabCursor="true"
                :autoplay= "{
                    delay: 1000,
                    disableOnInteraction: true,
                }"
                :loop="true"
                :allowTouchMove="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
                <SwiperSlide v-for="slide in sliders">
                    <RouterLink :to="slide?.url ?? '/'" class="block w-full h-52 lg:h-[550px] bg-slate-200  overflow-hidden">
                        <img class="w-full h-full" :src="slide?.image" />
                    </RouterLink>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
