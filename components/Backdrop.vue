<template>
  <div
    class="w-100 h-100 fixed left-0 top-0 -z-10 flex flex-wrap content-start items-start"
    @mousemove="handleMouseMove"
  >
    <span
      v-for="(char, index) in characters"
      :key="index"
      :class="[
        'm-0 font-mono text-2xl leading-8 text-overlay0 transition-colors',
        {
          'text-text delay-0 duration-0': index === nearestCharacterIndex,
          'delay-1000 duration-500': index !== nearestCharacterIndex,
        },
      ]"
      :style="{
        position: 'absolute',
        left: (index % cols) * charWidth + 'px',
        top: Math.floor(index / cols) * charHeight + 'px',
      }"
    >
      {{ char }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      nearestCharacterIndex: null,
      charWidth: 14.4,
      charHeight: 32,
      cols: 0,
    };
  },
  mounted() {
    this.updateCharacters();
    window.addEventListener("resize", this.updateCharacters);
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCharacters);
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    updateCharacters() {
      const { innerWidth, innerHeight } = window;
      this.charWidth = 14.4;
      this.charHeight = 32;
      this.cols = Math.floor(innerWidth / this.charWidth);
      const rows = Math.floor(innerHeight / this.charHeight) + 1;
      const totalCharacters = this.cols * rows;

      this.characters = this.generateRandomCharacters(totalCharacters);
    },
    generateRandomCharacters(count) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < count; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result.split("");
    },
    handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate the nearest character index
      const nearestIndex = this.getNearestCharacterIndex(mouseX, mouseY);
      this.nearestCharacterIndex = nearestIndex;
    },
    getNearestCharacterIndex(mouseX, mouseY) {
      let nearestIndex = null;
      let minDistance = Infinity;

      this.characters.forEach((_, index) => {
        const charX = (index % this.cols) * this.charWidth;
        const charY = Math.floor(index / this.cols) * this.charHeight;

        const distance = Math.sqrt(
          Math.pow(mouseX - charX, 2) + Math.pow(mouseY - charY, 2),
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = index;
        }
      });

      return nearestIndex;
    },
  },
};
</script>
