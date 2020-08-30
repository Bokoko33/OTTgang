<template>
  <section class="comments" id="comments">
    <div class="comments__heading">
      <h2 class="heading">Comments</h2>
    </div>
    <p class="comments__describe">ご意見・ご感想お待ちしております。</p>
    <small class="comments__notes">*GoogleFormを埋め込んでいます。</small>
    <form @submit.prevent="submit" v-if="showForm">
      <textarea class="comments__textarea" v-model="content"></textarea>
      <input
        type="submit"
        class="comments__button"
        value="Click to Send"
        :class="{ disabled: !buttonActive }"
      />
    </form>
    <div v-else class="comments__form--sucess">
      <p class="comments__form--sucess__text">
        ご回答ありがとうございます。<br />
        あなたのご感想はgangたちの創作の糧となるでしょう。
      </p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      content: '',
      showForm: true,
      buttonActive: false,
    };
  },
  methods: {
    submit() {
      if (!this.buttonActive) return;

      const submitParams = new FormData();
      submitParams.append('entry.64968097', this.content);

      //CROS対策
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      //formのaction属性
      const formAction =
        'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdc904jyxEKQzwCsoA4ZFNWiBLtomlD53m9QdKJt3nJJSINdw/formResponse';

      const url = CORS_PROXY + formAction;

      this.buttonActive = false; //複数回押せないように

      axios
        .post(url, submitParams)
        .then((res) => {
          this.showForm = false;
        })
        .catch((error) => {
          alert('送信できませんでした。');
        });
    },
    reShowForm() {
      this.showForm = true;
    },
  },
  watch: {
    content: function () {
      if (this.content !== '' && this.content.match(/\S/g)) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.comments {
  padding-bottom: 120px;
  @include device-pc {
    padding-bottom: 240px;
  }
}

.comments__describe {
  font-size: 14px;
  margin-top: 40px;
}

.comments__notes {
  font-size: 12px;
  color: $color-magenta;
}

.comments__textarea {
  width: 100%;
  height: 40vw;
  margin-top: 20px;
  color: white;
  background-color: transparent;
  border: solid 1px white;
  outline: none;
  @include device-pc {
    height: 320px;
  }
}

.comments__button {
  display: block;
  width: 60%;
  height: 12vw;
  min-height: 40px;
  margin: 30px auto 0;
  background-color: $color-magenta;
  border-radius: 2px;
  color: white;
  font-size: 16px;
  letter-spacing: 0.05em;
  @include device-pc {
    max-width: 280px;
    height: 64px;
    font-size: 20px;
  }
}
.comments__form--sucess__text {
  font-size: 12px;
  margin-top: 18px;
}

.disabled {
  opacity: 0.5;
}
</style>
