<template>
    <h3 class="text-light">¿Buscas a alguien en especifico?</h3>
    <input type="text" placeholder="Buscar personaje" v-model="search" v-on:keyup.enter="searchData"
    class="mb-3">
    <section class="container">
        <article class="row">
            <Characters v-for="character in charSearched"
            :key="character.id" :character="character"/>
        </article>
    </section>

    <h1 class="text-light mt-5 mb-3">Personajes</h1>

    <section class="container">
        <article class="row">
            <Characters v-for="character in paginated"
            :key="characters.id" :character="character"/>
        </article>
    </section>

    <div class="text-center">
        <a @click="$event=>prev()">Anterior</a>
        <a @click="$event=>next()">Siguiente</a>
    </div>
</template>

<script>
    import Characters from './Characters.vue'
    import axios from 'axios'

    export default{
        name: 'App',
        data(){
            return{
                characters:[],
                currentPage: 1,
                pageSize: 10,
                search: '',
                charSearched: []
            }
        },
        mounted(){
            axios.get('https://rickandmortyapi.com/api/character/')
            .then((res)=>{
                this.characters = res.data.results
            }).catch((err)=>{
                console.log(err);
            })
        },
        components:{
            Characters,
        },
        computed:{
            indexStart(){
                return (this.currentPage - 1) * this.pageSize
            },
            indexEnd(){
                return this.indexStart + this.pageSize
            },
            paginated(){
                return this.characters.slice(this.indexStart, this.indexEnd)
            }
        },
        methods:{
            prev(){
                this.currentPage--;
            },
            next(){
                this.currentPage++;
            },
            searchData(){
                console.log("buscando...");
                if(this.search){
                    axios.get('https://rickandmortyapi.com/api/character/?name='+this.search)
                    .then((res)=>{
                        console.log(res.data.results);
                        this.charSearched = res.data.results
                    })
                }
                else{
                    
                }
            }
        }
    }
</script>