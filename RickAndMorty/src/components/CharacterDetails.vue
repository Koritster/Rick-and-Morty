<template>
    <div v-if="charData != null">
        <img :src="charData.image" alt="">
        <h2 class="text-light fs-2">Name: {{ charData.name }}</h2>
        <h2 class="text-light fs-3">{{ charData.status }} - {{ charData.species }}</h2>
        <h2 class="text-light fs-4">Gender: {{ charData.gender }}</h2>
        <h2 class="text-light fs-4">Last seen in: {{ charData.location.name }}</h2>
    </div>
    <div v-else></div>
</template>

<script>
    import axios from 'axios'
    
    export default{
        name: "CharacterDetails",
        components:{

        },
        props:["character"],
        data(){
            return{
                charData: null,
            }
        },
        mounted(){
            const id = this.$route.params.id;
            axios.get('https://rickandmortyapi.com/api/character/' + id)
            .then((res)=>{
                console.log(res.data);
                this.charData = res.data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>