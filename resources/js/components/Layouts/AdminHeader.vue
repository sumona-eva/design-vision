<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/useAuthStore.js";

const isDropdownOpen = ref(false);
const dropdown = ref(null);
const dropdownButton = ref(null);
const authStore = useAuthStore();
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target) && !dropdownButton.value.contains(event.target)) {
        isDropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
    <div class="flex justify-between items-center bg-gray-200 p-2.5">
        <div class="font-semibold">
            <h2>Hi Customer</h2>
            <p>Welcome To Dashboard</p>
        </div>
        <div class="">
            <ul class="flex items-center">
                <li>
                    <button>
                        <Icon name="" />
                    </button>
                </li>
                <li>
                    <button>
                        <img src="" alt="">
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
