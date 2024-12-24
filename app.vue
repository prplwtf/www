<template>
  <Head>
    <Title>Emma's homepage</Title>
  </Head>
  <NuxtLayout>
    <Backdrop />

    <div
      class="fixed left-0 top-0 grid h-screen w-screen place-items-center overflow-y-scroll bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-crust"
    >
      <div
        class="container max-w-screen-sm border border-overlay2 bg-crust p-12"
      >
        <div class="flex items-center justify-between pb-8">
          <NuxtLink to="/">
            <svg
              width="32"
              viewBox="0 0 514 236"
              class="fill-overlay2 object-contain"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="118" cy="118" r="118" class="fill-inherit" />
              <path
                d="M258.464 235.991C283.858 203.624 299 162.83 299 118.5C299 73.7087 283.542 32.528 257.669 0.00186157C322.531 0.361701 375 53.0534 375 118C375 182.681 322.959 235.207 258.464 235.991Z"
                class="fill-inherit"
              />
              <path
                d="M397.17 235.994C422.728 203.887 438 163.227 438 119C438 73.8473 422.082 32.4124 395.552 0.000833136C395.701 0.000277875 395.851 0 396 0C461.17 0 514 52.8304 514 118C514 182.779 461.801 235.366 397.17 235.994Z"
                class="fill-inherit"
              />
            </svg>
          </NuxtLink>

          <span class="text-sm text-overlay2">
            <NuxtLink to="/" class="ms-2">
              <AnimatedLink text="home" />
            </NuxtLink>
            <NuxtLink to="/projects" class="ms-2">
              <AnimatedLink text="projects" />
            </NuxtLink>
            <NuxtLink to="/keys" class="ms-2">
              <AnimatedLink text="keys" />
            </NuxtLink>
          </span>
        </div>

        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import Backdrop from "~/components/Backdrop.vue";
import AnimatedLink from "~/components/AnimatedLink.vue";

export default {
  components: {
    Backdrop,
    AnimatedLink,
  },
};
</script>
