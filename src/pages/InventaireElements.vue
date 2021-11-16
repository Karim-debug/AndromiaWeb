<template>

  <q-header elevated>
      <q-toolbar class="toolBar">

        <q-img class="logo2" src="images/Elements/token.png"/>
   

        <q-toolbar-title class="title">
         ANDROMIA <br>
        The Ultimate Exploration Game!
        </q-toolbar-title>
       
        <div class="subTitleElement">
          Elements Inventory
        </div>

          <div class="btnRe col-md-3 text-center">
              <q-btn class="btnRetour" color="green" label="Back" @click="$router.replace('/main')"/>             
          </div>

      </q-toolbar>
  </q-header>



  

<div class="elementsCard q-pa-md row q-gutter-md justify-center">
 <q-card bordered class="col-3"
    v-for="el in explorers.elements">

        <q-card-section class="elementCardSection">
            <img  :src="'images/Elements/' + el.element + '.png'">
            <h5 class="text-center">Element: {{el.element}}</h5> 
            <h6 class="text-center">Quantity: {{el.quantity}}</h6> 
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






<style>



</style>