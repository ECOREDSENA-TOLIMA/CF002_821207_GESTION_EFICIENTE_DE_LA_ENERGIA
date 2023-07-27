<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.tarjeta.tarjeta--azul 
      .col-md-6.col-12.p-4(data-aos="fade-right")
        h5 ¡Bienvenidos al componente, Principios de circuitos eléctricos!
        p.mb-0 #[i ¿Alguna vez ha pensando en qué modo utiliza la electricidad?]
        p La electricidad es la más flexible y versátil de todas las formas de energía existentes. Son numerosas las aplicaciones tanto domésticas como industriales de la electricidad.
        p.mb-0 En el hogar, por ejemplo, la electricidad proporciona energía y comodidad en la refrigeración, la cocina, el televisor, entre muchos otros. Es la fuente que proporciona luz para las lámparas, calor para la calefacción y energía para los aparatos de TV y radio, solo por nombrar algunos. Puede hacer que se encienda cualquier dispositivo o aparato eléctrico tan solo con oprimir un botón. Cuando presiona el mismo, ¿sabe por qué se encienden los dispositivos?, ¿Cómo funciona el mismo? Para que funcionen se necesita una trayectoria o un "circuito eléctrico". 
      .col-md-6.col-12.p-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro.png', alt='')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
