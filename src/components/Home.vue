<script>
export default {
  name: "HomePage"
}
</script>

<template>
  <div id="home">
    <div class="page">
      <button id="map">地図上で探す</button>

      <h2 style="border-left: 5px solid red;">TechMatrixさんへのおすすめ</h2>
      <div class="experiences recommend">
        <div class="experience">
          <h3>[京都] 精進料理体験</h3>
          <p>京都府○×市の△寺で精進料理をいただくことができます。</p>
          <p>お一人様: <strong>￥12,000</strong></p>
          <p>
            <font-awesome-icon icon="fa-solid fa-star" style="color: gold"/>
            4.23
          </p>
          <p>
            <font-awesome-icon icon="fa-regular fa-heart" style="color: red"/>
            786
          </p>
          <img alt="精進" src="@/assets/shojin.jpeg">
        </div>
        <div class="experience">
          <h3>古民家茶道体験</h3>
          <p>岡山県○×市△町の古民家にで茶道を２時間ほど教わるレッスン</p>
          <p>お一人様: <strong>￥2,000</strong></p>
          <p>
            <font-awesome-icon icon="fa-solid fa-star" style="color: gold"/>
            3.98
          </p>
          <p>
            <font-awesome-icon icon="fa-regular fa-heart" style="color: red"/>
            212
          </p>
          <img alt="家" src="@/assets/house.jpg">
        </div>
        <div class="experience">
          <h3>[初心者大歓迎]　東京湾で釣りに挑戦しよう！</h3>
          <p>東京湾の美しい風景を眺めながら、楽しく充実した釣り体験を楽しめます！</p>
          <p>お一人様: <strong>￥6,500</strong></p>
          <p>
            <font-awesome-icon icon="fa-solid fa-star" style="color: gold"/>
            4.67
          </p>
          <p>
            <font-awesome-icon icon="fa-regular fa-heart" style="color: red"/>
            988
          </p>
          <img alt="漁船" src="@/assets/gyosen.jpg">
        </div>
      </div>

      <h2>
        <font-awesome-icon icon="fa-solid fa-fire" style="color: orangered"/>
        流行っている体験
      </h2>
      <div class="experiences">
        <div class="experience">
          <h3>秩父の自然を満喫！トレッキングツアー</h3>
          <p>自然豊かな秩父で、気軽にトレッキングを楽しめるツアーです。</p>
          <p>お一人様: <strong>￥4,000</strong></p>
          <p>
            <font-awesome-icon icon="fa-solid fa-star" style="color: gold"/>
            4.55
          </p>
          <p>
            <font-awesome-icon icon="fa-regular fa-heart" style="color: red"/>
            542
          </p>
          <img alt="秩父の自然" src="@/assets/chichibu.jpg">
          Photo by <a href="https://unsplash.com/@sophiayame?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sophia Ayame</a> on <a href="https://unsplash.com/photos/people-walking-on-street-during-daytime-WZCM-ZrKcxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
        <div class="experience">
          <h3>富士山登山ツアー</h3>
          <p>富士山での素晴らしい登山体験を楽しむことができます。</p>
          <p>お一人様: <strong>￥8,500</strong></p>
          <p>
            <font-awesome-icon icon="fa-solid fa-star" style="color: gold"/>
            4.78
          </p>
          <p>
            <font-awesome-icon icon="fa-regular fa-heart" style="color: red"/>
            1200
          </p>
          <img alt="富士山" src="@/assets/fuji.jpg">
          Photo by <a href="https://unsplash.com/@malcoo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tomáš Malík</a> on <a href="https://unsplash.com/photos/mt-fuji-landamrk-N9Fl32CFMfU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>

        <div class="experience">
          <h3>京都のお寺での写経体験</h3>
          <p>京都の静かなお寺で、写経の体験を行います。</p>
          <p>お一人様: <strong>￥3,500</strong></p>
          <p>
            <font-awesome-icon icon="fa-solid fa-star" style="color: gold"/>
            4.36
          </p>
          <p>
            <font-awesome-icon icon="fa-regular fa-heart" style="color: red"/>
            876
          </p>
          <img alt="写経体験" src="@/assets/shakyo.jpg">
          Photo by <a href="https://unsplash.com/@gronemo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Roméo A.</a> on <a href="https://unsplash.com/photos/brown-and-white-wooden-house-near-green-trees-during-daytime-SlIl9eZjWUc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>


      </div>
    </div>
  </div>
</template>

<style scoped>

#home {
  width: 100vw;
  padding: 0;
  box-sizing: border-box;
  font-family: "Corporate Logo ver3", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  animation: fadeIn 1s ease-in-out;
  margin: 5rem 0 0;
}

.page {
  background-color: #ecebeb;
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 2rem 2rem 30%;
}

h1 {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: black;
}

h2, h3 {
  padding-left: 6px;
}


h3 {
  border-left: 4px solid black;
}

#map {
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2%;
  background-color: #FDD000;
}

#map:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.experiences {
  width: 100%;
  display: grid;
  position: relative;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.experience {
  width: 80%;
  margin: 2rem;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 2%;
  scroll-behavior: smooth;
  transition: all 0.5s ease-in-out;
  overflow-x: auto;
}

.experience img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-top: 1rem;
  border-radius: 2%;
}


.experience:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  #home {
    margin-top: 0;
  }
}
</style>