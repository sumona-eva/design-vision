<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref} from 'vue';

const isNav = ref(false);
</script>


<template>
    <section class="lg:hidden">
        <Container class="flex items-center justify-between">
            <RouterLink to="/">
                <img class="w-52 h-auto " src="@/assets/images/DV_Header_Logo.png" alt="">
            </RouterLink>

            <button v-if="isNav" @click="isNav = !isNav" class="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:close-rounded" class="text-2xl" />
            </button>
            <button v-else @click="isNav = !isNav" class="w-10 h-10 border border-gray-700 flex items-center justify-center">
                <Icon name="ic:baseline-menu" class="text-2xl" />
            </button>

        </Container>


        <div class="fixed top-0 left-0 bottom-0 h-screen w-64 bg-white z-50 shadow transition-all duration-700"
            :class="{'-translate-x-0' : isNav, '-translate-x-64' : !isNav}"
        >
            <ul class="flex flex-col gap-5 pl-5 pt-10 font-medium">
                <li class="pt-1">
                    <RouterLink to="/home">HOME</RouterLink>
                </li>
                <li class="pt-1">
                    <RouterLink to="/about">ABOUT US</RouterLink>
                </li>
                <li class="pt-1">
                    <RouterLink to="/all-services">SERVICES</RouterLink>
                </li>
                <li class="pt-1">
                    <RouterLink to="/work">WORK</RouterLink>
                </li>
                <li class="pt-2">
                    <RouterLink to="/career">CAREER</RouterLink>
                </li>
                <li class="pt-1">
                    <RouterLink to="/contact">CONTACT</RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>
