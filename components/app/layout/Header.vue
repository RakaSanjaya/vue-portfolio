<template>
    <header class="md:block fixed top-0 w-full z-50">
        <section
            class="h-20 lg:px-8 px-4 mx-auto flex justify-between items-center bg-grey bg-opacity-90  backdrop-blur-md">
            <h1 class="font-bold text-white">Raka Sanjaya</h1>
            <nav class="hidden md:block">
                <ul class="flex gap-x-5 text-sm box-border text-white">
                    <li>
                        <NuxtLink to="/">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/skills">
                            Skills
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/portfolio">
                            Portfolio
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
</template>