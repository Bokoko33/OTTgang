<template>
  <section class="member" id="member">
    <div class="member__heading">
      <h2 class="heading">Member</h2>
    </div>
    <ul class="member__list">
      <li
        class="member__list__item"
        v-for="(member, index) in memberList"
        :key="index"
      >
        <div class="member__list__data">
          <img class="member__list__icon" :src="member.icon_path" />
          <p class="member__list__name">
            <span class="member__list__name--grade">{{ member.class }}</span>
            {{ member.name }}
          </p>
        </div>
        <small class="member__list__position" v-if="member.role !== ''">{{
          member.role
        }}</small>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      memberList: [
        {
          icon_path: require('~/assets/images/icons/icon_bomaye.jpg'),
          class: '4N',
          name: 'Bomaye',
          role: 'Leader',
        },
        {
          icon_path: require('~/assets/images/icons/icon_nekami.jpg'),
          class: '4M',
          name: 'nekami',
          role: 'Sub Leader',
        },
        {
          icon_path: require('~/assets/images/icons/icon_none.jpg'),
          class: '4M',
          name: 'pige',
          role: 'Supporter',
        },
        {
          icon_path: require('~/assets/images/icons/icon_kamaboko.jpg'),
          class: '4M',
          name: 'かまぼこ',
          role: 'Supporter',
        },
        {
          icon_path: require('~/assets/images/icons/icon_sawasick.jpg'),
          class: '3M',
          name: 'sawasick',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_sharp.jpg'),
          class: '3M',
          name: 'シャープ',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_veni.jpg'),
          class: '2M',
          name: 'veni',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_meiji.jpg'),
          class: '2M',
          name: '明治',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_mona.jpg'),
          class: '1M',
          name: 'mona',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_shakadeesu.jpg'),
          class: '1M',
          name: 'シャカデェス',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_none.jpg'),
          class: '1M',
          name: '大人の階段ノボル',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_pepper.jpg'),
          class: '1M',
          name: 'pepper',
          role: '',
        },
        {
          icon_path: require('~/assets/images/icons/icon_cornbutter.jpg'),
          class: '1M',
          name: 'コーンバター',
          role: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.member__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  margin-top: 40px;
  @include device-pc {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.member__list__item {
  width: 100%;
  height: 18vw;
  max-height: 100px;
  padding-right: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px white;
  @include device-pc {
    width: 45%;
  }
}

.member__list__data {
  display: flex;
  align-items: center;
}

.member__list__icon {
  width: 10vw;
  height: 10vw;
  max-width: 60px;
  max-height: 60px;
  // background-color: white;
  // border: solid 1px white;
  border-radius: 50%;
  margin-right: 20px;
}

.member__list__name {
  font-size: 16px;
  @include device-pc {
    font-size: 18px;
  }
}

.member__list__name--grade {
  font-size: 14px;
  @include device-pc {
    font-size: 16px;
  }
}

.member__list__position {
  font-size: 12px;
  color: $color-magenta;
}
</style>
