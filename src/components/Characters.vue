<template>
    <div class="col-3 mb-3">
        <div class="card bg-black">
            <img class="img" :src="character.image" alt="" >
            <span class="fs-4 fw-bold">{{ character.name }}</span>
            <p class="text-light">{{ character.status }} - {{ character.species }}</p>
            <p class="text-light">Last seen in: {{ character.location.name }}</p>
            <button @click="openCharacterList">Meet</button>
        </div>
    </div>
    
</template>

<script>
    export default{
        props:["character"],
        methods:{
            openCharacterList(){
                console.log(this.character.id);
                this.$router.push("/character/" + this.character.id)
            }
        }
    }
</script>

<style>
.card {
  width: 17em;
  height: 22.5em;
  transition: 1s ease-in-out;
  clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
}

.card span {
  font-weight: bold;
  color: white;
  text-align: center;
  display: block;
  font-size: 1em;
}

.card .img {
  width: 4.8em;
  height: 4.8em;
  border-radius: 15px;
  margin: auto;
}

.card a {
  color: white;
  transition: .4s ease-in-out;
}

.card a:hover {
  color: red;
}

.card button {
  padding: 0.8em 1.7em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: #ffffff;
  color: rgb(0, 0, 0);
  transition: .4s ease-in-out;
}

.card button:hover {
  background: red;
  color: white;
  cursor: pointer;
}
</style>