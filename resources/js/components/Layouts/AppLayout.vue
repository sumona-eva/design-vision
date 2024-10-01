<script setup>
import SideBar from '@/components/Layouts/SideBar.vue';
import Header from '@/components/Layouts/AdminHeader.vue';
</script>
<template>
    <div class="bg-white w-full h-screen flex">
        <aside class="w-56 fixed top-0 left-0 bottom-0 h-screen bg-gray-300">
            <SideBar/>
        </aside>
        <div class="ml-56 w-full h-screen">
            <main class="bg-gray-300 min-h-screen p-[2px] pb-10 relative">
                <Header/>
                <div class="pb-1 mt-[2px]">
                    <slot/>
                </div>
            </main>
        </div>
    </div>
</template>
