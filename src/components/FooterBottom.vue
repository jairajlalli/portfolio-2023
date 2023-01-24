<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-24">
          <div class="footer__inner">
            <div class="footer__logo-container">
              <a class="footer__logo" :href="logoUrl" :aria-label="logoLabel">
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
                <p class="footer__heading">{{ logoHeading }}</p>
              </a>
            </div>
            <div class="footer__copyright-container">
              <p class="footer__copyright" v-html="copyright"></p>
              <ul class="footer__social">
                <li>
                  <a
                    :href="emailUrl"
                    target="_blank"
                    title="Email"
                    class="footer__email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    :href="linkedinUrl"
                    target="_blank"
                    title="LinkedIn"
                    class="footer__linkedin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBottom",
  data() {
    return {
      logoUrl: "/#home",
      logoLabel: "Jairaj Lalli logo",
      logoHeading: "Jairaj Lalli",
      copyright:
        "© Jairaj Lalli " +
        new Date().getFullYear() +
        ". Made with <a href='https://vuejs.org/' target='_blank'>Vue.js</a>.",
      emailUrl: "mailto:jairaj@jairajlalli.co.uk",
      linkedinUrl: "https://www.linkedin.com/in/jairajlalli/",
    };
  },
};
</script>
