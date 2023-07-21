<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Circuitos eléctricos

    figure.mb-5
    img(src="@/assets/curso/tema1-imagen1.png")
    
    p.mb-5.mt-5 Los circuitos son interconexiones de varios componentes eléctricos que permiten el flujo de la electricidad, cada uno se distingue según su configuración lográndose diferenciar entre circuitos en serie y paralelos o incluso el mixto.  A su vez, hay leyes e información que se debe conocer a la hora de entender cómo funcionan los mismos, los cuales se abordarán a continuación.

    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1  Circuitos en serie y paralelo

    p.mb-5 Como se observó un circuito eléctrico es la interconexión de dos o más componentes eléctricos; dichos componentes son básicamente los conductores por los cuales fluye la corriente, <strong>la fuente o generador y el receptor</strong> o elemento que actúa como resistencia. 
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-11.mb-lg-0
        .row
          .col-12.col-lg-6.mb-5.mb-lg-0.d-flex(data-aos="slide-left" data-aos-delay="800")
            div.box-light-25.color-primario.w-100.p-4
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 #[b Figura 1.] <i>Circuito eléctrico simple</i>
              figure
                img(src='@/assets/curso/tema1-imagen2.svg')
          .col-12.col-lg-6.mb-lg-0.mb-5.d-flex(data-aos="slide-right" data-aos-delay="800")
            div.box-light-25.color-primario.w-100.p-4
              .titulo-sexto.color-acento-contenido
                p.titulo.pb-0.mb-0 #[b Figura 2.] <i>Diagrama de un circuito eléctrico simple</i>
              figure
                img(src='@/assets/curso/tema1-imagen3.svg')

    p.mb-5 Para que exista una corriente eléctrica se requiere la conexión entre la fuente y la resistencia formando así un circuito cerrado, por ejemplo, una bombilla conectada a una pila forma un circuito cerrado. La corriente va desde el terminal negativo (-), pasa por la lámpara, llega al borde positivo (+), continúa su recorrido por dentro de la pila desde este terminal positivo (+) hasta el terminal negativo (-).
      br
      br
      | Mientras esta trayectoria no esté interrumpida se trata de un circuito cerrado y la corriente fluye. Si se interrumpe el camino en cualquier punto no hay flujo de corriente eléctrica y se trata de un circuito abierto. En este caso la corriente eléctrica es igual a cero, esto es lo que sucede cuando se abre un interruptor <i>"switch"</i> o cuando se quema una de las cargas, todas las cargas dejarán de trabajar, pues no hay manera de que la corriente complete el circuito de regreso a la fuente.
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-11.mb-5.mb-lg-0
        .row.box-light-25
          .col-12.pt-3
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Circuito eléctrico cerrado - abierto]
          .col-12.col-lg-6.mb-5.mb-lg-0.d-flex(data-aos="slide-left" data-aos-delay="600")
            div.box-light-25.color-primario.w-100.p-4
              figure
                img(src='@/assets/curso/tema1-imagen4.svg')
          .col-12.col-lg-6.d-flex(data-aos="slide-right" data-aos-delay="600")
            div.box-light-25.color-primario.w-100.p-4
              figure
                img(src='@/assets/curso/tema1-imagen5.svg')

    p.mb-5 Ahora, en un circuito eléctrico la resistencia también es conocida como carga eléctrica, la cual representa cualquier dispositivo eléctrico que se conecte a una fuente de voltaje. Por lo tanto, en un circuito puede haber más de una carga o resistencia y estas se pueden conectar de dos maneras: en serie y en paralelo. A continuación, se explican estos dos tipos de conexiones.

    TabsC.color-acento-contenido.mb-5(data-aos="fade-in" data-aos-delay="300")
      .p-4.p-md-4(titulo="Circuitos en serie")
        p.mb-5 En un circuito en serie los aparatos receptores (cargas o resistencias) están conectados uno tras otro, de tal manera que existe solamente una trayectoria para los electrones. Esto hace que la misma corriente fluya a través de todas las resistencias; sin embargo, el voltaje se dividirá entre ellas. Así pues, al sumar los voltajes de todas las cargas, el resultado debe equivaler al voltaje de la fuente.
          br
          br
          | Un circuito en serie es de "todos o ninguno", en el que funciona todo o nada. Todos están familiarizados con las series de bombillos para el árbol de navidad, ejemplo clásico de este tipo de conexión. Cuando uno de ellos se funde se apagan todos los bombillos y cambiando el bombillo defectuoso se permite nuevamente el paso de la corriente por todo el circuito.
        .row.justify-content-center
          .col-lg-9
            figure
              img(src='@/assets/curso/tema1-imagen37.svg')
      .p-4.p-md-4(titulo="Circuitos en paralelo")
        p.mb-5 Cuando dos o más aparatos se conectan a una fuente de energía de tal manera que la corriente total se divide, circulando los electrones a través de cada aparato en una trayectoria separada, se dice que los aparatos (cargas o resistencias) están conectados en paralelo. Se caracteriza porque los extremos de las resistencias van unidos a un mismo punto y el voltaje es el mismo en todas ellas. Así pues, la suma de la corriente de cada resistencia es igual a la corriente que entrega la fuente. 
          br
          br
          | Todo el mundo usa circuitos en paralelo. Las diferentes lámparas y aparatos eléctricos de una casa se conectan en paralelo para poder operar independientemente. Si los aparatos tienen que ponerse a funcionar y desconectarse por separado, sin afectar a otros, tienen que conectarse en paralelo.
        .row.justify-content-center
          .col-lg-9
            figure
              img(src='@/assets/curso/tema1-imagen38.svg')

    Separador

    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2  Ley de Ohm

    p.mb-5 La Ley de Ohm muestra la relación entre la tensión (o voltaje), la corriente y la resistencia en un circuito eléctrico. (Mantilla Q., 1983, p. 21). Esta relación fue enunciada por el físico alemán Georg Simon Ohm (García Á., 2005), y establece que:

    .row.justify-content-center.mb-4(data-aos="slide-left" data-aos-duration="900")
      .col-12.col-lg-8
        .cajon.color-acento-botones.p-4
          .row.align-items-center
            .col-12.col-lg-3.mb-5.mb-lg-0.d-flex
              figure
                img(src="@/assets/curso/tema1-imagen7.svg")(style="max-height: 80px")
            .col-12.col-lg-8.d-flex
              p.mb-0 La diferencia de potencial (tensión) a través de una resistencia es directamente proporcional a la corriente que circula por la misma. 

    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="900")
      .col-12.col-lg-10
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1-imagen8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ley de Ohm
                  p.text-small Conozca cómo se representa matemáticamente la ley de Ohm.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Ley_OHM.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 A continuación, se verán dos puntos importantes al hablar de la Ley de Ohm, su aplicación a los circuitos de serie y a los circuitos en paralelo:
    
    TabsC.color-acento-contenido.mb-5
      .p-4.p-md-4(titulo="Ley de Ohm en los circuitos en serie")
        p.mb-5 De acuerdo con la Ley de Ohm el voltaje en una resistencia es igual al producto de la corriente por la resistencia (V=IR). La corriente del circuito depende del voltaje de la fuente y de la resistencia. En este caso, por tratarse de una conexión en serie de varias resistencias, con corriente constante, el voltaje en cada una de ellas depende del valor de su resistencia. Así pues, cuando hay varias resistencias en serie, el voltaje de la fuente se divide entre ellas. Entre mayor sea la resistencia mayor es el voltaje que le toca; se cumple que:

        .row.mb-5
          .col-md-6.mb-4.mb-md-0
            .cajon.color-acento-contenido.p-4
              p.mb-0 La suma de los voltajes individuales es igual al voltaje total aplicado a la línea.
        
          .col-md-6
            .cajon.color-acento-contenido.p-4
              p.mb-0 La resistencia total del circuito en serie es la suma de las resistencias de todas las cargas.
        
        p.mb-5 En la siguiente imagen se tienen tres cargas de 100 Ω, 300 Ω y 200 Ω que han sido conectadas en serie:

        .row.mb-5.justify-content-center
          .col-lg-8
            figure
              img(src="@/assets/curso/tema1-imagen9.svg")

        p.mb-5 La caída de voltaje a través de estas tres resistencias es 1.5 V + 4.5 V + 3 V = 9 V que equivale al voltaje de la fuente.

      .p-4.p-md-4(titulo="Ley de Ohm en los circuitos paralelos")
        p.mb-5 De acuerdo con la ley de Ohm el voltaje es igual al valor de la corriente multiplicada por la resistencia (V=IR). La corriente en cada una de las resistencias es inversamente proporcional al valor de su resistencia. En este caso, hay varias resistencias en paralelo y el voltaje en ellas es el mismo, la corriente de la fuente se divide entre ellas y la suma de las corrientes individuales es igual a la que viene de la fuente.

        .row.mb-5
          .col-md-6.mb-4.mb-md-0
            .cajon.color-acento-contenido.p-4
              p.mb-0 A menor resistencia mayor corriente y a mayor resistencia menor corriente.
        
          .col-md-6
            .cajon.color-acento-contenido.p-4
              p.mb-0 La corriente total en un circuito en paralelo es la suma de las corrientes individuales.
        
        p.mb-4 En la siguiente imagen, la corriente total del circuito será entonces de 9 A + 4.5 A + 3 A = 16.5 A

        .row.mb-4.justify-content-center
          .col-lg-8
            figure
              img(src="@/assets/curso/tema1-imagen10.svg")
    
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3  Ley de Watt

    p.mb-5 James Watt realizó los trabajos que llevaron el establecimiento de los conceptos de potencia (Mantilla Q., 1985, p. 20), la cual indica que:

    .row.justify-content-center.mb-4(data-aos="zoom-in" data-aos-duration="900")
      .col-12.col-lg-8
        .cajon.color-primario.p-4
          .row.align-items-center
            .col-12.col-lg-3.mb-5.mb-lg-0.d-flex
              figure
                img(src="@/assets/curso/tema1-imagen11.svg")(style="max-height: 80px")
            .col-12.col-lg-8.d-flex
              p.mb-0 La potencia eléctrica suministrada por un receptor es directamente proporcional a la tensión de alimentación (U) del circuito y a la intensidad (I) que circule por él. 

    p.mb-5 Matemáticamente se expresa como:

    .row.justify-content-center.mb-4(data-aos="zoom-in" data-aos-duration="900")
      .col-12.col-lg-8
        figure
          img(src="@/assets/curso/tema1-imagen12.svg")

    p.mb-5 Pues bien, suponga que tiene dos circuitos, cada uno con una resistencia R de diferente valor, conectada con un amperímetro o una fuente de tensión de 125 V, como se muestra en la siguiente figura.

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        .box-light-25.color-primario.p-5
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 4.] <i>Configuración de dos circuitos eléctricos con diferente valor de resistencia</i>
          figure
            img(src="@/assets/curso/tema1-imagen12.png")
            figcaption Nota. Tomado de Mantilla (1985).
      .col-md-6
        p.mb-0 En estas condiciones, el amperímetro del primer circuito marca 6 A, es decir, a través de la resistencia R1 ha pasado en un segundo una carga de 6 culombios. Se puede decir que en el primer circuito se ha realizado un trabajo de 6 culombios en un tiempo (t) de 1 segundo. Por otra parte, en el segundo circuito el amperímetro marca 12 A, es decir, en este circuito el trabajo es de 12 culombios en un tiempo (t) de 1 segundo.
          br
          br
          | Observe que en un mismo tiempo (t), de 1 segundo, en la resistencia del segundo circuito se ha realizado el doble del trabajo que se realiza en la resistencia del primer circuito. De manera que se puede decir que el segundo circuito es el de mayor potencia.
          br
          br
          | Se acaba de ver que para una misma diferencia de potencial, la potencia de una resistencia se manifiesta por el consumo de amperios, a mayor intensidad, mayor potencia. Por otra parte, para una resistencia determinada, la intensidad variará al variar la tensión, aumentará cuando aumente la tensión y disminuirá cuando disminuya la tensión, por lo cual se deduce que:
    
    .row.mb-5.justify-content-center
      .col-lg-4
        .box-light-25.color-blue.p-4.text-center.rounded-3
          p.mb-0
            strong Potencia = Tensión x Intensidad
            br
            strong P = V x I 

    .row.mb-5
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0 La unidad de potencia empleada en electricidad es el vatio que se representa con la letra W, siendo su equivalente mecánico el julio por segundo.
      .col-lg-5
        p.mb-0
          strong Un vatio es la potencia de un receptor que consume 1 amperio cuando se le aplica una tensión de 1 voltio.
    
    p.mb-5 Ahora algunos ejemplos:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5.text-center
        h1.mb-5 Ejemplo 1
        p.mb-5 Una resistencia que consume 12 A cuando la tensión es de 100 V desarrolla una potencia de:
        p.mb-0 
          strong P = V X l
          br
          strong P = 100 V x 12 A = 1200 W

      .col-md.tarjeta.color-acento-contenido.p-5
        h1.mb-5.text-center Ejemplo 2
        p.mb-5 Al suponer que se tiene un circuito en el que una tensión de 120 voltios impulsa una corriente de 1 A, ¿cuál es el valor de la potencia producida?
          br
          br
          | Se tiene:
          br
          | V = 120 V
          br
          | I = 1 A
          br
          | P= ¿? 
          br
          br
          | Aplicando la Ley de Watt se obtiene:
        p.mb-0 
          strong P = V x I = (120 V) x (1 A) = 120 W
          br
          | El valor de la potencia será de 120 vatios.

    .row
      .col-lg-6.mb-5.mb-lg-0
        .cajon.color-acento-botones.p-5
          p.mb-4 De la fórmula V x I se puede deducir otras dos:
          .row.justify-content-center.mb-5
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1-imagen39.svg")
          p.mb-0 Estas fórmulas permiten la solución de muchos casos de índole práctico, por ejemplo:
      .col-lg-6
        .cajon.color-acento-botones
          .p-5
            p Una lámpara tiene los siguientes datos en su placa de características 
              strong V = 125 V y P = 100 W
            p.mb-4  ¿Cuál será el valor de la intensidad?
            .row.mb-4
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1-imagen40.svg")
            p.mb-0 La intensidad será de 
              strong 0.84 amperios.
              
    Separador

    #t_1_4.titulo-segundo.color-acento-botones
      h2 1.4  Leyes de Kirchhoff

    p.mb-5 Para analizar circuitos eléctricos no basta con aplicar la Ley de Ohm, es necesario utilizar otras herramientas para resolverlos completamente, como son las Leyes de Kirchhoff. Estas leyes permiten obtener los valores de intensidad de corriente en ramas de un circuito y potencial eléctricos en cada punto del circuito (McAllister, 2020). Reciben su nombre en honor al físico alemán Gustav Kirchhoff y son fundamentales para analizar y resolver circuitos eléctricos.
      br
      br
      | Para comenzar a usar las Leyes de Kirchhoff, se debe familiarizar primero con las siguientes definiciones. De acuerdo con (Vila Casado, 2008, 32):

    TabsA.color-acento-botones.mb-5
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Nodo")
        p.mb-4
          strong Nodo
          br
          br
          | Es el punto donde se conectan dos o más elementos de un circuito.
          br
          br
          | En el esquema a se ve un nodo (punto negro) en el que se conectan cinco elementos (rectángulos anaranjados), el cual se puede representar también como se observa en el esquema b.
        .row.justify-content-center.mb-4
          .col-lg-8
            .row
              .col-lg-5.mb-5.mb-lg-0
                .titulo-sexto.color-acento-contenido
                  span Esquema <strong>a</strong>
                figure
                  img(src="@/assets/curso/tema1-imagen17.svg")
              .col-lg-7
                .titulo-sexto.color-acento-contenido
                  span Esquema <strong>b</strong>
                figure
                  img(src="@/assets/curso/tema1-imagen18.svg")
        p.mb-4 En circuitos eléctricos se va a encontrar con esquemas como el que se muestra a continuación, que consta de 4 nodos. 
        .row.justify-content-center.mb-4
          .col-lg-11
            .row
              .col-lg-6.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen19.svg")
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema1-imagen20.svg")
        .cajon.color-acento-botones.px-5.py-4
          p.mb-0 
            | El 
            strong nodo 1 
            | es la unión entre la fuente de voltaje, V0 y la parte inferior de R3, R4 y R5.
            br
            | El 
            strong nodo 2 
            | es la unión entre la fuente de voltaje, V0 y el resistor R1.
            br
            | El 
            strong nodo 3 
            | es la unión entre los resistores R1, R2 y R3.
            br
            | El 
            strong nodo 4 
            | es la unión entre los resistores R2, R4 y R5.

      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Rama")
        p.mb-3
          strong Rama
          br
          br
          | Es el tramo de circuito eléctrico comprendido entre dos nodos consecutivos, es decir, las ramas son las conexiones entre los nodos y pueden ser elementos del circuito (resistor, capacitor, fuente, etc.).
          br
          | ¿Cuántas ramas hay en el siguiente esquema?
        .row.mb-4
          .col-lg-5.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen13.png")
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1-imagen14.png")  
        p.mb-0
          strong Hay 6 ramas en este circuito, una por cada elemento.
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Malla")
        p.mb-3
          strong Malla
          br
          br
          | Es un recorrido cerrado del circuito que resulta de recorrer el esquema eléctrico en un mismo sentido regresando al punto de partida, pero sin pasar dos veces por la misma rama. 
          br
          br
          | Por ejemplo, en el siguiente circuito tenemos 3 mallas. 
        .row.mb-4
          .col-lg-5.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen15.png")
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1-imagen16.png")

      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Ejemplo")
        p.mb-4
          strong Ejemplo
          br
          br
          | A continuación, un ejemplo para repasar lo observado. En la figura se observa un circuito resistivo que tiene las siguientes características:
        .row
          .col-lg-6.mb-5.mb-lg-0
            .cajon.color-acento-botones.px-5.py-4
              p.mb-0
                strong a. 
                | 5 resistencias
                br
                strong b. 
                | 3 fuentes de fuerza electromotriz
                br
                strong c. 
                | 4 nudos
                br
                strong d. 
                | 6 ramas
                br
                strong e. 
                | 6 corrientes en rama
                br
                strong f. 
                | 7 mallas
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1-imagen21.png")

      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Ley de la intensidad")
        p.mb-4
          strong Ley de la intensidad
          br
          br
          | También es llamada ley de nodos o primera Ley de Kirchhoff, que dicta: 
        .cajon.color-acento-botones.px-5.py-4.mb-4
          p.mb-0
            strong <i>“La suma algebraica de las corrientes que entran o salen de un nodo es igual a cero.”</i>
            br
            | (Vila C., 2008, p. 32)
        p.mb-4 De forma equivalente, la suma de todas las corrientes que entran a un nodo es igual a la suma de las corrientes que salen del nodo.
        .row.justify-content-center
          .col-lg-5.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen22.svg")
          .col-lg-7
            p.mb-4 Matemáticamente esta ley se expresa de la siguiente manera:
            figure.mb-4
              img(src="@/assets/curso/tema1-imagen23.svg")(style="max-width: 80%")
            p.mb-0
              | Donde:
              br
              strong n
              | = Número de ramas conectadas al nodo.
              br
              strong in
              | = n-ésima corriente que entra o sale del nodo.

      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="Ley de tensiones")
        p.mb-4
          strong Ley de tensiones
          br
          br
          | Esta ley es llamada también segunda Ley de Kirchhoff o ley de mallas de Kirchhoff. Dicta que:
        .cajon.color-acento-botones.px-5.py-4.mb-4
          p.mb-0
            strong <i>“La suma algebraica de las diferencias de potencial eléctrico (tensiones) en una malla es cero” </i>
            br
            | (Vila C., 2008, p. 32)
        p.mb-4 Un enunciado alternativo es: <strong>en una malla, la suma de todas las caídas de tensión (voltajes en las resistencias) es igual a la tensión total suministrada (suma de todas las fuerzas electromotrices). </strong>
        .row.justify-content-center
          .col-lg-5.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen24.svg")
          .col-lg-7
            p.mb-4 Matemáticamente esta ley se expresa de la siguiente manera:
            figure.mb-4
              img(src="@/assets/curso/tema1-imagen25.svg")(style="max-width: 80%")
            p.mb-0
              | Donde:
              br
              strong n
              | = Número de tensiones presentes en la malla.
              br
              strong in
              | = n-ésima tensión en la malla
    
    Separador

    #t_1_5.titulo-segundo.color-acento-botones
      h2 1.5  Respuesta transitoria circuitos de primer orden

    .row.mb-5
      .col-lg-5.mb-5.mb-lg-0.d-flex
        figure.mb-4
          img(src="@/assets/curso/tema1-imagen26.png")
      .col-lg-7.d-flex
        .cajon.color-acento-botones.px-5.py-4.mb-4
          p.mb-0 Como se mencionó, las bobinas y los condensadores son elementos que no disipan potencia, ellos almacenan energía en el campo magnético, las bobinas y en el campo eléctrico, los condensadores. 

    p.mb-5 Debido a esta energía almacenada es posible encontrar voltajes y corrientes en circuitos que contengan bobinas y/o condensadores sin estar conectados a ninguna fuente. A esta forma de respuesta se le conoce como respuesta natural o transitoria del circuito porque no depende de la fuente sino de la topología de conexión de los elementos acumuladores de energía. La forma más sencilla de respuesta natural se encuentra en los llamados circuitos de primer orden, que corresponden a circuitos que pueden ser reducidos a una resistencia en serie con una bobina (RL) o a una resistencia en serie con un condensador (RC).
      br
      br
      | Las gráficas que siguen fueron tomadas y adaptadas del texto <i>“Análisis de circuitos en Ingeniería”</i> de Hayt & Kemmerly.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .box-light-25.color-primario.p-4
          .titulo-sexto.color-acento-contenido
            span Circuitos de primer orden
          .row
            .col-lg-6.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema1-imagen27.svg")
            .col-lg-6
              figure
                img(src="@/assets/curso/tema1-imagen28.svg")
    
    p.mb-5 En ambos casos la forma de onda es una exponencial decreciente que tiende a cero como era de esperarse, ya que la energía almacenada en la bobina o condensador es una cantidad finita que termina siendo transformada en calor en la resistencia. La rapidez con que esta respuesta desaparece se denomina constante de tiempo del circuito (τ) y es igual a L/R y a RC respectivamente. El significado físico de τ se puede observar en la gráfica:

    .row.justify-content-center.mb-5
      .col-lg-8
        .box-light-25.color-primario.p-4
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 5.] <i>Significado físico de τ</i>
          figure
            img(src="@/assets/curso/tema1-imagen29.svg")

    p.mb-5 La constante de tiempo del circuito es la rapidez de cambio del voltaje o corriente en t = 0. Si la forma de respuesta fuera lineal demoraría exactamente τ segundos en caer a 0. También podemos evaluar el valor del voltaje o corriente para valores de tiempo múltiplos de τ así:

    .row.justify-content-center.mb-5
      .col-lg-8
        .box-light-25.color-primario.p-5
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 6.] <i>Valor del voltaje o corriente para valores de tiempo múltiplos de τ </i>
          figure
            img(src="@/assets/curso/tema1-imagen30.svg")
    p.mb-5 Como puede observarse en 3 constantes de tiempo la respuesta ya ha disminuido al 5% de su valor inicial y para 5 constantes de tiempo cae al 0.67% de su valor inicial. Por esta razón, se considera en la práctica que después de transcurridas 5 constantes de tiempo la respuesta transitoria ha desaparecido.


    #t_1_6.titulo-segundo.color-acento-botones
      h2 1.6  Fasores

    .row.mb-5
      .col-lg-5.mb-5.mb-lg-0.d-flex
        figure.mb-4
          img(src="@/assets/curso/tema1-imagen31.svg")
      .col-lg-7.d-flex
        .cajon.color-acento-contenido.px-4.py-4.mb-4
          p.mb-0 Antes de presentar el concepto fasores se debe primero recordar que un vector es una representación gráfica y matemática de una variable física; se compone de una magnitud y una dirección expresada, por lo general, de forma cuantitativa con un ángulo. Para los circuitos eléctricos de corriente alterna, el voltaje y la corriente poseen características similares; para el voltaje y la corriente, en corriente continua por la naturaleza de las ondas al no presentarse oscilaciones, el ángulo de ellas es igual a cero. 
            br
            br
            | En los circuitos eléctricos un fasor es <strong>una representación matemática de un vector</strong> que se utiliza para caracterizar las propiedades de amplitud y ángulo para una onda senoidal de voltaje o de corriente. Para efectos prácticos, el valor resultante de la diferencia (resta) de los ángulos entre el fasor de voltaje y corriente, están determinados por el tipo de carga o impedancia del circuito.
    p.mb-5 A continuación, se muestra la diferencia del ángulo entre el voltaje y la corriente para tres tipos de cargas diferentes:

    .row.mb-5.justify-content-center
      .col-lg-9
        .row
          .col-12
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 #[b Figura 7.] <i>Diferencia del ángulo entre el voltaje y la corriente para diferentes tipos de carga</i>
          .col-lg-4.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen33.svg")
            .p-3.text-center(style="background-color: #E9E9E9")
              p.mb-0 <strong>Carga Resistiva</strong>
          .col-lg-4.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen34.svg")
            .p-3.text-center(style="background-color: #E9E9E9")
              p.mb-0 <strong>Carga Capacitativa</strong>
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1-imagen35.svg")
            .p-3.text-center(style="background-color: #E9E9E9")
              p.mb-0 <strong>Carga Inductiva</strong>

    p.mb-5 Como se puede observar, para el caso de una resistencia, la diferencia de fase entre el voltaje y la corriente es de cero, es decir, para una carga totalmente resistiva el voltaje y la corriente se encuentran en la misma fase.
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img(src="@/assets/curso/tema1-imagen32.svg")(style="max-height: 140px")
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Para el caso de una carga totalmente inductiva, la onda de corriente está “atrasada” 90 grados con respecto a la onda de voltaje, por lo tanto, la diferencia del ángulo entre el fasor del voltaje y el de corriente es de 90 grados en atraso.
              br
              br
              | Finalmente, para una carga totalmente capacitiva, la onda de corriente está “adelantada” 90 grados con respecto a la onda de voltaje, por lo tanto, la diferencia del ángulo entre el fasor de voltaje y el de corriente es de 90 grados en adelante.

    p.mb-5 En las instalaciones eléctricas reales en las que existe una combinación de cargas de diferente naturaleza (resistivas, inductivas y capacitivas) es muy poco probable que la diferencia de fase entre el ángulo de la onda de voltaje y la onda de corriente sea exactamente 90 grados. Por lo tanto, para determinar dicha diferencia se utilizan instrumentos de medida que permiten en tiempo real su cálculo; más adelante se mostrará la aplicación práctica de estos conceptos.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
