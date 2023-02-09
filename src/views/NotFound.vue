<template>
  <PreLoader />
  <HeaderNavigation />
  <ErrorSection />
</template>

<script>
// @ is an alias to /src
import PreLoader from "@/components/PreLoader.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import ErrorSection from "@/components/ErrorSection.vue";

export default {
  components: {
    PreLoader,
    HeaderNavigation,
    ErrorSection,
  },
};
</script>
