<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const cursor = ref({ x: 0, y: 0 });
let ctx = null;
let animationFrame = null;
let chars = [];

class Char {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.speed = 0.8 + Math.random() * 1.2;
    this.opacity = 0.05 + Math.random() * 0.15;
    // Track the actual position separately from the rendered position
    this.actualY = y;
  }

  draw() {
    const distToCursor = Math.hypot(
      this.x - cursor.value.x,
      this.y - cursor.value.y,
    );

    const highlight = Math.max(0, 0.5 - distToCursor / 250);
    ctx.fillStyle = `rgba(205, 214, 244, ${this.opacity + highlight})`;
    ctx.fillText(this.char, this.x, this.y);
  }

  update() {
    this.actualY += this.speed;
    // Update the visible Y position with modulo to keep it within screen bounds
    this.y = this.actualY % window.innerHeight;

    // Only randomize character when it wraps around
    if (this.y < this.speed) {
      this.char = String.fromCharCode(0x30a0 + Math.random() * 96);
      this.opacity = 0.05 + Math.random() * 0.15;
    }
  }
}

const init = () => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d", { alpha: false });
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);

  chars = [];
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < 50; j++) {
      const x = i * fontSize;
      const y = j * fontSize - Math.random() * window.innerHeight;
      const char = String.fromCharCode(0x30a0 + Math.random() * 96);
      chars.push(new Char(x, y, char));
    }
  }
};

const animate = () => {
  ctx.fillStyle = "rgb(17, 17, 27)";
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

  ctx.font = "14px monospace";
  chars.forEach((char) => {
    char.draw();
    char.update();
  });

  animationFrame = requestAnimationFrame(animate);
};

const handleMouseMove = (e) => {
  cursor.value = {
    x: e.clientX,
    y: e.clientY,
  };
};

const handleResize = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    init();
  }
};

onMounted(() => {
  init();
  animate();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10 h-full w-full bg-crust" />
</template>
