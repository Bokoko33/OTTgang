<template>
  <section class="introduction" id="js-introduction">
    <div class="introduction__heading">
      <h2 class="heading">Introduction</h2>
    </div>
    <div class="introduction__movie--wrap">
      <iframe
        class="introduction__movie"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1NUJ2HICTYc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="introduction__caption">
      <DecoLine />
      <p class="introduction__caption__text">
        我々OTT
        gang（オーティーティーギャング）は、PC一台で音楽制作をする卓です。劇伴、EDM、Hip
        Hopなど、ジャンルを問わず頭の中にある自分の世界観を音楽で表現し、それらをOTTサービス（Youtube、SoundCloudなど）を用いて世界中に公開していきます。
      </p>
    </div>
  </section>
</template>


<script>
import DecoLine from '~/components/parts/DecoLine';
export default {
  components: {
    DecoLine,
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  @include device-pc {
    overflow: hidden;
  }
}

.introduction__movie--wrap {
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
  margin-top: 20px;
  @include device-pc {
    width: 65%;
    padding-bottom: 36.5625%;
    margin-right: 0;
    margin-top: 40px;
    float: left;
  }
}

.introduction__movie {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.introduction__caption {
  margin-top: 40px;
  @include device-pc {
    float: right;
    width: 30%;
  }
}

.introduction__caption__text {
  font-size: 14px;

  line-height: 1.8;
}
</style>
