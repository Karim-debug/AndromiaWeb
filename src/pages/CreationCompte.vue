<template>

    <q-header elevated>
      <q-toolbar class="toolBar">

        <q-img class="logo" src="images/Elements/token.png"/>
   

        <q-toolbar-title class="title">
         ANDROMIA <br>
        The Ultimate Exploration Game!
        </q-toolbar-title>
       
          <div class="col-md-3 text-center">
              <q-btn class="glow-on-hover" @click="$router.replace('/')">
                <q-icon left size="3em" name="person" />
                <div>Connexion</div>
              </q-btn>
          </div>

      </q-toolbar>
  </q-header>


       <q-img src="images/Backgrounds/back2.png"/>

      <div class="subTitle">
       <h1>Account Creation</h1>
      </div>

    <div class="user col-md-12">

                <q-input v-model="username" class="input" filled label="Username">
                  <template v-slot:prepend>
                    <q-icon name="portrait" />
                  </template>
                </q-input> 
      </div>

      <div class="email col-md-12">

                <q-input v-model="email" class="input" filled label="Email">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input> 
      </div>

      <div class="password col-md-12">

       <q-input label="Password"  class="input" v-model="password" filled :type="isPwd ? 'password' : 'text'" >

        <template v-slot:prepend>
          <q-icon name="key"/>
        </template>

        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"/>
        </template>
      </q-input>
  
      </div>
      

            <div class="btnLog">
              <q-btn @click="create" class="glow-on-hover"
                   color="teal">
                <q-icon left size="3em" name="double_arrow"/>
                <div>Play!</div>
              </q-btn>
            </div>

    
</template>

<script>
import { api } from 'boot/axios';
import { defineComponent, ref, onMounted} from "vue";
import { useRouter } from 'vue-router';



const BASE_URL = 'http://andro.us-3.evennode.com/explorers';

export default defineComponent({
  setup(){
    const explorers = ref([]);
   
      const username = ref('');
      const email = ref('');
      const password = ref('');
      const router = useRouter();



  async function create(){

    try{

        const response = await api.post(BASE_URL, {
        username:username.value,
        email:email.value,
        password:password.value
      });
      
      if(response.status === 200)
      {
        explorers.value = response.data;
        sessionStorage.setItem('Href', explorers.value.href);

        router.push("/main");
      }

      }catch(err)
      {
          console.log("erreur");
      }

  }

  

    onMounted(async () =>{
     
     
    });


    return{
      explorers,
      username,
      email,
      password,
      isPwd: ref(true),
      create,

    }
  }
});
</script>

<style>
.user{
 background-color: white;
 position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
