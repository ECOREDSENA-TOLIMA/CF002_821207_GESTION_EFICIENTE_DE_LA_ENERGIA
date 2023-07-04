<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Potencia eléctrica

    p.mb-5(data-aos="fade-in") La potencia o energía eléctrica que se mide en vatios (watts) es la velocidad con que la energía eléctrica es convertida en otra forma de energía.
      br
      | En un molino de agua, entre más agua fluya, mayor será la velocidad de las vueltas del molino o entre mayor sea el torque (momento de torsión) ejercido por su eje, mayor será el trabajo que realiza en un tiempo determinado.  Igualmente, entre mayor sea la potencia o energía eléctrica suministrada a un motor, medida en vatios, mayor será el trabajo que el motor realice en un determinado tiempo.

    figure.mb-5(data-aos="fade-in")
      img(src="@/assets/curso/tema1-imagen36.png")

    p.mb-5(data-aos="fade-in") La potencia (P) o energía eléctrica, o sea, la tasa a la cual la energía eléctrica se convierte en otra forma de energía es, simplemente, la corriente (I) multiplicada por el voltaje (V). Un voltaje de un voltio, al impulsar una corriente de un amperio, produce un vatio de potencia.

    .row.justify-content-center.mb-2
      .col-auto
        figure(data-aos="fade-in")
          img(src="@/assets/curso/tema2-imagen11.svg")

    Separador

    #t_2_1.titulo-segundo(data-aos="fade-in")
      h2 2.1  Potencia activa

    .mb-5.px-4.py-3.texto-color-offset-top-left
      p.mb-0 Cuando se conecta un equipo o consumidor eléctrico a un circuito alimentado por una fuente de fuerza electromotriz (F.E.M) como puede ser una batería, la energía eléctrica que suministra fluye por el conductor, permitiendo que, por ejemplo, una bombilla de alumbrado transforme esa energía en luz y calor o un motor pueda mover una maquinaria, esta energía consumida se mide kWh. De acuerdo con la definición de la física, “la energía ni se crea ni se destruye, se transforma”, en el caso de la energía eléctrica, esa transformación se manifiesta en la obtención de luz, calor, frío, movimiento o en otro trabajo útil que realice cualquier dispositivo conectado a un circuito eléctrico cerrado.
        br
        br
        | Cuando se tiene una carga resistiva conectada en un circuito eléctrico se le llama carga activa, y en este caso, cuando se conoce el valor de la tensión eléctrica y la corriente que circula por la resistencia. También se llama potencia media, real o verdadera, debido a los dispositivos resistivos, su unidad de medida es el vatio (W) y se calcula como:
    
    .row.justify-content-center.mb-5(data-aos="slide-up" data-aos-duration="900")
      .col-lg-7
        .box-light-25.color-blue.p-5
          .h3.mb-2 <strong>P = V*I*Cos(φ)</strong>
          p.mb-4
            | Donde:
          .row.align-items-center.mb-4
            .col-auto
              .contenedor-letras
                | P
            .col
              | Potencia (W)
          .row.align-items-center.mb-4
            .col-auto
              .contenedor-letras
                | V
            .col
              | Voltaje (V)
          .row.align-items-center.mb-4
            .col-auto
              .contenedor-letras(style="padding: 0px 10px")
                | I
            .col
              | Intensidad de corriente (A)
          .row.align-items-center.mb-4
            .col-auto
              .contenedor-letras
                | Φ
            .col
              | Ángulo Phi: es el ángulo de desfase entre la tensión y la intensidad.
          p.mb-0 Siendo φ:
            br
            strong Φ = arctang(X/R)
            br
            br
            | Donde X es la reactancia y R es la resistencia de la carga conectada, siendo la impedancia:
            br
            strong Z = R + jX
            br
            br
            | También puede obtenerse como:
            br
            strong P = R*I² = V²/R 

    p.mb-5(data-aos="fade-in") En las cargas activas como la resistencia, lámparas de iluminación incandescentes o halógenas, calentadores eléctricos con resistencias de alambre nicromo (NiCr), el factor de potencia es igual a "1", que es el valor ideal de un circuito eléctrico y por eso en la fórmula normalmente no se ve, ya que toda cantidad multiplicada por uno queda igual.
    
    Separador

    #t_2_2.titulo-segundo(data-aos="fade-in")
      h2 2.2  Potencia reactiva

    p.mb-5(data-aos="fade-in") Para calcular la potencia en determinados equipos que trabajan con corriente alterna es necesario tener en cuenta el valor del factor de potencia que poseen. Es el caso de los equipos que trabajan con carga reactiva, que son consumidores de energía eléctrica que utilizan bobinas de alambre de cobre, por ejemplo, los motores. Estos equipos se llaman reactivos o inductivos, ya que tienen una inductancia en vez de una resistencia.

    .row.justify-content-center.mb-5(data-aos="fade-in")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0
                strong Los equipos que tienen cargas inductivas, como el caso de los motores eléctricos, tienen un factor de potencia inferior a "1", en general entre 0,8 y 0,98, por lo que la eficiencia de trabajo es menor y producen un gasto de energía mayor.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Por eso las compañías de electricidad multan a las empresas que tienen un factor de potencia bajo. Las empresas para evitar esas multas utilizan cargas capacitivas, que compensan a las cargas inductivas; se usan capacitores que aumentan el factor de potencia, tratando de llevarlo a valores cercanos a "1". También en las chapas de los motores está indicado el factor de potencia, además de la tensión de alimentación, la frecuencia, la corriente nominal, la potencia y la velocidad nominal.
        .row
          .col-lg-12.mb-5.mb-lg-0
            p.mb-0 En resumen, potencia reactiva (Q) es la potencia que necesitan las bobinas y los condensadores para generar campos magnéticos o eléctricos, que no se transforma en trabajo efectivo, sino que fluctúa por la red entre el generador y los receptores, su unidad de medida es el voltamperio reactivo (VAr). Para calcular la potencia de un equipo que trabaja con corriente alterna monofásica se tiene:
          .row.justify-content-center.align-items-center
            .col-lg-4
              .contenedor-bordes-azules.p-4
                p.mb-0 
                  strong Q = V*I*Sen(φ)
                  br
                  br
                  | También puede obtenerse como:
                  br
                  br
                  strong Q = X*I² = V²/X
    p.mb-5(data-aos="fade-in") La potencia reactiva es positiva si el receptor es inductivo y negativa si el receptor es capacitivo, coincidiendo en signo con la parte imaginaria de la impedancia.

    Separador

    #t_2_3.titulo-segundo(data-aos="fade-in")
      h2 2.3  Potencia aparente

    .row.mb-5
      .col-lg-5.mb-5.mb-lg-0.d-flex(data-aos="slide-left" data-aos-duration="900")
        .cajon.color-acento-botones.px-5.py-4.mb-4
          p.mb-0 Es potencia compleja de un circuito eléctrico de corriente alterna, cuya magnitud se conoce como potencia aparente y se identifica con la letra S; es la suma vectorial de la potencia que disipa dicho circuito y se transforma en calor o trabajo, conocida como potencia promedio, activa o real, que se designa con la letra P y se mide en vatios <strong>(W)</strong> y la potencia utilizada para la formación de los campos eléctrico y magnético de sus componentes, que fluctúa entre estos componentes y la fuente de energía, conocida como potencia reactiva, que se identifica con la letra Q y se mide en voltamperios reactivos (VAr). Como se muestra en la figura 2.
      .col-lg-7.d-flex(data-aos="slide-right" data-aos-duration="900")
        .box-light-15.color-primario.p-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            span Triángulo de potencias
          figure
            img(src="@/assets/curso/tema2-imagen2.svg")

    p.mb-5(data-aos="fade-in") Esto significa que la potencia aparente representa la potencia total desarrollada en un circuito con impedancia Z, su unidad de medida es el voltamperio (VA) y se calcula como:
    
    .row.justify-content-center(data-aos="fade-in")
      .col-lg-6
        .contenedor-bordes-azules.mb-5.py-4.px-5.text-center
          p.mb-0 
            strong.h3.mb-0 S = V*I 
            br
            br
            | Al ser la suma vectorial de P y Q, que son los catetos de un triángulo rectángulo en el que S es la hipotenusa, según la figura, también puede calcularse como:
            br
            br
            strong.h2.mb-0 S = √(P² + Q²)

    p.mb-5(data-aos="fade-in") Estas potencias se representan en el denominado triángulo de potencias que se ve en la figura anterior; para comprender mejor dicho triángulo es conveniente partir del triángulo de impedancias de un circuito pasivo en serie, tomando como origen de fases la intensidad y multiplicando por la intensidad los tres lados del triángulo, obteniendo el triángulo de tensiones. Si se vuelve a multiplicar los tres lados del triángulo de tensiones por la intensidad se obtiene el triángulo de potencias.
    
    Separador

    #t_2_4.titulo-segundo(data-aos="fade-in")
      h2 2.4  Factor de potencia

    .row.mb-5(data-aos="fade-in")
      .col-lg-4.mb-5.mb-lg-0
        p.mb-0
          strong Es la razón entre la potencia real o activa y la potencia aparente, también es la razón entre la parte resistiva de la impedancia y la impedancia total.
      .col-lg-8
        p.mb-0 Es un número adimensional que se obtiene al dividir la potencia activa entre la aparente. Un valor igual a la unidad indica que la tensión y la intensidad están en fase y, por tanto, no hay energía reactiva; su valor máximo es uno y cuanto más cerca esté de la unidad, más trabajo se puede producir para una determinada tensión e intensidad.
    
      .row.justify-content-center(data-aos="fade-in")
        .col-auto
          .contenedor-bordes-azules.mb-5.py-4.px-5.text-center
            figure
              img(src="@/assets/curso/tema2-imagen3.svg")

        p(data-aos="fade-in") Cuando la impedancia de la carga no es puramente resistiva el factor de potencia es igual a 1, y hay una corriente fuera de fase en las líneas que no funciona. Esta corriente extra aumenta las pérdidas en la línea, por ello, se necesitan generadores y conductores más grandes para producirla y enviarla. Las compañías eléctricas a veces imponen un recargo por la corriente fuera de fase y los usuarios de la energía tratan de mantener el factor de potencia lo más cercano a 1, en lo posible.
    
    .row.justify-content-center(data-aos="fade-in")
      .col-lg-8.mb-5.mb-lg-0
        p.mb-0 El factor de potencia se puede leer directamente con un medidor de factor de potencia, también se puede calcular con las lecturas de los medidores de voltaje, corriente y energía, por ejemplo, si el medidor de vatios mostró que un motor consume 1920 vatios, pero el amperímetro y el voltímetro midieron 5 amperios a 480 voltios, el factor de potencia sería 0.8.
      .col-lg-4.px-lg-5
        .contenedor-bordes-azules.mb-5.py-4.px-5.text-center
          figure
            img(src="@/assets/curso/tema2-imagen4.svg")

    p.mb-5(data-aos="fade-in") La mayoría de las cargas reactivas en la industria son las bobinas, en las cuales la corriente va detrás del voltaje, con el fin de acercar más el factor de potencia se instalan capacitores de valor adecuado, en paralelo con los circuitos del motor; su reactancia capacitiva, en la que la corriente va adelante del voltaje, neutraliza la reactancia inductiva de las bobinas.
    
    Separador

    #t_2_5.titulo-segundo(data-aos="fade-in")
      h2 2.5  Facturas de energía eléctrica

    p.mb-5(data-aos="fade-in") En la parte frontal de la factura se puede encontrar los valores totales a pagar por servicio de energía, impuesto de alumbrado público, aseo y otras empresas; la suma de cada uno de estos valores se denomina valor por pagar. Es importante tener en cuenta que ese valor total a pagar no corresponde solamente al servicio de energía.
      br
      br
      | Los demás ítems que se relacionan son aseo, alumbrado público y otros, todos ellos son conceptos no relacionados con el servicio de energía que presta la empresa en su predio, pero que por expresa disposición legal debe ser cobrado por medio de la factura de energía.

    TabsA.color-acento-botones.mb-5(data-aos="fade-in")
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Impuesto de alumbrado público")
        .row.align-items-center
          .col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen6.svg")
          .col-lg-9
            p.mb-0
              strong Impuesto de alumbrado público
              br
              br
              | Es un impuesto cuyo recaudo se traslada al municipio donde se está brindando el servicio, la forma como se cobra y la tarifa monetaria es creada por el concejo municipal bajo acuerdos.
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Servicio de aseo")
        .row.align-items-center
          .col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen5.svg")
          .col-lg-9
            p.mb-0
              strong Servicio de aseo
              br
              br
              | Es un concepto que cobra la empresa designada para este contrato, correspondiente al servicio de barrido y recolección de basura de la ciudad.
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Otros conceptos")
        .row.align-items-center
          .col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen7.svg")
          .col-lg-9
            p.mb-0
              strong Otros conceptos
              br
              br
              | Pertenece a valores cobrados por empresas o son entidades con las cuales el usuario ha adquirido créditos y financiaciones de cobro de servicios retrasados, este recaudo es trasladado a cada entidad.
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Controlar el consumo de energía")
        .row
          .col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen8.svg")
          .col-lg-9
            p.mb-5
              strong Controlar el consumo de energía
              br
              br
              | Es muy normal que entre un mes y otro existan diferencias moderadas de consumos, ya sea porque el número de días facturados sea menor o mayor al del mes anterior, o porque no siempre se usa con la misma frecuencia los electrodomésticos en el hogar, si se encuentra que la diferencia en consumo ha sido significativa y no ha tenido cambios en el uso habitual de sus electrodomésticos, como se muestra en la siguiente figura.
            .titulo-sexto.color-acento-contenido
              h5 Figura 3
              span Modelo de factura de servicio de energía
            figure
              img(src="@/assets/curso/tema2-imagen9.jpeg")

    h3.titulo-tercero(data-aos="fade-in") Concepto de servicio de energía

    p.mb-5(data-aos="fade-in") Si el aumento significativo del valor de su factura corresponde al servicio de energía, al interior de la factura podrá encontrar la descripción de los valores facturados por este servicio. Normalmente el valor facturado por el servicio de energía puede aumentar por:

    .row.justify-content-center.mb-5(data-aos="slide-left" data-aos-duration="900")
      .col-12.col-lg-10
        .box-light-25.color-blue.p-5
          ul.lista-ul--color
            li 
              i.fas.fa-atom
              | Fugas internas de energía por deterioro de conductores, empalmes, interruptores, tomacorrientes, etc., situación que se debe corregir con un técnico electricista particular.
            li 
              i.fas.fa-atom
              | Uso de electrodomésticos que tienen altos consumos en el hogar por kilovatios/hora (kWh), a raíz de su uso frecuente.
            li 
              i.fas.fa-atom
              | Aumento en el costo del kWh.
            li 
              i.fas.fa-atom
              | Financiación solicitada por el usuario por el servicio de energía.
            li 
              i.fas.fa-atom
              | Financiación por cobro de medidores, mano de obra o normalización.
            li 
              i.fas.fa-atom
              | Cobro de reconexiones por haberse suspendido el servicio el mes anterior. 

    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="900")
      .col-12.col-lg-10
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2-imagen10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 <i>Tips</i> que permiten controlar los consumos de energía
                  p.text-small <i>Infografía.</i>
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Tips_Energia.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
