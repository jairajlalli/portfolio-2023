<template>
  <section class="hero" id="home">
    <div class="hero__overlay"></div>
    <video class="hero__video" autoplay muted loop>
      <source
        :src="require(`@/assets/images/${this.video}`)"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <div class="row">
        <div class="col-24 hero__content">
          <div class="hero__title" data-aos="fade-up" data-aos-delay="1000">
            <h1 class="hero__heading h1">{{ heading }}</h1>
            <p class="hero__heading h1">{{ heading }}</p>
            <p class="hero__heading h1">{{ heading }}</p>
          </div>
          <p class="hero__text">{{ text }}</p>
        </div>
        <div class="col-24">
          <ul class="hero__social">
            <li>
              <a
                :href="emailUrl"
                target="_blank"
                title="Email"
                class="hero__email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
                class="hero__linkedin"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      video: "bridge.mp4",
      heading: "Jairaj Lalli",
      text: "Front End Developer",
      emailUrl: "mailto:jairaj@jairajlalli.co.uk",
      linkedinUrl: "https://www.linkedin.com/in/jairajlalli/",
    };
  },
};
</script>
