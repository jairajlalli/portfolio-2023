<template>
  <section class="about" id="about">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-24">
          <h2 data-aos="fade-up">{{ heading }}</h2>
          <div class="about__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.26 400.11">
              <polygon
                fill="#36b2f3"
                points="115.86 143.97 115.86 85.84 259.53 0 259.53 400.11 0 293.95 197.69 153.48 197.69 213.96 102.1 281.92 209.72 325.16 209.72 88 115.86 143.97"
              />
              <polygon
                fill="#d33bff"
                points="271.44 101.19 345.8 48.19 345.8 246.51 436.26 180.23 436.26 243.01 295.61 346.25 295.61 144.67 271.44 161.82 271.44 101.19"
              />
            </svg>
          </div>
          <p class="about__text">{{ text }}</p>
          <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.url"
            target="_blank"
            class="about__button bttn"
            >{{ link.title }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      heading: "About Me",
      text: "I am an ambitious and hard working person who can communicate effectively having worked with a wide range of people. My University course together with 6 years of Industry experience has honed my Front End Development skills.",
      links: [
        { url: "mailto:jairaj@jairajlalli.co.uk", title: "Send a Message" },
        {
          url: "https://www.linkedin.com/in/jairajlalli/",
          title: "View on LinkedIn",
        },
      ],
    };
  },
};
</script>
