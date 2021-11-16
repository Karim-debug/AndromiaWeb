<template>

  <q-header elevated>
      <q-toolbar class="toolBar">

        <q-img class="logo2" src="images/Elements/token.png"/>
   

        <q-toolbar-title class="title">
         ANDROMIA <br>
        The Ultimate Exploration Game!
        </q-toolbar-title>

          <div class="subTitleMonster">
            Monster Inventory
          </div>
       
          <div class="btnRe col-md-3 text-center">
              <q-btn class="btnRetour" color="green" label="Back" @click="$router.replace('/main')"/>             
          </div>

      </q-toolbar>
  </q-header>



<div class="monsterCard q-pa-md row q-gutter-md justify-center">
 <q-card bordered class="col-3"
    v-for="mo in explorers.monsters" :key="mo.href">

        <q-card-section class="monsterCardSection">
             <img class="monstersImage" :src="mo.assets"> 

          <router-link :to="{name:'detailMonster',query: {mo: mo.href}}"> 
              <h5 class="text-center">Name: {{mo.name}}</h5> 

          </router-link>

        </q-card-section> 
        
    </q-card>
</div>




</template>


<script>
import { api } from 'boot/axios';
import { defineComponent, ref, onMounted } from "vue";

const BASE_URL = 'https://boggy-strengthened-zenobia.glitch.me';

export default defineComponent({
  setup(){
    const explorers = ref([]);
   
    onMounted(async () =>{
      const response = await api.get(`${BASE_URL}/explorers/1`);
      if(response.status === 200)
      {
        explorers.value = response.data;
      }
    });
    return{
      explorers
    }
  }
});
</script>
