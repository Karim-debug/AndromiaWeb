<template>

  <q-header elevated>
      <q-toolbar class="toolBar">

        <q-img class="logo" src="images/Elements/token.png"/>

          <div class="title col-md-3 text-center">
            <h3>ANDROMIA</h3>
          </div>

      </q-toolbar>
  </q-header>

       <q-img class="imageBack" src="images/Backgrounds/back2.png"/>

      <div class="subTitle">
       <h1> Account Creation </h1>
      </div>

    <div class="user col-md-12">

                <q-input class="input" filled label="Username">
                  <template v-slot:prepend>
                    <q-icon name="portrait" />
                  </template>
                </q-input> 
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

      

            <div class="btnLog">
              <q-btn class="glow-on-hover" @click="$router.replace('/main')"
                   color="teal">
                <q-icon left size="3em" name="double_arrow"/>
                <div>Play!</div>
              </q-btn>
            </div>

    
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageCreationCompte'
})
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
