<template>




    <div v-if="mo">
        <q-header elevated>
             <q-toolbar class="toolBar">
             
               <q-img class="logo2" src="images/Elements/token.png"/>


               <q-toolbar-title class="title">
                ANDROMIA <br>
               The Ultimate Exploration Game!
               </q-toolbar-title>

                 <div class="subTitleDetailMonster">
                        <h3>Monster Details</h3>
                </div>

                 <div class="btnRe col-md-3 text-center">
                     <q-btn class="btnRetour" color="green" label="Back" @click="$router.replace('/collectionMonstres')"/>             
                 </div>

             </q-toolbar>
         </q-header>

        <q-img  src="images/Backgrounds/back9.png"/>

      
      


        <div class="infoMonster">

            <div class="row">

                  <div class="col-md-4">
                      <p>Name: {{mo.name}}</p>
                      <p>Atlas Number: {{mo.atlasNumber}}</p>
                      <p>Speed: {{mo.speed}}</p>
                  </div>

                    <div class="col-md-4">
                      <img class="monstersDetailImage" :src="mo.assets"> 
                  </div>


                  <div class="col-md-4">
                      <p>Health: {{mo.health}}</p>
                      <p>Damage: {{mo.damage}}</p>
                      <p>Critical: {{mo.critical}}</p>
                  </div>  


                    <div class="test colored-hash col-md-12">
                        <div class="row">
                             <p>Hash: </p>
                            <p>{{mo.hash.substring(0,2)}}</p>
                             <span class="block" :style="`background-color: #${mo.hash.substring(2,8)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(8,14)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(14,20)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(20,26)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(26,32)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(32,38)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(38,44)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(44,50)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(50,56)};`"/>
                             <span class="block" :style="`background-color: #${mo.hash.substring(56,62)};`"/>
                            <p>{{mo.hash.substring(62,64)}}</p>
                        </div>
                    </div>

                  <div class="col-md-12">
                      <p>Talents: </p>
                        <marquee class="marqueeBack" >
                            <img v-for="ta in mo.talents" class="talents"  :src="'images/Affinity/' + ta + '.png'">
                        </marquee>
                  </div>

                  <div class="col-md-12">
                      <p>Kernel: </p>
                        <marquee class="marqueeBack" >
                            <img v-for="ke in mo.kernel" class="kernels"  :src="'images/Elements/' + ke + '.png'">
                        </marquee>
                  </div>

           

           
            </div>
             

        </div>


    </div>
      <div v-else  class="spinner">
          <!-- <q-spinner-cube color="blue" size="10em"></q-spinner-cube> -->
    <q-spinner-rings
          color="primary"
          size="20em"
        />          
        </div>


 
</template>

<script>
import { api } from 'boot/axios';
import { defineComponent, ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup(){
        const mo = ref();
        const route = useRoute();

        onMounted(async () =>{
                const response = await api.get(route.query.mo)
                if(response.status === 200)
                {
                    setTimeout(() => {
                        mo.value = response.data;

                    },5000);
                   
                }
        });

        return{
            mo
        }

    }
});
</script>

