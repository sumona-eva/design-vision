<script setup>
const props = defineProps({
        text:{
            type: Boolean,
            default: true
        }
    });
</script>

<template>
    <div class="mx-auto">
        <div>
            <div class="flex items-center gap-3 p-3 bg-white mb-5">
                <img class="w-56 h-auto " src="@/assets/images/DV_Header_Logo.png" alt="">
            </div>
            <ul class="flex flex-col gap-5 px-5 ">
                <li>
                    <RouterLink :to="{name:'Dashboard'}" class="flex items-center gap-2">
                        <div>
                            <Icon name="ic:twotone-dashboard-customize" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Dashboard</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name:'AllProjects'}" class="flex items-center gap-2">
                        <div>
                            <Icon   name="carbon:ibm-data-product-exchange" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Projects</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name:'Category'}" class="flex items-center gap-2">
                        <div>
                            <Icon   name="carbon:ibm-data-product-exchange" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Project Category</p>
                    </RouterLink>
                </li>

                <p class="pl-5 text-gray-700 text-xs">CMS</p>
                <li>
                    <RouterLink  :to="{name:'AdminPages'}" class="flex items-center gap-2">
                        <div >
                            <Icon name="solar:gallery-check-bold" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Pages</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'HeroSlider'}" class="flex items-center gap-2">
                        <div >
                            <Icon name="solar:gallery-check-bold" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Slider</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'AdminContacts'}" class="flex items-center gap-2">
                        <div >
                            <Icon name="solar:gallery-check-bold" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Contacts</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'AdminClients'}" class="flex items-center gap-2">
                        <div >
                            <Icon name="solar:gallery-check-bold" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Clients</p>
                    </RouterLink>
                </li>
                <li>
                    <p class="text-sm font-normal text-gray-400 mb-3">App</p>
                    <RouterLink  :to="{name: 'AdminSetting'}" class="flex items-center gap-2">
                        <div>
                            <Icon name="material-symbols:settings-outline-rounded" size="20" class="text-primary" />
                        </div>
                        <p  v-if="text" class="text-black font-semibold">Setting</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
