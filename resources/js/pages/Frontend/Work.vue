<script setup>
import GuestLayout from "@/components/Layouts/GuestLayout.vue";
import Container from "@/components/Layouts/Container.vue";
import  axios from "axios";
import {onMounted,ref} from "vue";


const projects = ref(null);
async function getUser(){
    try {
        const response = await axios.get
        ('http://localhost:8000/api/frontend/project');
        console.log(response);
        projects.value = response.data;
    }catch(error){
        console.error(error);
    }
}
onMounted(() => {
    getUser();
})

</script>

<template>
   <GuestLayout>
       <Container >

           <section class="bg-[url('https://www.shutterstock.com/image-illustration/living-room-cabinet-tv-minimalist-260nw-2292696435.jpg')] relative py-16 bg-no-repeat overflow-hidden rounded bg-cover my-10">
               <span class="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black opacity-15"></span>
               <div class="relative z-10  text-center font-bold w-full max-w-xs mx-auto text-white">
                   <Select placeholder="Categories" class="absolute right-0 left-0 bottom-0 top-0 ">
                   </Select>
               </div>
           </section>
       </Container>

       <section>
           <Container>
               <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-20" >
                   <RouterLink :to="`/inside-work/${item?.slug}`" class="" v-for="item in projects?.data">
                       <img :src="item?.cover_image" alt="">
                   </RouterLink>
               </div>
           </Container>
       </section>
   </GuestLayout>
</template>



<style scoped>

</style>
