<template>
  <div class="border border-surface0 bg-crust p-2" :class="class">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      required: false,
    },
  },
};
</script>
