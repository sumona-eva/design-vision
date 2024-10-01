<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import {onMounted, ref, provide, inject} from "vue";
import HeroSection from '@/components/Home/HeroSection.vue';
import RoundedText from '@/components/RoundedText.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Thumbs,Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import useAxios from '@/composables/useAxios.js';
import HeroSlider from "@/components/HeroSlider.vue";
import Container from "@/components/Layouts/Container.vue";

// const modules  = [FreeMode, Thumbs,Autoplay,EffectFade];
//
// const {loading, error, sendRequest} = useAxios();
//
// const sliders = ref(null);
// const getSlider = async () => {
//     const response = await sendRequest({
//         method:'get',
//         url: '/frontend/slider'
//     });
//     if(response){
//         sliders.value = response.data;
//     }
// }
//
// const services = ref(null);
// const getServices = async () => {
//     const response = await sendRequest({
//         method:'get',
//         url:'/frontend/service'
//     });
//     if(response){
//         services.value = response.data;
//     }
// }
//
// const projects = ref(null);
// const getProject = async () => {
//     const response  = await sendRequest({
//         method:'get',
//         url:'/frontend/recent-project'
//     });
//     if(response){
//         projects.value = response.data;
//     }
// }
//
// onMounted(async () => {
//     window.scrollTo(0,0);
//     await getSlider();
//     await getServices();
//     await getProject();
// })
</script>

<template>
    <GuestLayout>
        <HeroSlider />

        <section class="pt-10 lg:pt-20">
           <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 ">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl font-bold mt-5 lg:mt-0">ABOUT US</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">Design Vision Associates Ltd. was founded in the year 1998 with a firm committed towards promoting design excellence and cultivating culture
                                of professionalism in the practice. Design Vision Associates Ltd. run by a team of highly motivated architects and engineers who strive
                                to provide design and service of highest quality to all projects commissioned. The firm has been commissioned for various types of exciting
                                projects, residential, industrial, commercial and special type of works. A fully registered architectural consultancy services ranging from concept,
                                master planning, space planning, project co-ordination and management & feasibility studies for a multitude of building types and structures,
                                interior design and project implementation for clients in both the public and private sectors.
                            </p>
                            <RouterLink to="/about" class=" inline-block bg-primary mt-8 text-white px-4 py-1 font-bold ">SEE MORE</RouterLink>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/home_about.jpg  " alt="">
                        </div>
                    </div>

                </div>
           </Container>
       </section>
        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/home_services.jpg" alt="">
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold">SERVICES</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify"  >
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiaeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>

                            <RouterLink to="/all-services" class="inline-block bg-primary mt-8 text-white px-4 py-1 font-bold ">SEE MORE</RouterLink>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold">WORK</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiaeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>

                            <RouterLink to="/work" class="inline-block bg-primary mt-8 text-white px-4 py-1 font-bold ">SEE MORE</RouterLink>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/home_works.jpg" alt="">
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section class="py-10 lg:py-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/home_contact-with-us.jpg" alt="">
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold">CONTACT WITH US</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiaeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>

                            <RouterLink to="/contact" class="inline-block bg-primary mt-8 text-white px-4 py-1 font-bold ">SEE MORE</RouterLink>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </GuestLayout>
</template>
<style scoped>

</style>
