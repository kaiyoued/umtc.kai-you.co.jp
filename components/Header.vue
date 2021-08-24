<template>
  <header :class="['header', {'in': headerBg}]" id="header">
    <a :class="['header__logo', {'in': headerBg}]" href="http://umtc.kai-you.co.jp">
      <img src="img/logo_ver2.svg" alt="KAI-YOU Medium Tech.">
    </a>

    <a :class="['header__logo_ex', {'in': headerBg}]" href="http://umtc.kai-you.co.jp">
      <img src="img/logo_ex.svg" alt="KAI-YOU Medium Tech.">
    </a>

    <div :class="['header__menu', {'in': headerBg}]">
      <ul>
        <li><a href="#product" v-on:click="toggleMenu; scrollTo('#product', 'body');">PRODUCT</a></li>
        <li><a href="#about" v-on:click="toggleMenu; scrollTo('#about', 'body');">ABOUT</a></li>
        <li><a href="#recruit" v-on:click="toggleMenu; scrollTo('#recruit', 'body');">RECRUIT</a></li>
        <li><a href="#contact" v-on:click="toggleMenu; scrollTo('#contact', 'body');">CONTACT</a></li>
      </ul>
    </div>
    <div class="header__menu-sp">
      <div :class="['header__btn', {'in': isMenuOpen}]" id="header-btn" v-on:click="toggleMenu">
        <div class="header__linebox">
          <span :class="['header__line', {'line1': isMenuOpen}]" id="line1"></span>
          <span :class="['header__line', {'line2': isMenuOpen}]" id="line2"></span>
          <span :class="['header__line', {'line3': isMenuOpen}]" id="line3"></span>
        </div>
      </div>
      <div :class="['header__menu-splist', {'in': isMenuOpen}]" id="header-menu">
        <img class="header__logo-sp" src="img/logo_ex.svg" alt="">
        <ul>
          <li>
            <a id="header-list1" href="#product" v-on:click="toggleMenu; scrollTo('#product', 'body');">
              PRODUCT
              <p>サービスプロダクト</p>
              <img src="img/arrow-black.svg" alt="">
            </a>
          </li>
          <li>
            <a id="header-list2" href="#about" v-on:click="toggleMenu; scrollTo('#about', 'body');">
              ABOUT
              <p>Medium Tech.とは</p>
              <img src="img/arrow-black.svg" alt="">
            </a>
          </li>
          <li>
            <a id="header-list3" href="#recruit" v-on:click="toggleMenu; scrollTo('#recruit', 'body');">
              RECRUIT
              <p>採用情報</p>
              <img src="img/arrow-black.svg" alt="">
            </a>
          </li>
          <li>
            <a id="header-list4" href="#contact" v-on:click="toggleMenu; scrollTo('#contact', 'body');">
              CONTACT
              <p>お問い合わせ</p>
              <img src="img/arrow-black.svg" alt="">
            </a>
          </li>
        </ul>
        <div class="header__menu-splist--copy">
          <p>© 2021 KAI-YOU Medium Tech.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  data: () => {
    return {
      isMenuOpen: false,
      headerBg: false,
      scroll: 0,
      scrollOffsetHeight: -100
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.scrollOffset);
    window.addEventListener('DOMContentLoaded', this.scrollOffset);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.scrollOffset);
  },
  methods: {
    onScroll () {
      const winWidth = window.innerWidth;
      this.scroll = window.scrollY;
      this.isMenuOpen = false;

      let breakPoint = 820;

      if (winWidth < 880) {
        breakPoint = 540;
      }

      if (this.scroll >= breakPoint) {
        this.headerBg = true;
      } else {
        this.headerBg = false;
      }
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    scrollOffset () {
      const winWidth = window.innerWidth;
      this.scrollOffsetHeight = -100;

      if (winWidth < 880) {
        this.scrollOffsetHeight = -64;
      }
    },
    scrollTo (element, container) {
      const options = {
        container: container,
        offset: this.scrollOffsetHeight,
      };

      const cancelScroll = VueScrollTo.scrollTo(element, 800, options);
    }
  }
}
</script>>