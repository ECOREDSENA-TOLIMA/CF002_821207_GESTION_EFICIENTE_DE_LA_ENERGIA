<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.tarjeta.tarjeta--azul.justify-content-center 
      .col-md-6.col-12.p-4(data-aos="fade-right")
        h5 ¡Bienvenidos al componente, Principios de circuitos eléctricos!
        p.mb-0 #[i ¿Alguna vez ha pensando en qué modo utiliza la electricidad?]
        p La electricidad es la más flexible y versátil de todas las formas de energía existentes. Son numerosas las aplicaciones tanto domésticas como industriales de la electricidad.
        p En el hogar, por ejemplo, la electricidad proporciona energía y comodidad en la refrigeración, la cocina, el televisor, entre muchos otros. Es la fuente que proporciona luz para las lámparas, calor para la calefacción y energía para los aparatos de TV y radio, solo por nombrar algunos. Puede hacer que se encienda cualquier dispositivo o aparato eléctrico tan solo con oprimir un botón. Cuando presiona el mismo, ¿sabe por qué se encienden los dispositivos?, ¿Cómo funciona el mismo? Para que funcionen se necesita una trayectoria o un "circuito eléctrico". 
        p.mb-0 En esta unidad se presenta el funcionamiento de un circuito eléctrico, sus configuraciones básicas y las leyes fundamentales que los rigen.
      .col-md-6.col-12.p-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro.png', alt='')
      .col-12.col-md-10.col-lg-8(data-aos="fade-down")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente enlace encuentra un video introductorio que lo guiara en el inicio de este tema.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ko0jyyBydR8" target="_blank")
                    span Ver video
                    i.fas.fa-video


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
