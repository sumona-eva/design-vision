<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import Container from "@/components/Layouts/Container.vue";
</script>


<template>
    <GuestLayout>
        <section class="min-h-screen">
            <div class="bg-[url('@/assets/images/career.jpg')] relative py-20 bg-no-repeat bg-cover">
                <span class="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black opacity-35"></span>
                <div class="relative z-10  text-center font-bold text-white py-24 mx-auto max-w-72">
                    <h5 class= "text-xl pb-8 uppercase">career</h5>
                    <h2 class= " text-6xl pb-8 uppercase">Send Your Cv</h2>
                    <p class= " text-base font-medium border border-white px-2 py-1">
                        career.dva1998@gmail.com
                    </p>
                </div>

            </div>
        </section>

    </GuestLayout>
</template>



<style lang="scss" scoped>

</style>
