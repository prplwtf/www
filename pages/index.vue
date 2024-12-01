<template>
  <div class="flex flex-row">
    <NuxtImg
      src="/assets/images/fox.png"
      width="128"
      class="me-4 self-start border border-dashed border-overlay0 bg-base object-contain px-1 pt-2"
    />
    <div>
      <p>
        Hi I'm <b>Emma</b>
        <span
          class="ms-1 inline-flex items-center rounded-full bg-surface0 px-2 py-1 text-xs font-medium"
          >she/her</span
        >
        and I'm <code v-html="formattedAge" class="text-overlay2"></code> years
        old. Welcome to my little corner on the internet. I make, bake and break
        software <span class="text-overlay0">(and sometimes hardware)</span> for
        the most random projects.
      </p>
      <p>
        <code class="text-overlay2"> >w< </code>
        <code class="text-overlay0"> >~< </code>
        <code class="text-surface1"> >_< </code>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      birthTimestamp: 1226005200 * 1000,
      increment: 0,
    };
  },
  computed: {
    formattedAge() {
      return this.age.toFixed(8);
    },
  },
  mounted() {
    this.calculateInitialAge();
    this.calculateIncrement();
    this.interval = setInterval(this.updateAge, 50);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    calculateInitialAge() {
      const now = Date.now();
      const ageInSeconds = (now - this.birthTimestamp) / 1000;
      this.age = ageInSeconds / (365.25 * 24 * 60 * 60);
    },
    calculateIncrement() {
      const secondsInYear = 365.25 * 24 * 60 * 60;
      const incrementPerUpdate = 50 / 1000;
      this.increment = incrementPerUpdate / secondsInYear;
    },
    updateAge() {
      this.age += this.increment;
    },
  },
};
</script>
