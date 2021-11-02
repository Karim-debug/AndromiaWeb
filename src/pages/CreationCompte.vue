<template>
  <q-page class="flex flex-center">
   

<h1>Création Compte</h1>

  <div class="col-md-12 text-center">
              <q-btn @click="$router.replace('/')"
                  icon-right="home" color="teal">
                <q-icon left size="3em" name="person" />
                <div>Retour Connexion</div>
              </q-btn>
          </div>

   
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageCreationCompte'
})
</script>
