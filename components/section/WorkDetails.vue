<template>
  <div class="content">
    <section class="work-details">
      <div class="work-details__content">
        <h1 class="work-details__title">
          <slot name="title" />
        </h1>
        <div class="work-details__composer">
          <img
            class="work-details__composer__img"
            :src="require(`~/assets/images/icons/${iconSrc}`)"
            alt=""
          />
          <p class="work-details__composer__name">
            <slot name="composer" />
          </p>
        </div>
        <div class="work-details__movie">
          <h2 class="heading--work-details">Movie</h2>
          <div class="work-details__youtube--wrap">
            <iframe
              class="work-details__youtube"
              width="560"
              height="315"
              :src="movieSrc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="work-details__sub">
          <div class="work-details__sc">
            <h2 class="heading--work-details">SoundCloud</h2>
            <div class="work-details__sc--wrap">
              <iframe
                class="work-details__sc--embed sc-widget"
                width="100%"
                height="166"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                :src="
                  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
                  soundCloudSrc +
                  '&color=%23b92c92&auto_play=false&hide_related=false&show_comments=tfalse&show_user=true&show_reposts=false&show_teaser=false'
                "
              ></iframe>
            </div>
          </div>
          <div class="work-details__caption">
            <DecoLine />
            <p class="work-details__caption__text">
              <slot name="caption" />
            </p>
          </div>
        </div>
      </div>
      <div class="work-details__others">
        <h2 class="heading--work-details">Others</h2>
        <div class="work-details__nav">
          <nuxt-link
            v-if="prevLink !== ''"
            :to="prevLink"
            class="work-details__nav__item work-details__nav--prev"
          >
            <img
              class="work-details__nav__img"
              :src="require(`~/assets/images/artworks/${prevImageSrc}`)"
              alt="前の作品のアートワーク画像"
            />
            <p class="work-details__nav__text work-details__nav__text--prev">
              Previous
            </p>
          </nuxt-link>
          <nuxt-link to="/#works" class="work-details__nav__works-top">
            <img
              class="work-details__nav__works-top--img"
              src="~/assets/images/svg/icon_works_top.svg"
              alt=""
            />
          </nuxt-link>
          <nuxt-link
            v-if="nextLink !== ''"
            :to="nextLink"
            class="work-details__nav__item work-details__nav--next"
          >
            <img
              class="work-details__nav__img"
              :src="require(`~/assets/images/artworks/${nextImageSrc}`)"
              alt="次の作品のアートワーク画像"
            />
            <p class="work-details__nav__text work-details__nav__text--next">
              Next
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DecoLine from '~/components/parts/DecoLine';

export default {
  props: {
    iconSrc: {
      type: String,
    },
    movieSrc: {
      type: String,
    },
    soundCloudSrc: {
      type: String,
    },
    prevImageSrc: {
      type: String,
    },
    nextImageSrc: {
      type: String,
    },
    prevLink: {
      type: String,
    },
    nextLink: {
      type: String,
    },
  },
  components: {
    DecoLine,
  },
};
</script>

<style lang="scss" scoped>
.work-details {
  margin: 0 auto 60px;
  @include device-pc {
    margin-bottom: 100px;
  }
}

.work-details__content {
  overflow: hidden;
}

.work-details__title {
  font-size: 30px;
  font-weight: 700;
  @include device-pc {
    font-size: 42px;
  }
}

.featuring-text {
  font-size: 20px;
  position: relative;
  top: -8px;
  @include device-pc {
    font-size: 30px;
    top: 0;
  }
}

.work-details__composer {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.work-details__composer__img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 10px;
  @include device-pc {
    width: 32px;
    height: 32px;
  }
}

.work-details__composer__name {
  font-size: 18px;
  @include device-pc {
    font-size: 24px;
  }
}

.work-details__movie {
  width: 100%;
  margin-top: 42px;
  @include device-pc {
    width: 60%;
    margin-top: 52px;
    float: left;
  }
}

.work-details__youtube--wrap {
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
}

.work-details__youtube {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.work-details__sub {
  width: 100%;
  display: flex;
  flex-direction: column;
  @include device-pc {
    flex-direction: column-reverse;
    float: right;
    width: 35%;
  }
}

.work-details__sc {
  width: 100%;
  margin-top: 46px;
}

.work-details__sc--wrap {
  width: 100%;
  height: 125px;
}

.work-details__sc--embed {
  width: 100%;
  height: 100%;
}

.work-details__caption {
  margin-top: 60px;
}

.work-details__caption__text {
  font-size: 14px;
}

.work-details__others {
  position: relative;
  margin-top: 140px;
  @include device-pc {
    margin-top: 300px;
    text-align: center;
  }
  &::before {
    content: '';
    position: absolute;
    // width: 0;
    // height: 0;
    // border-top: solid 50px white;
    // border-left: solid 55px transparent;
    // border-right: solid 28px transparent;
    // transform: rotate(8deg);
    width: 1px;
    height: 40px;
    background-color: white;
    left: 0;
    right: 0;
    margin: auto;
    top: -80px;
    @include device-pc {
      top: -140px;
    }
  }
}

.work-details__nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 24px;
  position: relative;
  @include device-pc {
    justify-content: center;
    margin-top: 60px;
  }
}

.work-details__nav__works-top {
  position: absolute;
  left: 0;
  right: 0;
  top: 4.5vw;
  margin: auto;
  width: 6vw;
  height: 6vw;
  @include device-pc {
    width: 40px;
    height: 40px;
    top: 70px;
  }
}

.work-details__nav__works-top--img {
  width: 100%;
  height: 100%;
}

.work-details__nav__item {
  width: 16vw;
  display: flex;
  flex-direction: column;
  @include device-pc {
    width: 176px;
    margin: 0 120px;
  }
  &:hover {
    .work-details__nav__text::after {
      transform: scaleX(2);
    }
  }
}

.work-details__nav--prev {
  align-items: flex-start;
}

.work-details__nav--next {
  align-items: flex-end;
}

.work-details__nav__img {
  width: 16vw;
  height: 16vw;
  @include device-pc {
    width: 176px;
    height: 176px;
  }
}

.work-details__nav__text {
  position: relative;
  font-size: 12px;
  margin-top: 10px;
  @include device-pc {
    font-size: 18px;
  }
  &::after {
    content: '';
    width: 16px;
    height: 2px;
    position: absolute;
    bottom: -8px;
    background-color: $color-magenta;
    transition: all 0.2s;
  }
}

.work-details__nav__text--prev {
  &::after {
    left: 0;
    transform-origin: left;
  }
}

.work-details__nav__text--next {
  &::after {
    right: 0;
    transform-origin: right;
  }
}
</style>
