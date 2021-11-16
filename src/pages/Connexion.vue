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

                <q-input class="input" filled label="Email">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input> 
      </div>

      <div class="password col-md-12">
          <q-input class="input" filled label="Password">
              <template v-slot:prepend>
                <q-icon name="key" />
              </template>
          </q-input>
  
      </div>

           <div class="btnLog col-md-12">
              <q-btn class="glow-on-hover" @click="$router.replace('/main')">
                <q-icon left size="3em" name="login" />
                <div>LogIn</div>
              </q-btn>
          </div>


    </template>




<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageConnexion'
})
</script>





<style>







</style>
