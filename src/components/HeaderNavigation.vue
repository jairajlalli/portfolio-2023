<template>
  <div class="noise"></div>
  <header class="header js-header">
    <div class="container">
      <div class="row">
        <div class="col-24">
          <div class="header__inner">
            <a
              class="header__logo link-unstyled link-no-hover"
              :href="logoUrl"
              :aria-label="logoLabel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 436.26 400.11"
              >
                <polygon
                  fill="currentColor"
                  points="115.86 143.97 115.86 85.84 259.53 0 259.53 400.11 0 293.95 197.69 153.48 197.69 213.96 102.1 281.92 209.72 325.16 209.72 88 115.86 143.97"
                />
                <polygon
                  fill="currentColor"
                  points="271.44 101.19 345.8 48.19 345.8 246.51 436.26 180.23 436.26 243.01 295.61 346.25 295.61 144.67 271.44 161.82 271.44 101.19"
                />
              </svg>
            </a>
            <button
              class="hamburger hamburger--spin"
              type="button"
              :aria-label="hamburgerLabel"
              @click="onMenuClick"
              :class="{ 'is-active': isActive }"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="menu" :class="{ 'menu--active': isActive }">
    <div class="menu__outer-container" :class="{ 'is-active': isActive }">
      <div class="container menu__outer">
        <div class="menu__inner">
          <div class="row">
            <div class="col-24">
              <ul class="menu__list">
                <li v-for="(item, index) in navItems" :key="index">
                  <a
                    :href="item.url"
                    class="menu__link"
                    @click="onMenuItemClick"
                    target="_blank"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "HeaderNavigation",
  data() {
    return {
      logoUrl: "javascript:void(0)",
      logoLabel: "Jairaj Lalli logo",
      hamburgerLabel: "Open navigation",
      navItems: [
        { url: "mailto:jairaj@jairajlalli.co.uk", title: "Send a Message" },
        {
          url: "https://www.linkedin.com/in/jairajlalli/",
          title: "View on LinkedIn",
        },
      ],
      isActive: false,
    };
  },
  methods: {
    onMenuClick() {
      this.isActive = !this.isActive;
      document.body.classList.toggle("lock");
    },
    onMenuItemClick() {
      this.isActive = false;
      document.body.classList.remove("lock");
    },
  },
  mounted() {
    this.$nextTick(function () {
      document.addEventListener("DOMContentLoaded", () => {
        AOS.init({
          duration: 800,
          delay: 300,
        });
      });

      window.addEventListener("load", function () {
        AOS.refresh();
      });
    });

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    var vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    var root = document.documentElement;
    root.style.setProperty("--vh", "".concat(vh, "px"));

    // We listen to the resize event
    window.addEventListener("resize", function () {
      var vh = window.innerHeight * 0.01;

      if (
        window.innerWidth > window.innerHeight ||
        Math.abs(this.lastHeight - window.innerHeight) > 100
      ) {
        // We execute the same script as before
        var root = document.documentElement;
        root.style.setProperty("--vh", "".concat(vh, "px"));
        this.lastHeight = window.innerHeight;
      }
    });
  },
};
</script>
