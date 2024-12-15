<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const cursor = ref({ x: 0, y: 0 });
let ctx = null;
let animationFrame = null;
let chars = [];

// Matrix character class
class Char {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.speed = 0.8 + Math.random() * 1.2; // Slightly slower speed
    this.opacity = 0.1 + Math.random() * 0.3; // Lower base opacity
  }

  draw() {
    const distToCursor = Math.hypot(
      this.x - cursor.value.x,
      this.y - cursor.value.y,
    );

    // Reduced highlight intensity
    const highlight = Math.max(0, 0.6 - distToCursor / 150);
    ctx.fillStyle = `rgba(205, 214, 244, ${this.opacity + highlight})`;
    ctx.fillText(this.char, this.x, this.y);
  }

  update() {
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.y = 0;
      this.opacity = 0.1 + Math.random() * 0.3;
    }
  }
}

// Initialize the canvas
const init = () => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  // Create matrix characters
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

// Animation loop
const animate = () => {
  // Increased fade rate for shorter trails
  ctx.fillStyle = "rgba(17, 17, 27, 0.5)";
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

  ctx.font = "14px monospace";
  chars.forEach((char) => {
    char.draw();
    char.update();
  });

  animationFrame = requestAnimationFrame(animate);
};

// Track cursor position
const handleMouseMove = (e) => {
  cursor.value = {
    x: e.clientX,
    y: e.clientY,
  };
};

// Handle window resize
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
