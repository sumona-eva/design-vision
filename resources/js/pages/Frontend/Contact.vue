<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import Container from "@/components/Layouts/Container.vue";
</script>

<template>
    <GuestLayout>
        <section class="pt-10 lg:pt-20">
            <Container>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2 ">
                        <div class="px-3">
                            <h2 class="text-xl lg:text-2xl font-bold mt-5 lg:mt-0 uppercase">Contact us for business deal</h2>
                            <ul class="leading-loose text-sm text-gray-600 pt-5">
                                <li>DESIGN VISION ASSOCIATES LTD.</li>
                                <li>Address: Plot:04, Road 13, Block: J, Baridhara (1st and 2nd Floor)</li>
                                <li>Dhaka-1212, Bangladesh </li>
                                <li>Phone: +880-2-8834353, 58813791, 01711005999</li>
                                <li>Email: designvision1998@gmail.com</li>
                            </ul>

                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 order-first  lg:order-last">
                        <div class="px-3">
                            <iframe class="w-80 lg:w-full h-96 lg:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930866619!2d90.25487725384674!3d23.781067235418455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1727263955977!5m2!1sen!2sbd"
                                     style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="py-10">
                    <h2 class="text-xl lg:text-2xl font-bold mt-5 lg:mt-0 uppercase pb-8">Contact</h2>
                    <div>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-1/2">
                                <div>
                                    <input type="text" placeholder="Name" class="w-full border-0 border-b border-gray-400 ring-0 focus:ring-0 outline-0 focus:outline-0 focus:border-primary "  />
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2">
                                <div>
                                    <input type="number" placeholder="Phone" class="w-full border-0 border-b border-gray-400 ring-0 focus:ring-0 outline-0 focus:outline-0 focus:border-primary" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" class="w-full border-0 border-b border-gray-400 ring-0 focus:ring-0 outline-0 focus:outline-0 focus:border-primary "  />
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" class="w-full border-0 border-b border-gray-400 ring-0 focus:ring-0 outline-0 focus:outline-0 focus:border-primary "  />
                        </div>
                        <div>
                            <textarea type="text" placeholder="Message" class="w-full h-32 border-0 border-b border-gray-400 ring-0 focus:ring-0 outline-0 focus:outline-0 focus:border-primary "></textarea>
                        </div>
                    </div>
                    <RouterLink to="/" class="w-full inline-block bg-primary mt-8 text-white text-center py-1 font-bold ">SUBMIT MESSAGE</RouterLink>
                </div>
            </Container>
        </section>
    </GuestLayout>
</template>
