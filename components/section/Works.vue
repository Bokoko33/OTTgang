<template>
  <section class="works" id="works">
    <div class="works__heading">
      <h2 class="heading">Works</h2>
      <small class="works__heading__sub">14tracks</small>
    </div>
    <ul class="works__list">
      <li class="works__list__item" v-for="(work, index) in worksData" :key="index">
        <!-- <div class="works__list__sc">
          <p class="works__list__sc--alt">Loading...</p>
          <iframe
            class="works__list__sc--embed sc-widget"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="
              'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' +
              work.soundCloudsrc +
              '&color=%23b92c92&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'
            "
          ></iframe>
        </div>-->
        <div class="works__youtube--wrap">
          <iframe
            class="works__youtube"
            width="560"
            height="315"
            :src="work.youtubeSrc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="works__list__data">
          <div class="works__list__info">
            <h3 class="works__list__title" v-html="work.title"></h3>
            <div class="works__list__composer">
              <small class="works__list__composer--label">composed by</small>
              <p class="works__list__composer--name">{{ work.composer }}</p>
            </div>
          </div>
          <a :href="work.link" class="works__list__link">詳細を見る</a>
        </div>
      </li>
    </ul>

    <!-- <p>
      現在、一時的な不具合によりSoundCloudの視聴ができない状態です。
      <br />Youtubeの作品は引き続きお楽しみいただけます。
    </p>
    <a
      class="alert-youtube"
      href="https://www.youtube.com/channel/UCLXPDkT37WzhECyrk60_p8w/featured"
      target="_blank"
    >YouTubeチャンネルへ</a>-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      worksData: [
        {
          title: 'Reviving Armor',
          composer: 'nekami',
          soundCloudsrc: '884882260',
          youtubeSrc: 'https://www.youtube.com/embed/y6EfRADPbX8',
          link: '/reviving-armor',
        },
        {
          title: 'Still Kids',
          composer: 'Bomaye',
          soundCloudsrc: '885263941',
          youtubeSrc: 'https://www.youtube.com/embed/kxEMkszIJIg',
          link: '/still-kids',
        },
        {
          title: 'himmel',
          composer: 'mona',
          soundCloudsrc: '884872567',
          youtubeSrc: 'https://www.youtube.com/embed/MiP_d9dCu9c',
          link: '/himmel',
        },
        {
          title: 'SoundScape <span class="featuring">feat.カゼヒキ</span>',
          composer: 'シャカデェス',
          soundCloudsrc: '884874601',
          youtubeSrc: 'https://www.youtube.com/embed/45C_OqJ-K-k',
          link: '/soundscape',
        },
        {
          title: 'Closing for the day',
          composer: '大人の階段ノボル',
          soundCloudsrc: '884875474',
          youtubeSrc: 'https://www.youtube.com/embed/VityjDLhqXU',
          link: '/closing-for-the-day',
        },
        {
          title: 'mid',
          composer: 'pepper',
          soundCloudsrc: '884876110',
          youtubeSrc: 'https://www.youtube.com/embed/aAylWyuYt2Y',
          link: '/mid',
        },
        {
          title: 'Eternally',
          composer: 'コーンバター',
          soundCloudsrc: '884876980',
          youtubeSrc: 'https://www.youtube.com/embed/Ae8J7MoafrY',
          link: '/eternally',
        },
        {
          title: 'memento.',
          composer: 'veni',
          soundCloudsrc: '884878213',
          youtubeSrc: 'https://www.youtube.com/embed/4vCQgwNHSJI',
          link: '/memento',
        },
        {
          title: 'Silly',
          composer: '明治',
          soundCloudsrc: '884878906',
          youtubeSrc: 'https://www.youtube.com/embed/fevsxG9kMIo',
          link: '/silly',
        },
        {
          title: 'i',
          composer: 'sawasick',
          soundCloudsrc: '884879545',
          youtubeSrc: 'https://www.youtube.com/embed/WDgRkddgAx8',
          link: '/i',
        },
        {
          title: '夜明け',
          composer: 'シャープ',
          soundCloudsrc: '884880247',
          youtubeSrc: 'https://www.youtube.com/embed/OsI6bRXeyPU',
          link: '/yoake',
        },
        {
          title: 'foaming',
          composer: 'nekami',
          soundCloudsrc: '884881756',
          youtubeSrc: 'https://www.youtube.com/embed/CVF1WUP4GZ0',
          link: '/foaming',
        },
        {
          title: 'RAPID FIRE',
          composer: 'Bomaye',
          soundCloudsrc: '884960956',
          youtubeSrc: 'https://www.youtube.com/embed/dq86RRpsZSk',
          link: '/rapid-fire',
        },
        {
          title: 'Silent Morning',
          composer: 'pige',
          soundCloudsrc: '884884753',
          youtubeSrc: 'https://www.youtube.com/embed/Pj4cuEJ7_zM',
          link: '/silent-morning',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.alert-youtube {
  margin-top: 10px;
  text-decoration: underline;
}

.works__heading {
  display: flex;
  align-items: center;
}

.works__heading__sub {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 26px;
  &::before {
    display: block;
    content: '';
    width: 20px;
    height: 1px;
    background-color: white;
    margin-right: 12px;
  }
}

.works__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  @include device-pc {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
  }
}

.works__list__item {
  width: 100%;
  position: relative;
  margin-bottom: 20vw;
  @include device-pc {
    width: calc((#{$width-max-pc} / 3) - #{$margin-works-list});
    margin-bottom: 120px;
  }
}

.works__list__sc {
  position: relative;
  width: 88vw;
  height: 88vw;
  max-height: 375px;
  @include device-pc {
    max-width: calc((#{$width-max-pc} / 3) - #{$margin-works-list});
    max-height: calc((#{$width-max-pc} / 3) - #{$margin-works-list});
  }
}

.works__list__sc--alt {
  position: absolute;
  width: 100px;
  height: 20px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.works__list__sc--embed {
  width: 100%;
  height: 100%;
  position: relative;
}

.works__youtube--wrap {
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
}

.works__youtube {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.works__list__data {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
  @include device-pc {
    width: 100%;
  }
}

.works__list__info {
  width: 100%;
  height: 14vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include device-pc {
    height: 64px;
  }
}

.works__list__title {
  width: 44%;
  font-size: 6.2vw;
  @include device-pc {
    font-size: 24px;
  }
}

.works__list__title ::v-deep .featuring {
  font-size: 5vw;
  @include device-pc {
    font-size: 20px;
  }
}

.works__list__composer {
  text-align: right;
}

.works__list__composer--label {
  font-size: 3.8vw;
  color: $color-magenta;
  @include device-pc {
    font-size: 12px;
  }
}

.works__list__composer--name {
  font-size: 4.6vw;
  @include device-pc {
    font-size: 20px;
  }
}

.works__list__link {
  width: 33vw;
  height: 8vw;
  max-height: 64px;
  margin-top: 2.5vw;
  font-size: 2.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-magenta;
  border-radius: 2px;
  @include device-pc {
    width: 46%;
    height: 34px;
    margin-top: 20px;
    font-size: 14px;
  }
  &::after {
    content: '';
    width: 3vw;
    height: 1px;
    background-color: white;
    margin-left: 2vw;
    @include device-pc {
      width: 20px;
      margin-left: 10px;
    }
  }
}
</style>
