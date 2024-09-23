<template>
    <section>
        <div class="flex bg-grey justify-center items-center py-10 md:py-24 shadow-md rounded-b-3xl">
            <div class="w-full mx-auto flex flex-col md:flex-row justify-center align-middle items-center">
                <div class="w-1/2">
                    <img src="/public/profile-web.png" class="w-72 mx-auto" alt="profile-web" />
                </div>
                <div class="flex mt-8 justify-center align-middle flex-col gap-2 w- full md:w-1/2">
                    <h1 class="text-3xl md:text-6xl font-bold text-center md:text-left text-white">
                        Raka <span class="text-blue">Sanjaya</span>
                    </h1>
                    <h2 class="font-bold text-md text-center md:text-start text-white">Jakarta, Indonesia</h2>
                    <p class="text-white text-center md:text-start">I Wanna be a Fullstack Web Developer</p>
                    <UiSosmed />
                    <NuxtLink to="cv.pdf" class="mt-4 lg:mt-2 w-full md:w-fit hover:border-blue bg-white
                    text-dark py-3 px-8 font-bold text-sm rounded-full text-center">
                        Download CV
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div
            class=" hidden md:flex justify-around w-10/12 py-4 mx-auto align-middle items-center -mt-12 shadow-md rounded-full bg-greylight">
            <div class="font-bold text-center text-xl text-blue">
                19
                <br />
                <span class="text-sm font-normal text-white">Age</span>
            </div>
            <div class="font-bold text-center text-xl text-blue">
                Brawijaya University
                <br />
                <span class="text-sm font-normal text-white">Education</span>
            </div>
        </div>
        <div>
            <div class="md:hidden flex w-11/12 mx-auto gap-x-4 mt-5">
                <div
                    class="flex w-1/5 h-20 bg-greylight rounded-xl justify-center align-middle items-center flex-col  shadow-md">
                    <h2 class="font-bold text-blue text-md text-xl">19</h2>
                    <span class="text-xs text-white">Age</span>
                </div>
                <div
                    class="w-4/5 flex h-20 bg-greylight rounded-xl justify-center align-middle shadow-md items-center flex-col">
                    <h2 class="font-bold text-blue text-md lg:text-xl">Brawijaya University</h2>
                    <span class="text-xs text-white">Education</span>
                </div>
            </div>
        </div>
    </section>
</template>