<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" v-on:click="toggleSide">
            <span class="navbar-toggler-icon"></span>
          </button>

          <form action="" class="form-inline nav-form">
            <input
              type="text"
              value=""
              class="form-control form-nav"
              placeholder="Luminarc"
            />
          </form>
          <div class="navbar-nav ml-auto">
            <a href="" class="nav-item nav-link">
              <img src="./assets/iconimg/cart.png" alt="" />
            </a>
            <a href="" class="nav-item nav-link">
              <img src="./assets/iconimg/user.png" alt="" />
              <span class="jumlahTrol">
                0
              </span>
            </a>
          </div>

          <!-- <div class="div-trolli">
            <a href="">
              <img src="./assets/iconimg/cart.png" alt="" />
            </a>
           
          </div> -->
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

    <!-- Side Navigation -->
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="toggleCloseSide"
        >&times;</a
      >
      <div class="div-brand wrap-content-sidenav"></div>
      <a href="#">Home</a>
      <a href="#">Info</a>
      <a href="#">Masuk</a>
      <a href="#">Daftar</a>
      <div class="dropdown">
        <p>Kategori</p>
        <div class="drop-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
    </div>
    <!-- End Navigation -->

    <main>
      <div class="container">
        <!-- Diskon -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text mb-2">Diskon</h1>
            <div class="grid-container-diskon mt-2 mb-1">
              <div class="item-diskon">
                diskon
              </div>
              <div class="item-diskon">
                diskon
              </div>
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
            <h1 class="heading-text mb-2">Kategori</h1>
            <flickity ref="flickity" :options="flickityOptions" class="mb-1">
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
            <h1 class="heading-text mb-2">Comming soon</h1>
            <flickity
              v-if="Object.keys(listComing).length > 0"
              ref="flickity"
              :options="flickityOptions"
              class="mb-1 card-content"
            >
              <!-- Card 1 -->
              <div
                class="carousel-cell-card"
                v-for="item in listComing"
                :key="item.data"
              >
                <div class="img-card">
                  <img
                    :src="
                      'https://www.ikoma.co.id/upload/productdir/' +
                        item.vGambar1
                    "
                    alt="foto-product"
                  />
                </div>
                <div class="body-card">
                  <p class="head-text-card">{{ item.vName }}</p>
                </div>
              </div>
              <!-- End card -->
            </flickity>
          </div>
        </div>
        <!-- End comingsoon -->

        <!-- Product Terbaru -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text mb-2">Produk Terbaru</h1>
            <!-- Card product -->
            <div
              class="card-product"
              v-if="Object.keys(listnewProduk).length > 0"
            >
              <!-- Item Card product -->
              <div
                class="item-card-product"
                v-for="item in listnewProduk"
                :key="item.data"
              >
                <div class="img-card-product">
                  <img
                    :src="
                      'https://www.ikoma.co.id/upload/productdir/' +
                        item.vGambar1
                    "
                    alt="foto-product"
                  />
                </div>
                <div class="card-body">
                  <div class="diskon">
                    15%
                  </div>
                  <p class="title-product">
                    {{ item.vName | truncate(12, "...") }}
                  </p>
                  <p class="harga-diskon"><s>Rp.17.000</s></p>
                  <p class="normal-harga">Rp.10.000</p>
                </div>
              </div>
              <!-- Item Card Product -->
            </div>
            <!-- End Card product -->
          </div>
        </div>
        <!-- End Product Terbaru -->

        <!-- Produk terlairs -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text mb-2">Produk Terlaris</h1>
            <!-- Card product -->
            <div
              class="card-product"
              v-if="Object.keys(listnewProduk).length > 0"
            >
              <!-- Item Card product -->
              <div
                class="item-card-product"
                v-for="item in listnewProduk"
                :key="item.data"
              >
                <div class="img-card-product">
                  <img
                    :src="
                      'https://www.ikoma.co.id/upload/productdir/' +
                        item.vGambar1
                    "
                    alt="foto-product"
                  />
                </div>
                <div class="card-body">
                  <div class="diskon">
                    15%
                  </div>
                  <p class="title-product">
                    {{ item.vName | truncate(12, "...") }}
                  </p>
                  <p class="harga-diskon"><s>Rp.17.000</s></p>
                  <p class="normal-harga">Rp.10.000</p>
                </div>
              </div>
              <!-- Item Card Product -->
            </div>
            <!-- End Card product -->
          </div>
        </div>
        <!-- End product Terlaris -->

        <!-- Product Promo -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <h1 class="heading-text mb-2">Produk Promo</h1>
            <!-- Card product -->
            <div
              class="card-product"
              v-if="Object.keys(listnewProduk).length > 0"
            >
              <!-- Item Card product -->
              <div
                class="item-card-product"
                v-for="item in listnewProduk"
                :key="item.data"
              >
                <div class="img-card-product">
                  <img
                    :src="
                      'https://www.ikoma.co.id/upload/productdir/' +
                        item.vGambar1
                    "
                    alt="foto-product"
                  />
                </div>
                <div class="card-body">
                  <div class="diskon">
                    15%
                  </div>
                  <p class="title-product">
                    {{ item.vName | truncate(12, "...") }}
                  </p>
                  <p class="harga-diskon"><s>Rp.17.000</s></p>
                  <p class="normal-harga">Rp.10.000</p>
                </div>
              </div>
              <!-- Item Card Product -->
            </div>
            <!-- End Card product -->
          </div>
        </div>
        <!-- End Promo -->

        <!-- Trust -->
        <div class="row wrap-content">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg content-trust mb-2">
                <img
                  src="./assets/iconimg/good.png"
                  alt=""
                  class="float-right icon-trust"
                />
                <p>JAMINAN PACKING ANTI PECAH</p>
              </div>
              <div class="col-lg content-trust mb-2">
                <img
                  src="./assets/iconimg/compass.png"
                  alt=""
                  class="float-right icon-trust"
                />
                <p>PENGIRIMAN KESELURUH INDONESIA</p>
              </div>
              <div class="col-lg content-trust mb-2">
                <img
                  src="./assets/iconimg/headset.png"
                  alt=""
                  class="float-right icon-trust"
                />
                <p>CUSTOMER SERVICE TERBAIK</p>
              </div>
              <div class="col-lg content-trust mb-2">
                <img
                  src="./assets/iconimg/shield.png"
                  alt=""
                  class="float-right icon-trust"
                />
                <p>JAMINAN PRODUK ORIGINAL</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Trust -->
      </div>
      <!-- Garansi produk -->
      <div class="row wrap-content garansi-produk-content">
        <div class="col-lg-12 padding-20">
          <div class="container">
          
            <div class="row">
              <div class="col-lg">
                  <h3 class="mb-4">Garansi Produk</h3>
                <ul class="penjelasan-garansi mt-3">
                  <li>Produk dijamin original</li>
                  <li>Packaging paling aman, anti pecah saat dikirim</li>
                  <li>Akan diganti secepatnya apabila pecah saat pengiriman</li>
                </ul>
              </div>
              <div class="col-lg">
                <h3 class="mb-4">Ikuti Kami</h3>
                <img
                  src="./assets/iconimg/fb.png"
                  alt=""
                  class="sosmed-garansi"
                />
                <img
                  src="./assets/iconimg/tw.png"
                  alt=""
                  class="sosmed-garansi"
                />
                <img
                  src="./assets/iconimg/ig.png"
                  alt=""
                  class="sosmed-garansi"
                />
                <img
                  src="./assets/iconimg/yt.png"
                  alt=""
                  class="sosmed-garansi"
                />
                <img
                  src="./assets/iconimg/wa.png"
                  alt=""
                  class="sosmed-garansi"
                />
              </div>
              <div class="col-lg mt-4">
                <h3 class="mb-4">Ikuti Group Whatsapp</h3>
                <form action="">
                  <input
                    type="text"
                    class="form-control form-default"
                    placeholder="081xxxxxxxxx"
                  />
                  <button class="btn btn-secondary mt-2 btn-custum">
                    Daftar
                  </button>
                </form>
                <p class="mt-4">
                  Agar bisa mendapatkan informasi diskon dan promo-promo ikoma
                  lebih cepat, Yuk ikutin Group Whatsapp ikoma, masukkan nomor
                  Handphone anda untuk mendapatkan Link Invitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Garasni produk -->
      <div class="container">
  
      <!-- Jenis Pembayaran -->
      <div class="row wrap-content">
        <div class="col-lg-12 jenis-pembayaran">
          <h1 class="heading-text mb-2">Jenis Pembayaran</h1>
          <div class="content-logo mb-4">
            <div class="item-logo">
              <img src="./assets/iconimg/visa.png" alt="" />
            </div>
            <div class="item-logo">
              <img src="./assets/iconimg/bca.png" alt="" />
            </div>
            <div class="item-logo">
              <img src="./assets/iconimg/mandiri.jpg" alt="" />
            </div>
            <div class="item-logo">
              <img src="./assets/iconimg/permata.png" alt="" />
            </div>
          </div>

          <h1
            class="heading-text mt-4 mb-2"
            style="margin-top:60px !important; "
          >
            Jenis Pengiriman
          </h1>

          <div class="content-logo grid3 mb-4">
            <div class="item-logo">
              <img src="./assets/iconimg/jne.png" alt="" />
            </div>
            <div class="item-logo">
              <img src="./assets/iconimg/tikilogo.png" alt="" />
            </div>
            <div class="item-logo">
              <img src="./assets/iconimg/posindo.jpg" alt="" />
            </div>
          </div>

          <h1
            class="heading-text mt-4 mb-2"
            style="margin-top:40px !important; "
          >
            Jenis Keamanan
          </h1>
          <div class="content-logo mb-4">
            <div class="item-logo">
              <img src="./assets/iconimg/geo.png" alt="" />
            </div>
            <div class="item-logo">
              <img src="./assets/iconimg/ssl.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- End Jenis Pembayaran -->
            
      </div>
    </main>
    <footer>
      Copyright &copy; 2017 - 2020 ikoma.co.id. All right reserved
      <a href="">Ketentuan Layanan</a> | <a href="">Kebijakan Privasi</a>
    </footer>
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
      listComing: [],
      listnewProduk: [],
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
    getDataComing() {
      axios
        .get("https://www.ikoma.co.id/product/prod?limit=8")
        .then((response) => {
          this.listComing = response.data;
          // console.log(response.data);
        });
    },
    getDatanewproduct() {
      axios
        .get("https://www.ikoma.co.id/product/prod?limit=4")
        .then((response) => {
          this.listnewProduk = response.data;
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
    this.getDataComing();
    this.getDatanewproduct();
  },
};
</script>
