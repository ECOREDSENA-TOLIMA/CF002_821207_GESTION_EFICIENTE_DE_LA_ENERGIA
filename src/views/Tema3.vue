<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Circuitos trifásicos

    p.mb-5 Es un sistema compuesto por una fuente de alimentación, como su nombre lo indica trifásica, además da cuenta de las líneas de alimentación y de una o varias cargas. Ahora, se profundizará en el tema: 

    .row.mb-5
      .col-lg-4.mb-5.mb-lg-0.d-flex
        .px-4.py-5(style="background-color: #E4EAF0").rounded
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 9.] #[i Generador trifásico]
          figure.mb-5
            img(src="@/assets/curso/tema3-imagen29.svg")
            figcaption Fuente: Repositorio SENA.
          p.mb-0 La mayor parte de la energía se distribuye en la forma de CA trifásica. En este caso, básicamente se tiene que, en vez de una sola bobina rotando dentro de un generador, existen tres bobinas, espaciadas entre sí 120 grados, como se puede ver en la imagen.

      .col-lg-4.mb-5.mb-lg-0.d-flex
        .px-4.py-5(style="background-color: #F3F5F8").rounded
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 10.] #[i Señal trifásica]
          figure.mb-5
            img(src="@/assets/curso/tema3-imagen30.svg")
            figcaption Fuente: Repositorio SENA.
          p.mb-0 Mientras las bobinas giran dentro del campo magnético se envía energía por tres líneas. Se originan, así, tres ondas sinusoidales de corriente y de voltaje, las cuales tienen entre sí una diferencia de fase de 120 grados. Cada onda sinusoidal representa el voltaje o la corriente de una de las fases.
      .col-lg-4.d-flex
        .px-4.py-5(style="background-color: #E4EAF0").rounded
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 11.] #[i Líneas trifásicas]
          figure.mb-5
            img(src="@/assets/curso/tema3-imagen31.svg")
            figcaption Fuente: Repositorio SENA.
          p.mb-0 La electricidad trifásica energiza las grandes cargas industriales con más eficiencia, que la electricidad de una sola fase. Cuando se necesite electricidad de una sola fase, esta se encuentra disponible entre dos fases cualesquiera o, en algunos sistemas, entre una de las fases y tierra.

    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.px-5.py-4.mb-4
          p.mb-0 Todo equipo de energía eléctrica debe conectarse en forma correcta para evitar riesgos y daños. La energía trifásica conlleva más problemas potenciales, pues sencillamente hay más alambres que conectar: tres conductores de energía y algunas veces un conductor neutro conectado a tierra. Los transformadores trifásicos producirán diferentes voltajes de salida, dependiendo de la manera como estén conectados. Los motores trifásicos funcionan hacia atrás, si se invierte la secuencia de las fases y la inversión de la polaridad del voltaje puede ocasionar serios daños. 

    p.mb-5 Para evitar estos problemas es necesario tener gran familiaridad con los circuitos trifásicos de suministro y, con la relación existente entre el voltaje y la corriente en ellos.
      br
      br
      | El sistema trifásico presenta una serie de ventajas como son la economía de sus líneas de transporte de energía (hilos de menor sección que en una línea monofásica equivalente) y de los transformadores utilizados, así como su elevado rendimiento de los receptores, especialmente motores, a los que la línea trifásica alimenta con potencia constante.

    .row.mb-5
      .col-lg-6.mb-5.mb-lg-0.d-flex
        .box-light-25.color-acento-botones.p-5
          .h2.mb-5 Código de colores
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | El <strong>alambre neutro</strong> conectado a tierra siempre es <strong>blanco o gris.</strong>
            li 
              i.fas.fa-atom
              | Los alambres energizados generalmente son <strong>blancos o rojos.</strong>
            li
              i.fas.fa-atom
              | Si se usa algún alambre para conectar a tierra es verde o sin aislar.
      .col-lg-6.d-lex
        figure
          img(src="@/assets/curso/tema3-imagen1.png")

    h3.titulo-tercero Magnitudes de fase

    p.mb-5 Se denominan tensiones y corrientes de fase de un sistema trifásico de tres elementos, de tres generadores o tres cargas, a las tensiones que hay entre sus extremos y a las corrientes que circulan por cada uno de los tres elementos, respectivamente. Las magnitudes de fase dependen de la forma en que estén conectados los tres elementos de un sistema trifásico, estrella o triángulo, como se verá en los apartados siguientes. 

    figure
      img(src="@/assets/curso/tema3-imagen2.png")

    p.mb-5.mt-4 Los valores eficaces de las tensiones y de las corrientes de fase en un sistema equilibrado se van a denominar VF e IF, respectivamente. En el caso de un sistema trifásico de impedancias, dado que estas magnitudes son las tensiones entre sus extremos y las corrientes que circulan por ellas, se guarda la Ley de Ohm entre las tensiones y corrientes de fase. Luego, trabajando con los módulos de estas magnitudes se obtiene que en un sistema equilibrado:

    .row.justify-content-center(data-aos="fade-in")
      .col-lg-auto
        .contenedor-bordes-azules.mb-5.py-4.px-5.text-center
          figure
            img(src="@/assets/curso/tema3-imagen3.jpg")
    
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.px-5.py-4.mb-4
          p.mb-0 Además, entre la tensión y la corriente de una fase existe el desfase, idéntico al argumento de la impedancia (Z), como sucede en los circuitos monofásicos. Evidentemente, en circuitos equilibrados este ángulo es el mismo en las tres fases.
    
    Separador

    #t_3_1.titulo-segundo(data-aos="fade-in")
      h2 3.1  Conexión "Y"

    p.mb-5 Para poder comprender una conexión “Y” se debe comprender lo indicado a continuación:

    .tarjeta.tarjeta--gris.px-5.py-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="").justify-content-center.gx-5
          .offset-md-1.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen22.svg', alt='Texto que describa la imagen')
              figcaption
                i Conexión trifásica Y
          .col-md-6
            p.mb-0 Se muestran tres impedancias iguales conectadas formando una estrella equilibrada. Ambas figuras son equivalentes y son dos formas de representar la misma conexión.
        
        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen23.svg', alt='Texto que describa la imagen')
              figcaption
                i Conexión de tres impedancias formando una estrella equilibrada
          .col-md-6
            p.mb-0 El neutro de la estrella puede estar unido al conductor neutro de la red trifásica o estar aislado. En ambos casos el comportamiento de una estrella equilibrada es el mismo.
        
        .row(titulo="").justify-content-center.align-items-center.gx-5
          .offset-md-2.col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen4.svg', alt='Texto que describa la imagen')
              figcaption
                i Tensiones y corrientes en una estrella equilibrada.
        
          .col-md-5
            p Como se puede apreciar en la imagen, cada fase de la estrella está sometida a la tensión fase-neutro y está recorrida por la corriente de línea correspondiente.

        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            p.mb-0 Estas son, pues, las magnitudes de fase en la estrella y, en consecuencia, se cumple que:
          .col-md-6.mb-3
            figure
              img(src='@/assets/curso/tema3-imagen24.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p.mb-0 Además, aplicando la Ley de Ohm, como en la relación de VF, se deduce que:
          .col-md-6
            figure
              img(src='@/assets/curso/tema3-imagen25.jpg', alt='Texto que describa la imagen')


        .row(titulo="").justify-content-center.gx-5
          .offset-md-1.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen32.svg', alt='Texto que describa la imagen')
              figcaption
                i Diagrama fasorial de una estrella equilibrada
          .col-md-6
            p.mb-0 Si las impedancias tienen al ángulo como argumento (Z), las corrientes de fase están desfasadas el mismo ángulo con respecto a sus respectivas tensiones de fase, de lo cual se obtiene el diagrama fasorial, en esta imagen se supone que es positivo (inductivo):
        .row(titulo="").justify-content-center.gx-5
          .col-12.mb-4
            p.mb-0 Si se mantiene, como hasta ahora, a <strong>VST</strong> como referencia del diagrama fasorial, como sucede en la imagen las corrientes de fase iguales a las corrientes de línea son:
          
          .col-md-8.mb-4
            figure
              img(src='@/assets/curso/tema3-imagen27.jpg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p.mb-0 Y, evidentemente, en una estrella equilibrada la corriente en el neutro es nula:
          .col-md-3
            figure
              img(src='@/assets/curso/tema3-imagen28.jpg', alt='Texto que describa la imagen')

    Separador

    #t_3_2.titulo-segundo(data-aos="fade-in")
      h2 3.2  Conexión "Δ"

    p.mb-4 Para poder comprender una conexión “Δ” se debe comprender lo indicado a continuación: 

    .tarjeta.tarjeta--gris.px-5.py-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="").justify-content-center.gx-5
          .offset-md-2.col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen5.svg', alt='Texto que describa la imagen')
              figcaption
                i Conexión trifásica Delta
        
          .col-md-5
            p Además de la conexión estrella estudiada hasta ahora, en la que cada elemento de un sistema trifásico se conecta entre una fase y el neutro, existe también la conexión triángulo, que ya apareció en el estudio de la transformación de Kennelly en los circuitos monofásicos. En la conexión triángulo cada elemento de un sistema trifásico se conecta entre dos conductores de fase, por lo que en esta conexión no se utiliza el conductor neutro. 
        
        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen21.svg', alt='Texto que describa la imagen')
              figcaption
                i Conexión de tres impedancias formando un triángulo equilibrado 
          .col-md-6
            p.mb-0 Así pues, en el caso de un sistema de tres impedancias la conexión triángulo se realiza como se muestra en la imagen. Ambas figuras son equivalentes y son dos formas de representar la misma conexión que, al tratarse de impedancias iguales, se trata de un triángulo equilibrado. 

        
        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen6.svg', alt='Texto que describa la imagen')
              figcaption
                i Sistema trifásico equilibrado con los generadores conectados en estrella y las cargas en triángulo.
        
          .col-md-4
            p En la imagen se muestra una instalación trifásica donde ahora las impedancias se han conectado en triángulo, mientras que se ha mantenido la conexión estrella para los generadores.

        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen7.svg', alt='Texto que describa la imagen')
              figcaption
                i Tensiones y corrientes de fase en un triángulo equilibrado
        
          .col-md-4
            p En la imagen se muestran las tensiones y corrientes para un triángulo de impedancias equilibrado. Se aprecia que las tensiones en bornes de las impedancias (tensiones de fase) son iguales a las tensiones fase-fase o tensiones de línea, pero las corrientes de fase, que son las que circulan por las impedancias (iRS, iST e iTR) son diferentes de las corrientes de línea (iR, iS e iT).

        .row(titulo="").justify-content-center.gx-5
          .col-12
            p.mb-5 En consecuencia, de momento se puede afirmar que los valores eficaces VF e IF de las tensiones y de las corrientes de fase, respectivamente, de un triángulo equilibrado cumplen lo siguiente:
          .col-auto
            .contenedor-bordes-azules.mb-5.py-4.px-5.text-center
              figure
                img(src="@/assets/curso/tema3-imagen8.jpg")
        
        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            p.mb-0 Si las impedancias tienen al ángulo como argumento (Z), debido a la Ley de Ohm las corrientes de fase están desfasadas el mismo ángulo con respecto a sus respectivas tensiones de fase, de lo cual se obtiene el diagrama fasorial de la imagen, en esta imagen se supone que el ángulo es positivo (inductivo). Luego, aplicando la Ley de Ohm a las magnitudes de fase y trabajando, como hasta ahora, con VST como referencia se obtiene que:
        
          .col-md-6
              figure
                img(src="@/assets/curso/tema3-imagen9.jpg")
        
        .row(titulo="").justify-content-center.gx-5
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen10.svg', alt='Texto que describa la imagen')
              figcaption
                i Corrientes de fase y de línea en un triángulo equilibrado (se supone que es positivo)
        
          .col-md-6
            .row
              .col-12.mb-4
                p Si se aplica el primer lema de Kirchhoff en nudo R del triángulo se obtiene que:
              .col-md-7
                .contenedor-bordes-azules.mb-5.py-3.px-3.text-center
                  figure
                    img(src="@/assets/curso/tema3-imagen11.jpg")
              .col-12
                p.mb-4 Luego, operando de igual manera en los nudos S y T del triángulo se deducen las relaciones que permiten expresar las corrientes de línea (iR, iS e iT) en función de las corrientes de fase (iRS, iST e iTR):
              .col-md-10
                .contenedor-bordes-azules.mb-5.py-3.px-3.text-center
                  figure
                    img(src="@/assets/curso/tema3-imagen12.jpg")
        
        .row(titulo="").justify-content-center.gx-5
          .col-md-7.mb-4.mb-md-0
            p.mb-0 De la misma imagen anterior se muestran gráficamente las relaciones (IR, IS e IT). Si se ve, por ejemplo, en la fase R se aprecia que los módulos IF de iRS e iST e IL de iR verifican lo siguiente:
            
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen13.jpg', alt='Texto que describa la imagen')
          
          .col-12.mb-4
            p.mb-0 Luego, se pueden completar las relaciones ( VF = VL , IF ≠ IL ) y se escribe: 
            
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen14.jpg', alt='Texto que describa la imagen')
          
          .col-md-8.mb-4.mb-md-0
            p.mb-0 Además, también se aprecia que las corrientes de línea (iR, iS e iT) están retrasadas 30° con respecto a sus correspondientes corrientes de fase (iRS, iST e iTR). Si se mantiene a VST como referencia, de las relaciones (IRS, IST e ITR) se obtienen las corrientes de línea, tal como se refleja.

        .row(titulo="").justify-content-center.gx-5
          .col-12.mb-4
            figure
              img(src='@/assets/curso/tema3-imagen15.jpg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen16.svg', alt='Texto que describa la imagen')

          .col-md-6
            p.mb-0 Si bien en un triángulo no se utiliza el neutro, la red a la que está conectado sí puede tener neutro, bien porque los generadores están conectados como una de las imagenes anteriores y que se colocan a continuación, o porque exista otra carga equilibrada en estrella en paralelo con el triángulo. 
              br
              br
              | Se sabe entonces que las tensiones simples o fase-neutro tienen un módulo √3 menor que las tensiones de línea y están retrasadas 30° con respecto a estas.
    
        .row(titulo="").justify-content-center.gx-5
          .col-12.mb-4
            p.mb-0 Así, añadiendo las tensiones simples al diagrama visto y mostrado a continuación, se obtiene el representado en el diagrama fasorial de abajo.
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3-imagen17.svg', alt='Texto que describa la imagen')
              figcaption 
                i Diagrama fasorial de un triángulo equilibrado (se supone que es positivo).
          .col-md-8
            figure.mb-5
              img(src='@/assets/curso/tema3-imagen18.jpg', alt='Texto que describa la imagen')
            p.mb-0 En este diagrama fasorial se observa que las tensiones de línea, que en un triángulo son también las tensiones fase y las corrientes de fase forman el ángulo. Además, las tensiones simples están retrasadas 30° con respecto a las de línea y también sucede que las corrientes de línea se retrasan 30° con respecto a las corrientes de fase. De ahí, se observa en la imagen de la izquierda, que el ángulo entre una tensión fase-neutro y la corriente de línea correspondiente es también el ángulo.
              br
              br
              | En un triángulo equilibrado el ángulo es también el desfase entre una corriente de línea y la tensión fase-neutro correspondiente, al igual que sucede en la conexión estrella equilibrada (se supone que es positivo).
    
    p.mb-4 Luego, se deduce que hay una regla general, válida tanto para la conexión triángulo como para la conexión estrella, que dice que el desfase entre una tensión simple o fase-neutro y su correspondiente corriente de línea es el ángulo. Por esta razón, si se examina la relación (IR, IS e IT) obtenida para la conexión estrella, y la relación (IR, IS e IT) obtenida para la conexión triángulo, se observa que en ambas los argumentos de las corrientes de línea son los mismos.

    Separador 

    #t_3_3.titulo-segundo(data-aos="fade-in")
      h2 3.3  Equivalente monofásico
      
    p.mb-5 En ingeniería eléctrica un sistema monofásico es un sistema de producción, distribución y consumo de energía eléctrica formado por una única corriente alterna o fase y por lo tanto, todo el voltaje varía de la misma forma. La distribución monofásica de la electricidad se suele usar cuando las cargas son principalmente de iluminación y de calefacción, y para pequeños motores eléctricos. 

    .row
      .col-md-6.mb-4.mb-md-0.d-flex
        .box-light-25.color-acento-botones.p-5
          .h3 Equivalente monofásico
          p.mb-4 Un suministro monofásico conectado a un motor eléctrico de corriente alterna no producirá un campo magnético giratorio, por lo que los motores monofásicos necesitan circuitos adicionales para su arranque, y son poco usuales para potencias por encima de los 10 kW.
            br
            br
            | El voltaje y la frecuencia de esta corriente dependen del país o región, siendo 115 y 230 los valores más extendidos para el voltaje (siendo dominante el de 230, debido a la recarga de vehículos eléctricos) y 50 o 60 hercios para la frecuencia.
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 12.] #[i Corriente alterna monofásica]
          figure.mb-2
            img(src='@/assets/curso/tema3-imagen33.svg', alt='Texto que describa la imagen')
          p.mb-4 La corriente circula en un sentido u otro 50 veces por seg. y se denomina monofásica por que gira en un solo conductor o bobina
      .col-md-6.d-flex
        .box-light-25.color-primario.p-5
          .h3 Neutro y tierra
          p.mb-4 La corriente alterna que llega a los hogares es monofásica. En corriente monofásica existe una única señal de corriente, que se transmite por el cable de fase (R, color marrón) y retorna por el cable de neutro que cierra el circuito (N, color azul). El cable de tierra es siempre verde y amarillo.
            br
            br
            | El sistema monofásico usa una tensión de 230V entre fase y neutro. El neutro en realidad es un cable de potencial cero, esto es, que no tiene voltaje. Se debe recordar que el cable a tierra es un conductor, el cual está destinado a conducir la descarga a tierra de algún artefacto en mal estado o mal manejo de estos por parte del usuario.
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 13.] #[i Neutro y tierra]
          figure.mb-5
            img(src='@/assets/curso/tema3-imagen34.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
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
