<template>

  <q-header elevated>
      <q-toolbar class="toolBar">

        <q-img class="logo" src="images/Elements/token.png"/>
   

        <q-toolbar-title class="title">
         ANDROMIA <br>
        The Ultimate Exploration Game!
        </q-toolbar-title>
       
          <div class="col-md-3 text-center">
              <q-btn class="glow-on-hover" @click="$router.replace('/creationCompte')">
                <q-icon left size="3em" name="person" />
                <div>Create Account!</div>
              </q-btn>
          </div>

      </q-toolbar>
  </q-header>

  

       <q-img  src="images/Explorations/exploring1.png"/>

      <div class="subTitle">
      Welcome To Andromia's<br> 
       Online Gaming Site!
      </div>




      <div class="sign col-md-12">
        <p>Sign In</p>
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

           <div class="btnLog col-md-12">
              <q-btn @click="log" class="glow-on-hover">
                <q-icon left size="3em" name="login" />
                <div>LogIn</div>
              </q-btn>
          </div>


    </template>



<script>
import { api } from 'boot/axios';
import { defineComponent, ref, onMounted} from "vue";
import { useRouter } from 'vue-router';



const BASE_URL = 'http://andro.us-3.evennode.com/explorers/login';

export default defineComponent({
  setup(){
    const explorers = ref({});
   
      const email = ref('');
      const password = ref('');
      const router = useRouter();



  async function log(){

    try{

        const response = await api.post(BASE_URL, {
        email:email.value,
        password:password.value
      });
      
      if(response.status === 201)
      {
        explorers.value = response.data;
        sessionStorage.setItem('Href', explorers.value.explorer.href);
        console.log(explorers.value);
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
      email,
      password,
      isPwd: ref(true),
      log,

    }
  }
});

</script>

