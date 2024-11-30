<template>
  <NuxtLayout>
    <Backdrop />

    <div
      class="fixed left-0 top-0 grid h-screen w-screen place-items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-crust"
    >
      <div
        class="container max-w-screen-sm border border-overlay2 bg-crust p-12"
      >
        <!-- Navigation bar -->
        <div class="flex justify-between pb-5">
          <img
            src="~/assets/images/index.png"
            width="32"
            class="me-2 object-contain"
          />
          <span class="inline-block align-middle text-overlay2">
            <a href="/" class="ms-2 underline">home</a>
            <a href="/projects" class="ms-2 underline">projects</a>
            <a href="/keys" class="ms-2 underline">keys</a>
          </span>
        </div>

        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import Backdrop from "~/components/Backdrop.vue";

export default {
  components: {
    Backdrop,
  },
};
</script>
