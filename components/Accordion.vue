<template>
  <div
    class="mx-auto w-full max-w-[800px] border border-t-0 border-dashed border-overlay0"
  >
    <div class="bg-base" v-for="(item, index) in items" :key="index">
      <div
        class="flex cursor-pointer items-center justify-between border-t border-dashed border-overlay0 p-4"
        @click="toggleAccordion(index)"
      >
        <h3 class="text-md font-medium">
          {{ item.title }}
        </h3>
        <span
          class="transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180': activeIndex !== index }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-base stroke-overlay0"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="currentColor"
              class="stroke-inherit"
              stroke-width="1.5"
              stroke-miterlimit="16"
            />
          </svg>
        </span>
      </div>
      <div
        class="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        :style="{
          maxHeight: activeIndex === index ? `${contentHeight}px` : '0',
        }"
      >
        <div
          class="accordion-content-inner whitespace-pre-wrap break-words break-all p-4 pt-0"
        >
          <code>
            {{ item.content }}
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: -1,
      contentHeight: 0,
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = -1;
        this.contentHeight = 0;
      } else {
        this.activeIndex = index;
        this.innerContent = this.$el.querySelector(".accordion-content-inner");
        this.$nextTick(() => {
          this.contentHeight = this.innerContent.scrollHeight;
        });
      }
    },
  },
};
</script>
