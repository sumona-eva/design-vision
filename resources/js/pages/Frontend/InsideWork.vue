<script setup>
import Container from "@/components/Layouts/Container.vue";
import GuestLayout from "@/components/Layouts/GuestLayout.vue";
import SwiperSlide from "@/components/SwiperSlide.vue";
import axios from "axios";
import {onMounted,ref} from "vue";
import { useRoute } from 'vue-router';
import useAxios from "@/composables/useAxios.js";

const route = useRoute();

const {loading, error, sendRequest} = useAxios();

const project = ref(null);
const getProject = async () => {
        const response = await sendRequest({
            method: 'get',
            url: `/frontend/project/${route?.params?.slug}`,
        })
        if(response) {
            project.value = response.data;
        }
}
onMounted(() => {
    getProject();
})

</script>

<template>
    <GuestLayout>
        <section class="py-10 lg:py-20 min-h-[80vh]">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 ">
                        <div class="px-3">
                            <h2 class="text-base lg:text-lg font-bold mt-5 lg:mt-0"> Title : {{project?.data?.title}}</h2>
                            <div>
                                <div class="flex flex-col ">
                                    <div class="w-full lg:w-3/4">
                                        <div>
                                            <ul>
                                                <li class="w-full border-b pb-2 mt-5" v-for="item in project?.data?.specification">
                                                    <span class="text-base p-4 text-gray-600">{{item?.key}} :</span>
                                                    <span class="text-base p-4 text-gray-600">{{item?.value}} </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <SwiperSlide :slides='project?.data?.images' />
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div v-html="project?.data?.description">

                </div>
            </Container>
        </section>
    </GuestLayout>
</template>

<style scoped>

</style>
