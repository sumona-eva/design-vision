<template>
    <footer>
        <section>
            <div class="border-t border-gray-300">
                <Container>
                    <div class="flex flex-col lg:flex-row justify-between pt-3 pb-8">
                        <p class="text-sm text-gray-400">Newsletter | Copywrites:Design Vision Associate Ltd. 2024</p>
                        <div class="flex gap-3 items-center justify-center lg:justify-normal pt-5 lg:pt-0 text-xl text-gray-400">
                            <RouterLink to="Facebook- https://www.facebook.com/designvision.com.bd/"><Icon name="lucide:facebook" /></RouterLink>
                            <RouterLink to="Linkedin- https://www.linkedin.com/in/design-vision-associates-ltd-b26092153/"><Icon name="ri:linkedin-fill" /></RouterLink>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    </footer>
</template>
<script setup>
import Container from "@/components/Layouts/Container.vue";
import Icon from "@/components/Icon.vue";
</script>
