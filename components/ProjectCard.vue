<template>
  <div :class="class" class="group relative">
    <NuxtLink :to="href" target="_blank">
      <div class="border border-surface1 bg-base">
        <div class="relative h-16 w-full overflow-hidden">
          <NuxtImg
            :src="cover"
            width="262"
            height="64"
            class="transition duration-300 ease-in-out group-hover:blur"
          />
          <span
            v-if="href"
            class="absolute inset-0 flex items-center justify-center bg-crust bg-opacity-50 text-text opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          >
            <AnimatedLink text="learn more" />
          </span>
        </div>
        <div class="border-t border-dashed border-surface1 p-2">
          <div class="w-full overflow-hidden text-ellipsis whitespace-nowrap">
            <b>{{ title }}</b> ⸺
          </div>
          <div class="w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {{ description }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import AnimatedLink from "./AnimatedLink.vue";

export default {
  components: {
    AnimatedLink,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
  },
};
</script>
