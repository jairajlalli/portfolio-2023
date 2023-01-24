<template>
  <PreLoader />
  <HeaderNavigation />
  <ErrorSection />
  <FooterBottom />
</template>

<script>
// @ is an alias to /src
import PreLoader from "@/components/PreLoader.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import ErrorSection from "@/components/ErrorSection.vue";
import FooterBottom from "@/components/FooterBottom.vue";

export default {
  components: {
    PreLoader,
    HeaderNavigation,
    ErrorSection,
    FooterBottom,
  },
};
</script>
