<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" v-on:click="toggleSide">
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
          <img src="../assets/iconimg/user.png" alt="" />
        </a>
        <div class="div-trolli">
          <a href="">
            <img src="../assets/iconimg/cart.png" alt="" />
          </a>
          <div class="jumlahTrol">
            0
          </div>
        </div>
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
        </div>
      </div>
      <!-- End corusel -->
    </header>


    
</template>


<script>
import axios from "axios";
export default {
  data(){
    return {
       bannerList: [],
    }
  },
  methods : {
      toggleSide: function() {
      document.getElementById("mySidenav").style.width = "100%";
    },
    toggleCloseSide: function() {
      document.getElementById("mySidenav").style.width = "0";
    },
    getDatabanner() {
      axios.get("https://www.ikoma.co.id/product/banner").then((response) => {
        this.bannerList = response.data;
        // console.log(response.data);
      });
    },
  },
  mounted(){
     this.getDatabanner();
  },
}
</script>