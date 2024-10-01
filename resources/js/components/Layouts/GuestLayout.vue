<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import MobileHeader from './MobileHeader.vue';

</script>
<template>
    <div class="w-full">
        <header>
            <MobileHeader />
            <Header/>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
</template>
