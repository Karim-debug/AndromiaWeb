<template>
  <q-header elevated>
    <q-toolbar class="toolBarMain">

      <div class="row">

        <div class="title2 col-md-6">

          <div class="row">


               <div class="col-md-2">
                 <q-img class="logo2" src="images/Elements/token.png" />
               </div>

                <div class="row col-md-10">


                    <div class="col-md-5">
                      <h1>ANDROMIA</h1>
                    </div>

                    <div class="col-md-12">

                    </div>
                </div>
          
          </div>

             

        </div>

        <div class="infoUser col-md-3">

          <div class="row">

            <div class="col-md-4">
              <q-img class="userImage" src="images/Perso/perso4.png" />

              <h5 class="username">{{explorers.username}}</h5>
          </div>

            <div class="col-md-6">
              <h5>Location: {{explorers.location}}</h5>
              <h5>Inox: {{explorers.inox}}</h5>
            </div>

            <div class="col-md-12">
              <q-btn class="btnDecon" color="red" label="Déconnexion" @click="$router.replace('/')"/>
             </div>
          </div>



        </div>

      </div>

          <div class="filet col-md-12">
              <marquee >
                 <img v-for="el in explorers.elements" class="elements"  :src="'images/Elements/' + el.element + '.png'">
              </marquee>
        </div>

    </q-toolbar>
  </q-header>

  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6">
      <q-img class="backElem" src="images/Elements/elements.png" />

      <div class="btnElemColl col-sm-12">
        <q-btn
          class="glow-on-hover"
          @click="$router.replace('/inventaireElements')">
          <q-icon left size="3em" name="stream" />
          <div>My Elements</div>
        </q-btn>
      </div>
    </div>

    <div class="col-sm-12 col-md-6 col-lg-6">
      <q-img class="backMons" src="images/Monstres/monster4.png" />

      <div class="btnMonsterColl">
        <q-btn
          class="glow-on-hover"
          @click="$router.replace('/collectionMonstres')"
        >
          <q-icon left size="3em" name="catching_pokemon" />
          <div>My Monsters</div>
        </q-btn>
      </div>
    </div>
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

.username{
  margin-top: 10px;
}

.logo2{
  width: 10em;
  height: 15em;
}

.filet{
  margin-top: 200px;
 
}

.btnDecon {
  background: red;
  border-radius: 10em;
  max-height: 2em;
  width: 7em;
  position: absolute;
  top: 10%;
  left: 110%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
 
}

.userImage {
  height: 7em;
  width: 7em;
  border-radius: 5em;
}

.infoUser {
  text-align: center;
  left: 80%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
}

.title2 {
  text-align: center;
  left: 25%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
}



.toolBarMain {
  font-family: fantasy;
  height: 250px;
  background: rgb(219, 155, 36);
}

.backElem {
  height: 60em;
  width: 75em;
}

.backMons {
  height: 60em;
  width: 75em;

  
  
}

.btnElemColl {
  position: absolute;
  top: 60%;
  left: 25%;
  font-size: 3em;
  color: white;
  font-family: fantasy;
}

.btnMonsterColl {
  position: absolute;
  top: 60%;
  left: 75%;
  font-size: 3em;
  color: white;
  font-family: fantasy;
}

.elements {
  margin-right: 10em;
  width: 100px;

}

@media (max-width: 470px max-height: 777px){

.btnMonsterColl {
  top: 60%;
  left: 10%;
  font-size: 3em;
  color: white;
  font-family: fantasy;
}

}

</style>
