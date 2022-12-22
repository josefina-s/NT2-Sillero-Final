<template>

  <section class="src-components-conversor">
    <div class="jumbotron">
      <h2>Conversor de Temperatura</h2>
      <hr/>
      <span>
        <p>Ingrese una Temperatura °C: </p>
        <input type="number" v-model="temperatura">
      </span>
        <p>Conv. Temperatura °F: </p>
        <p :style="{ color: getColor }">{{ temperatura | fahrenheit }}</p>
        <br>
        <p>Conv. Temperatura °K:</p>
        <p :style="{ color: getColor }"> {{ temperatura | kelvin }}</p>
      <br>
      <br>
      <br>
      <h2>Respuestas</h2>
      <hr/>
      <p>1:C , 2:B, 3:C, 4:A, 5:C</p>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-conversor',
    props: [],
    mounted () {

    },
    data () {
      return {
        temperatura : null,
      }
    },
    methods: {

    },
    computed: {
      getColor() {
        let color = 'red'
        if((this.temperatura * 1) <= 0){
          color = 'blue'
        } if((this.temperatura * 1) > 0 && this.temperatura < 15) {
          color = 'fuchsia'
        }
        return color
      }, 
      
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: rgb(199, 199, 199);
  }

  hr {
    background-color: #2c3e50;
  }
</style>
