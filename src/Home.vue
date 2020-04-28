<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form action="" class="form-inline">
          <input
            type="text"
            value=""
            class="form-control form-nav"
            placeholder="Luminarc"
          />
        </form>

        <a href="">
          <img src="./assets/iconimg/user.png" alt="" />
        </a>
      </nav>
      <!-- Corusel -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators indicator-custum">
          <li
            v-for="(item, index) in bannerList"
            :key="item.data"
            data-target="#carouselExampleIndicators"
            :data-slide-to="index"
            :class="{ active: index === 0 }"
          ></li>
          <!-- <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
          ></li> -->
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(item, index) in bannerList"
            :key="item.data"
            :class="{ active: index === 0 }"
          >
            <img
              :src="
                'https://www.ikoma.co.id/upload/mainbanner/' + item.vBannerFile
              "
              class="d-block w-100"
              alt="foto-banner"
            />
          </div>
          <!-- <div class="carousel-item">
            <img src="https://www.ikoma.co.id/upload/mainbanner/banner_2019831101242.jpg" class="d-block w-100" alt="foto-banner" />
          </div> -->
        </div>
      </div>
      <!-- End corusel -->
    </header>
    <main>
      <div class="container">

        <!-- Diskon -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text">Diskon</h1>
            <div class="grid-container-diskon mt-2 mb-1">
              <div class="item-diskon">
                diskon
              </div>
              <div class="item-diskon">
                diskon
              </div>
            </div>
            <a href="" class="link-readmore">Lihat diskon lainnya</a>
          </div>
        </div>
        <!-- End Diskon -->

        <!-- Kategori -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text">Kategori</h1>
            <flickity
              ref="flickity"
              :options="flickityOptions"
              class="mb-1"
            >
              <div class="carousel-cell">1</div>
              <div class="carousel-cell">2</div>
              <div class="carousel-cell">3</div>
              <div class="carousel-cell">4</div>
              <div class="carousel-cell">5</div>
            </flickity>
             <a href="" class="link-readmore">Lihat semua kategori</a>
          </div>
        </div>
        <!-- End Kategori -->

        <!-- Commingsoon -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text">Comming soon</h1>
          </div>
        </div>
        <!-- End comingsoon -->

      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Flickity from "vue-flickity";

export default {
  components: {
    Flickity,
  },
  data() {
    return {
      bannerList: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        freeScroll: true,
      },
    };
  },
  methods: {
    getDatabanner() {
      axios.get("https://www.ikoma.co.id/product/banner").then((response) => {
        this.bannerList = response.data;
        console.log(response.data);
      });
    },
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },
  },
  mounted() {
    this.getDatabanner();
  },
};
</script>
