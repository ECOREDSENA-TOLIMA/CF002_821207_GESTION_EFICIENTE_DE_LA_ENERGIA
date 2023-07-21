<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El sistema eléctrico está basado en unidades fundamentales y unidades complementarias. Todas las mediciones pueden ser expresadas como alguna combinación de unidades fundamentales y complementarias. La unidad eléctrica fundamental, el ampere, es la unidad utilizada para medir la corriente eléctrica. La corriente se abrevia con la letra I (por intensidad) y utiliza el símbolo A (por ampere). El ampere es único en el sentido de que utiliza en su definición a la unidad fundamental de tiempo (t) (el segundo). Todas las demás unidades eléctricas y magnéticas (tales como voltaje, potencia y flujo magnético) utilizan varias combinaciones de unidades fundamentales en sus definiciones y se llaman unidades derivadas. 
    p.mb-5 En el siguiente mapa conceptual se establece la ruta de aprendizaje de éste interesante tema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
