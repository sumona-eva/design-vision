<script setup>
import Container from "@/components/Layouts/Container.vue";
import GuestLayout from "@/components/Layouts/GuestLayout.vue";
import SwiperSlide from "@/components/SwiperSlide.vue";
</script>

<template>
    <GuestLayout>
        <section class="py-10 lg:py-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 ">
                        <div class="px-3">
                            <h2 class="text-base lg:text-lg font-bold mt-5 lg:mt-0"> Title : Architecture</h2>
                            <div>
                                <div class="flex flex-col ">
                                    <div class="w-full lg:w-3/4">
                                        <div>
                                            <ul>
                                                <li class="w-full border-b pb-2 mt-5">
                                                    <span class="text-base p-4 text-gray-600">Type :</span>
                                                </li>
                                                <li class="w-full border-b pb-2 mt-5">
                                                    <span class="text-base px-4 mt-3 text-gray-600">Location :</span>
                                                </li>
                                                <li class="w-full border-b pb-2 mt-5">
                                                    <span class="text-base px-4 mt-3 text-gray-600">Completion :</span>
                                                </li>
                                                <li class="w-full border-b pb-2 mt-5">
                                                    <span class="text-base px-4 mt-3 text-gray-600">Client :</span>
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
                            <SwiperSlide />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    </GuestLayout>
</template>

<style scoped>

</style>
