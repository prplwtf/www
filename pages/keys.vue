<template>
  <Accordion :items="accordionItems" />
  <div class="mt-5 flex flex-row items-center text-overlay0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      class="me-1 fill-overlay0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5 1.75C11.7721 1.75 8.75 4.77208 8.75 8.5C8.75 9.30306 8.89055 10.0746 9.14879 10.7906L1.75 18.1893V22.25H6.25V19.75H8.75V17.25H10.8107L13.2094 14.8512C13.9254 15.1094 14.6969 15.25 15.5 15.25C19.2279 15.25 22.25 12.2279 22.25 8.5C22.25 4.77208 19.2279 1.75 15.5 1.75ZM16.5001 8.56077L18.5608 6.50011L17.5001 5.43945L15.4395 7.50011L16.5001 8.56077Z"
        class="fill-inherit"
      />
    </svg>
    <span class="text-inherit">
      Inactive and retired devices are excluded from this list.
    </span>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      accordionItems: [
        {
          title: "mirage",
          content:
            "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK3E0wJTxWNYCw483YQ9wKO+EWt4Hj/8eaKAy5e2KDu2",
        },
        {
          title: "sentinel",
          content:
            "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJAHTrNG1pm6+6P+kFkg0FtmvEhB58q9K2+m+Bm/DWyn",
        },
        {
          title: "sakura",
          content:
            "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINvWqoTbvZEDkyoavHBTPehuIFWFoRt3YJHS3CYYf8zY",
        },
      ],
    };
  },
};
</script>
