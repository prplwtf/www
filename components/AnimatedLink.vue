<template>
  <span class="font-mono text-inherit underline" @mouseover="startAnimation">
    {{ displayedText }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      displayedText: "",
      animationIntervals: {},
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const length = this.text.length;
      let currentIndex = 0;

      const randomChars = this.generateRandomString(length);

      this.displayedText = randomChars;

      const totalDuration = 200;
      const intervalDuration = totalDuration / length;

      const interval = setInterval(() => {
        if (currentIndex < length) {
          this.displayedText =
            this.text.substring(0, currentIndex + 1) +
            randomChars.substring(currentIndex + 1);

          currentIndex++;
        } else {
          clearInterval(interval);
          this.displayedText = this.text;
        }
      }, intervalDuration);

      this.animationIntervals[this.text] = interval;
    },

    generateRandomString(length) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    },
  },
};
</script>
