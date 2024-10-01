<script setup>
import Container from "@/components/Layouts/Container.vue";
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref} from "vue";
const {sendRequest, loading, error} = useAxios();
const services = ref([])
const getServices = async () => {
    const response = await sendRequest({
        url: `/frontend/service`,
        method: 'GET'
    })
    console.log('res', response)
    services.value = response?.data
}

const data = ref([])
const getPackages = async () => {
    const response = await sendRequest({
        url: `/v1/package`,
        method: 'GET'
    })
    data.value = response?.data
}
onMounted(() => {
     getPackages();
     getServices();
})
</script>
<template>
    <nav class="bg-white hidden lg:block">
        <Container>
            <div class="flex items-center justify-between">
                <div class="w-2/6">
                    <RouterLink to="/">
                        <img class="w-72 h-20" src="@/assets/images/DV_Header_Logo.png" alt="">
                    </RouterLink>
                </div>
                <div class="w-4/6">
                    <ul class="flex items-center justify-center gap-5 text-base text-black font-bold">
                        <li>
                            <RouterLink to="/" class="p-2 hover:text-primary transition-all ease-in-out duration-500">HOME</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" class="p-2 hover:text-primary transition-all ease-in-out duration-500">ABOUT US</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/all-services" class="p-2 hover:text-primary transition-all ease-in-out duration-500">SERVICES</RouterLink>
                        </li>
                        <li class="relative group">
                            <RouterLink to="/work" class="p-2 hover:text-primary transition-all ease-in-out duration-500">WORK</RouterLink>
                        </li>
                        <li class="relative group">
                            <RouterLink to="/career" class="p-2 hover:text-primary transition-all ease-in-out duration-500">CAREER</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact" class="p-2 hover:text-primary transition-all ease-in-out duration-500">CONTACT</RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
        </Container>
    </nav>
</template>
