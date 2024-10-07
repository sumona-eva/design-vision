<script setup>
import Modal from '@/components/Modal.vue'
import {ref, onMounted} from 'vue';
import useAxios from "@/composables/useAxios.js";
import {toast} from "vue3-toastify";

const {loading, error, sendRequest} = useAxios();

const sliders = ref(null);
const getSliders = async () => {
    const response = await sendRequest({
        method: 'get',
        url:'/v1/slider',
    });
    if(response){
        sliders.value = response.data;
    }
}


//handle file upload
const bannerImg = ref(null);
const handleFileChange = (image) => {
    const file = image.target.files[0];
    form.value.image = file;
    bannerImg.value = URL.createObjectURL(file);
}

const form  = ref({
    title:null,
    sub_title:null,
    redirect_url:null,
    image:null,
    video:null,
    order_level: null
})

const onSubmit = async () => {
    const response = await sendRequest({
        method:'post',
        url:'/v1/slider',
        data:form.value,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    if(response){
        toast.success('Slider Added Successfully', {autoClose:500, 'theme' : 'dark'})
        await getSliders();
        closeModal();
    }
}

const handelDelete = async (id) => {
    const response = await sendRequest({
        method:'delete',
        url:`/v1/slider/${id}`
    });
    if(response){
        toast.success('Slider Deleted Successfully', {autoClose:500, 'theme': 'dark'});
        await getSliders();
    }
}

const reset = () => {
    form.value.title = null;
    form.value.sub_title = null;
    form.value.redirect_url = null;
    form.value.image = null;
    form.value.video = null;
    form.value.order_level = null;
}

// model
const isModalOpened = ref(false);
const isEditModalOpened = ref(false);

const openModal = () => {
    isModalOpened.value = true;
};
const closeModal = () => {
    isModalOpened.value = false;
    reset();
};

onMounted(() => {
    getSliders();
})
</script>
<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5 bg-white">
            <div>
                <div class="flex items-center">
                    <h2 class="text-xl font-semibold text-primary py-5 px-3">Slider</h2>
                </div>
            </div>

            <button
                @click="openModal"
                class="flex items-center justify-center gap-2 bg-primary px-3 py-2 text-white text-sm font-medium">
                <Icon name="streamline:interface-add-circle-button-remove-cross-add-buttons-plus-circle"
                      class="text-sm shadow-lg border-primary"/>
                Add Record
            </button>
        </div>
        <div class="relative overflow-x-auto bg-white">
            <table class="w-full text-left rtl:text-right">
                <thead class="text-black uppercase bg-gray-300">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Sub Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Redirect URL
                    </th>
                    <th scope="col" class="px-6 py-3 ">
                        Order Level
                    </th>
                    <th scope="col" class="px-6 py-3">
                        action
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr class="border-b border-gray-300 hover:bg-gray-200" v-for="slider in sliders?.data">
                    <td class="p-2">
                        <img class="w-20 h-12" :src="slider?.image" alt="">
                    </td>
                    <td class="px-6 py-4">
                        {{ slider?.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ slider?.sub_title }}
                    </td>
                    <td class="px-6 py-4 text-sm">
                        {{ slider?.redirect_url ? slider?.redirect_url : 'Not given' }}
                    </td>
                    <td class="px-6 py-4">
                        {{ slider?.order_level }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex gap-3">

                            <button @click="handelDelete(slider.id)">
                                <Icon name="material-symbols:delete-outline-rounded"
                                      class="text-red-500 text-2xl"/>
                            </button>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <div v-if="loading" class="w-full h-52 flex items-center justify-center">
                <div>
                    <LoadingButton :isLoading="loading">Loading</LoadingButton>
                </div>
            </div>
        </div>
    </AppLayout>

    <Modal title="Create New Category" :isOpen="isModalOpened" @modal-close="closeModal">
        <div class="flex flex-wrap pt-5">
            <div class="w-full mb-4">
                <label for="name" class="block mb-1 text-xs font-normal">Title</label>
                <input v-model="form.title" type="text" class="p-2 rounded border border-primary w-full bg-transparent">
            </div>
            <div class="w-full mb-4">
                <label for="name" class="block mb-1 text-xs font-normal">Sub Title</label>
                <input v-model="form.sub_title" type="text" class="p-2 rounded border border-primary w-full bg-transparent">
            </div>
            <div class="w-full mb-4">
                <label for="name" class="block mb-1 text-xs font-normal">Redirect URL</label>
                <input v-model="form.redirect_url" type="text" class="p-2 rounded border border-primary w-full bg-transparent">
            </div>
            <div class="w-full mb-4">
                <label for="name" class="block mb-1 text-xs font-normal">Order Level</label>
                <input v-model="form.order_level" type="number" class="p-2 rounded border border-primary w-full  bg-transparent">
            </div>
            <div class="w-full mb-4">
                <div>
                    <label for="image" class="text-xs block mb-1">Slider Image</label>
                    <label for="cover_image" class="w-full h-36 flex items-center
                        justify-center gap-3 p-2 border border-dashed border-primary rounded-md text-primary cursor-pointer">
                        <input type="file" id="cover_image" hidden @change="handleFileChange">
                        <img v-if="bannerImg" :src="bannerImg" class="w-full h-full object-cover">
                        <div v-else>
                            <p class="text-xs">Upload Product Cover Image</p>
                        </div>
                    </label>
                 </div>
            </div>

            <div class="w-full">
                <button @click="onSubmit" class="w-full bg-primary text-white py-2.5">Save Category</button>
            </div>
        </div>
    </Modal>
</template>
