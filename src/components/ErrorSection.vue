<template>
  <section class="error-page">
    <video class="error-page__video" autoplay muted loop>
      <source :src="videoPath" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <div class="row">
        <div class="col-24 error-page__content">
          <h1 class="error-page__heading">{{ heading }}</h1>
          <p class="error-page__text">{{ text }}</p>
          <a :href="url" class="bttn">Back to Home</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      video: "404.mp4",
      heading: "404",
      text: "Sorry, we can't find the page you're looking for.",
      url: "/",
    };
  },
  computed: {
    videoPath() {
      return require(`../assets/images/${this.video}`);
    },
  },
};
</script>
