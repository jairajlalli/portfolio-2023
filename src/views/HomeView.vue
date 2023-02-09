<template>
  <PreLoader />
  <HeaderNavigation />
  <HeroSection />
</template>

<script>
// @ is an alias to /src
import PreLoader from "@/components/PreLoader.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  components: {
    PreLoader,
    HeaderNavigation,
    HeroSection,
  },
};
</script>
