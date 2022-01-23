<template>
  <div class="bg-red-300 text-black-600 font-mono text-3xl font-bold">Chatbot</div>
</template>

<script>
export default {
  name: 'Change', // name:value = key:vale
  components: {
  },
  data () { // Método
    return { // array
      pass: '',
      pass2: '',
      tokenb: ''
    }
  },
  methods: // Property
  {
    // Simulando la vista de ingresar contraseña
    Changeview(){ // Ingresa una ves que fue positiva la respuesta del backend
      console.log('padh', this.$route.path) // Muestra la ruta
      console.log('Parametro', this.$route.params) // Muestra lo que sigue después de la ruta
      // this.tokenb=this.$route.params.token;
    }
  }
}
</script>
