<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import Container from "@/components/Layouts/Container.vue";
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref} from "vue";
// const {sendRequest, loading, error} = useAxios();
// const services = ref([])
// const getServices = async () => {
//     const response = await sendRequest({
//         url: `/frontend/service`,
//         method: 'GET'
//     })
//     console.log('res', response)
//     services.value = response?.data
// }
// onMounted(async () => {
//     window.scrollTo(0,0);
//     await getServices()
// })
</script>
<template>
    <GuestLayout>
       <section class="bg-[url('@/assets/images/service/service_slider_photo.jpg')] relative py-20 bg-no-repeat bg-cover">
           <span class="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black opacity-45"></span>
          <h2 class= "relative z-10 uppercase text-center text-white text-6xl font-bold max-w-72  mx-auto py-24">services we offer</h2>
       </section>

        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 ">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl font-bold mt-5 lg:mt-0 uppercase">Architecture</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Our architectural services begin with an analysis of client's needs and objectives, and result in the creation of a project that meets the
                                intended functional economical and aesthetical requirements. Our team develops Design concepts; translates them into conventional working
                                drawings and specifications; then ready for construction. We can also assist clients in the bidding process and construction management
                                to meet quality, time and cost.
                            </p>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/service/service_architecture.jpg" alt="">
                        </div>
                    </div>

                </div>
            </Container>
        </section>
        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/service/service_interior.jpg" alt="">
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold uppercase">Interior Design</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Design & Supervision of Residential, Commercial, Clinics, Corporate Offices, Retails, Showrooms, Restaurants, Exhibition Spaces etc. Our effort
                                has been not to treat interior design as embellishment or decoration, it is actually much more. We design interiors with the same care and
                                understanding of representation as building design itself. Our services in this area are particular and specialized.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold uppercase">Acoustic & Vibration Control</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Design Vision Associates Ltd is involved with precision and specialized works related to acoustic and vibration control. Our team is qualified to calculate, design and build solutions on various Acoustic issues. Our solutions are with guaranteed performance and can meet necessary requirements and specifications.
                            </p>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/service/service_acoustic.jpg" alt="">
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section class="py-10 lg:py-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/service/service_project-management.jpg" alt="">
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold uppercase">Project Management</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                We have extensive experience in the management and planning of projects thus able to work in close association with supporting professional
                                groups specializing in engineering, landscaping surveying, environment science, marketing, transport, finance and law. Our services include
                                resource allocation, cost control, financial management, project programming and construction management. On special request, the team can
                                provide building management and maintenance also.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold uppercase">Design & Build Package</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Design and build means, we will design a project first and we will do the construction thereafter. Complete Design & Build package for Residences, Factories, Commercial and Residential Interior projects.
                            </p>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                We offer complete delivery of the product - the building by the architect - where design and execution become one and client tranfers the responsibility of managing contractors, other agencies and quality of materials at competitive prices.                            </p>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/service/service_design & build package.jpg" alt="">
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section class="py-10 lg:py-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <img class="w-full h-full" src="@/assets/images/service/service_epc.jpg" alt="">
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl mt-5 lg:mt-0 font-bold uppercase">EPC/LSTK</h2>
                            <p class="py-4 leading-loose text-xs lg:text-base text-justify">
                                Engineering, Procurement, and Construction (EPC) or Lump Sum Tum Key (LSTK) is a particular form of contracting arrangement used in some industries where the EPC Contractor is made responsible for all the activities from design, procurement, construction, to commissioning and handover of the project to the End-User or Owner.
                            </p>
                            <p class="leading-loose text-xs lg:text-base text-justify">
                                Design Vision Associates Ltd. is experienced with EPC/ EPCM kind of works. We have completed quite a few EPC/EPCM projects.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </GuestLayout>
</template>
