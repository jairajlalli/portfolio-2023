<template>
  <section class="portfolio" id="portfolio">
    <div class="container">
      <div
        class="portfolio__row row offset-md-2 offset-lg-4 flex-column-reverse flex-md-row align-items-md-center"
      >
        <div class="col-24 col-md-11 col-lg-9">
          <div class="portfolio__content">
            <h2 class="portfolio__title" data-aos="fade-right">
              {{ heading }}
            </h2>
            <p class="portfolio__lead">{{ text }}</p>
          </div>
        </div>
        <div class="col-lg-1 portfolio__spacer"></div>
        <div class="col-24 col-md-12 col-lg-10">
          <div class="portfolio__video-container">
            <video class="portfolio__video" autoplay muted loop>
              <source
                :src="require(`@/assets/images/${this.video}`)"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="portfolio__row row align-items-md-center"
        :class="[index % 2 === 0 ? 'offset-lg-2' : 'flex-md-row-reverse']"
        :id="'portfolio' + index"
      >
        <div v-if="index % 2 !== 0" class="col-lg-2"></div>
        <div class="col-24 col-md-10 col-lg-8">
          <div class="portfolio__video-container">
            <video class="portfolio__video" autoplay muted loop>
              <source
                :src="require(`@/assets/images/${item.video}`)"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-lg-1 portfolio__spacer"></div>
        <div
          class="col-24 col-md-11"
          :class="[index % 2 === 0 ? 'col-lg-9' : 'col-lg-8']"
        >
          <div class="portfolio__content">
            <h3
              v-if="index % 2 === 0"
              class="portfolio__heading portfolio__heading--indent"
              data-aos="fade-left"
              :data-aos-anchor="'#portfolio' + index"
              data-aos-anchor-placement="top-center"
              v-html="item.heading"
            ></h3>
            <h3
              v-else
              class="portfolio__heading portfolio__heading--indent"
              data-aos="fade-right"
              :data-aos-anchor="'#portfolio' + index"
              data-aos-anchor-placement="top-center"
              v-html="item.heading"
            ></h3>
            <p class="portfolio__text">{{ item.text }}</p>
            <a :href="item.url" target="_blank" class="bttn">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
  data() {
    return {
      heading: "Portfolio",
      text: "The following projects are websites that were built completely bespoke to meet the clients needs. WordPress was the CMS of choice for each of these builds, which were completed during my time working at Vida Creative.",
      video: "laptop-code.mp4",
      portfolioItems: [
        {
          heading: "<span>Nee</span>working",
          text: "Neeworking is a relaxed meet-up event where people can be themselves, meet great people and hear what everyone’s been up to in the region.",
          url: "https://neeworking.com/",
          video: "neeworking.mp4",
        },
        {
          heading: "Brownlee Cale",
          text: "Brownlee Cale offers recruitment and consultancy support for construction, civil engineering, facilities management and mining.",
          url: "https://brownleecale.com/",
          video: "brownlee-cale.mp4",
        },
        {
          heading: "Momentum",
          text: "Momentum is a team of strength and conditioning coaches and physiotherapists, ready to help you reach your goal.",
          url: "https://momentumsic.com/",
          video: "momentum.mp4",
        },
        {
          heading: "ART Health Solutions",
          text: "ART Health Solutions deliver robust data insights to help organisations make decisions that improve employee experience, wellbeing and performance.",
          url: "https://arthealthsolutions.com/",
          video: "art.mp4",
        },
        {
          heading: "International Property Group",
          text: "IPG offer quality, exclusive, residential properties, high-growth cities, below market value. The perfect combination for a successful investment.",
          url: "https://internationalproperty.group/",
          video: "ipg.mp4",
        },
        {
          heading: "Cleva Card",
          text: "The Cleva card, app and management platform gives your care agency a quick, safe and easy way for your staff to pay for things your clients need.",
          url: "https://clevacard.com/",
          video: "cleva.mp4",
        },
      ],
    };
  },
};
</script>
