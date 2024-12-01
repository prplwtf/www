<template>
  <div class="grid grid-cols-2 gap-4">
    <ProjectCard
      title="Blueprint"
      description="Powerful, fast and developer-friendly extension framework for Pterodactyl. "
      cover="/assets/images/projects/blueprint.jpg"
      href="https://blueprint.zip"
    />
    <ProjectCard
      title="writea"
      description="Fast and comfy open-source alternative for blogs."
      cover="/assets/images/projects/writea.jpg"
      href="https://github.com/prplwtf/writea"
    />
    <ProjectCard
      title="Nebula"
      description="Industry-leading Pterodactyl theme."
      cover="/assets/images/projects/nebula.jpg"
      href="https://nebula.style"
    />
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
};
</script>
