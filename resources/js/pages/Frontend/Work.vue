<script setup>
import GuestLayout from "@/components/Layouts/GuestLayout.vue";
import Container from "@/components/Layouts/Container.vue";
import useAxios from "@/composables/useAxios.js";
import {onMounted,ref} from "vue";

const {loading, error, sendRequest} = useAxios();
const projects = ref(null);
const getUser = async () => {
        const response = await sendRequest({
            method: 'get',
            url: `/frontend/project`,
        })
        if(response){
            projects.value = response.data;
        }
}
const categories = ref(null);
const getCategory = async () => {
        const response = await sendRequest({
            method: 'get',
            url: `/frontend/category`,
        })
        if(response){
            categories.value = response.data.data;
        }
}
onMounted(() => {
    getUser();
    getCategory();
})

</script>

<template>

   <GuestLayout>
       <Container >
           <section class="bg-[url('https://www.shutterstock.com/image-illustration/living-room-cabinet-tv-minimalist-260nw-2292696435.jpg')] relative py-16 bg-no-repeat  rounded bg-cover my-10">
               <span class="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black opacity-15"></span>
               <div class="relative z-10  text-center font-bold w-full max-w-xs mx-auto text-white">
                   <Select
                       label="name"
                       v-if="categories"
                       :options="categories"
                       placeholder="Categories" >
                   </Select>
               </div>
           </section>
       </Container>

       <section>
           <Container>
               <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-20" >
                   <RouterLink :to="`/inside-work/${item?.slug}`" class="h-64 w-full" v-for="item in projects?.data">
                       <img class="w-full h-full" :src="item?.cover_image" alt="">
                   </RouterLink>
               </div>
           </Container>
       </section>
   </GuestLayout>
</template>



<style scoped>

</style>
