<template>
  <PreLoader />
  <HeaderNavigation />
  <HeroSection />
  <AboutSection />
  <PortfolioSection />
  <FooterBottom />
</template>

<script>
// @ is an alias to /src
import PreLoader from "@/components/PreLoader.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import FooterBottom from "@/components/FooterBottom.vue";

export default {
  components: {
    PreLoader,
    HeaderNavigation,
    HeroSection,
    AboutSection,
    PortfolioSection,
    FooterBottom,
  },
};
</script>
