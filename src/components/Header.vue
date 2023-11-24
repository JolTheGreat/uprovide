<script>
export default {
  name: "Header"
}
</script>

<template>
  <div id="header">
    <img src="@/assets/logo.png" alt="logo" @click="document.location.href='/'">
    <div id="search">
      <input type="text" placeholder="どこ行く？">
      <input type="text" placeholder="何したい？">
      <input type="text" placeholder="いつ行く？">
      <button>検索</button>
    </div>
    <ul>

      <li>
        <button @click="document.location.href='https://www.tokyo-park.or.jp/park/format/index006.html'"
                id="post-button">経験を提供する
        </button>
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-user"/>
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-bell"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#header {
  left: 0;
  top: 0;
  font-family: "Corporate-Logo-V3-Bold", sans-serif;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem 2rem;
  width: 100%;
  height: 5rem;
  z-index: 200;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

#header img {
  width: auto;
  height: 3rem;
}

#header img:hover {
  cursor: pointer;
}

#header ul {
  display: flex;
  list-style: none;
}

#header ul li {
  margin-left: 1rem;
}

#header ul li a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
}

#header ul li a:hover {
  color: #555;
}

#post-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
}

#post-button {
  background-color: #2DBFBF;
  color: #fff;
}

#post-button:hover {
  background-color: #1D7A7A;
}

font-awesome-icon {
  border: 1px solid red;
  border-radius: 50%;
}

#header ul {
  display: flex;
  list-style: none;
  align-items: center;
}

#search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 1rem;
}

#search input {
  border: none;
  width: 30%;
  height: 100%;
  font-size: 1rem;
}

#search button {
  border: none;
  background-color: #2DBFBF;
  color: #fff;
  padding: 0.5rem 0.1rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
}

@media (max-width: 768px) {
  #header {
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 18rem;
  }

  #header img {
    margin-bottom: 1rem;
  }

  #header ul {
    flex-direction: column;
  }

  #header ul li {
    margin-left: 0;
    margin-bottom: 1rem;
  }

  #header ul li a {
    font-size: 1.2rem;
  }
}
</style>