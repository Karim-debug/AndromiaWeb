<template>

<div class="template q-pa-md">

    <div class="row">
      <div class="connexion col-md-6 col-sm-6 col-xs-6 fixed-left">
        
         <div class="row">
            <div class="col-md-12">
              <h2><b>Andromia</b></h2>
            </div>

            <div class="col-md-12 offset-md-6">
              <h4>Connexion</h4>
            </div>


      
            <div class="col-md-12 offset-md-4">

                <q-input class="input" filled label="Email">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>

            </div>

            <br>

            <div class="pass col-md-12 offset-md-4">
                  <q-input class="input" filled label="Password">
                  <template v-slot:prepend>
                    <q-icon name="key" />
                  </template>
                </q-input>
            </div>
         </div>
        
      </div>


      <div class="creationCompte  col-md-6 col-sm-6 col-xs-6 vertical-right fixed-right">
        
        <div class="row">

          <div class="creationCompteText col-md-12 text-center">
              <h5>Pas de compte?<br>
              Crée votre compte dès maintenant!</h5>
          </div>

         

           <div class="col-md-12 text-center">
              <q-btn color="teal">
                <q-icon left size="3em" name="person" />
                <div>Crée Compte!</div>
              </q-btn>
          </div>


        </div>
        
      </div>

    </div>

</div>
 

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageConnexion'
})
</script>

<style>

.creationCompteText{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.connexion{
  background: white;
  padding: 3em;
}

.template{
  margin: 6em;

}

.input{
  width: 30em;
}

.creationCompte{
  background: #f3c19d;
  padding: 15em;
  
}

</style>
