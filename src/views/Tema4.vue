<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <i>Software</i> de simulación de circuitos eléctricos

    p.mb-5 Es una herramienta de <i>software</i> utilizada por profesionales en el campo de la electricidad y por estudiantes de las carreras del área eléctrica y afines. Ayuda a crear algún circuito que se desee ensamblar, ayudando a entender mejor el mecanismo y a ubicar las fallas dentro del mismo, de manera sencilla y eficiente.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Características generales")
        .col-12
          p Los simuladores de circuitos cuentan con múltiples herramientas que permiten realizar casi cualquier circuito, se puede instalar circuitería básica como resistores, condensadores, bobinas, relés mecánicos, interruptores, fuentes de voltaje AC y DC, fuentes de corrientes AC y DC, lámparas, entre otros; también se pueden usar semiconductores como diodos, tiristores, relés de estado sólido, entre otros. Igualmente, dispone de un ser de herramientas de medición como voltímetros, amperímetros, vatímetros y osciloscopios.
            br
            br
            | El diseño de este tipo de <strong><i>software</i></strong> lleva varios años y con ello cada vez se van mejorando sus características, haciéndolos más robustos y reales, uno de los primeros simuladores creados fue SPICE, desarrollado por Donald Pederson en la Universidad de California en Berkeley en 1975. El funcionamiento de este programa se basa en la  línea de órdenes, las cuales no son tan fáciles de utilizar al momento de diseñar todo un circuito complejo y el usuario debe tener un conocimiento correcto sobre cómo utilizar las instrucciones correctas; sin embargo, SPICE es fundamental para otros programas con mayor interactividad con el usuario, tales como Orégano o GEDA.
            br
            br
            | En la actualidad, existen cada vez más programas dedicados al diseño asistido por computadora o CAD (<i>Computer-Aided Design</i>) para diferentes áreas de desarrollo, y la electrónica no podía quedarse atrás. Dentro de este contexto, en los últimos años han surgido gran cantidad de programas orientados a los expertos en electrónica para ayudarlos en el diseño de circuitos.
            br
            br
            | Los programas tipo CAD enfocados en la electrónica en general tienen las siguientes características: dibujo de diagramas de circuitos, simulación de circuitos electrónicos y diseño de circuitos impresos
            | (PCB). Algunos poseen solo una de estas características, pero otros pueden realizar las tres en un único paquete.

      .row(titulo="Ventajas")
        .col-md-3.mb-5.mb-md-0.px-md-5
          figure
            img(src='@/assets/curso/tema4-imagen1.svg', alt='')
        .col-md-9
          p.mb-0 Utilizar un simulador de circuitos le permite al ingeniero eléctrico o de carrera afín hacer pruebas sin correr el riesgo de dañar algún circuito, si eso llegase a ocurrir, implicaría mayor gasto de material.
            br
            br
            | Cuando un circuito trabaje correctamente en el simulador será más fácil armarlo, y se puede tener la seguridad de que el circuito funcionará correctamente. Con el simulador se puede hallar de manera más fácil los errores y problemas que surgen a la hora de ensamblar los circuitos eléctricos, con algunas herramientas que los programas ya cuentan como por ejemplo, multímetros, generadores de voltaje u osciloscopios.
            br
            br
            | Algunos programas cuentan con diferentes vistas al circuito que se está armando. Se puede observar como si se estuviera conectando realmente o como un diagrama de conexiones.
      
      .row(titulo="Desventajas")
        .col-md-3.mb-5.mb-md-0.px-md-5
          figure
            img(src='@/assets/curso/tema4-imagen2.svg', alt='')
        .col-md-8
          p.mb-0 Algunos simuladores de circuitos no están lo suficientemente actualizados, y no cuentan con todos los <i>chips</i> del mercado, y eso sería un contratiempo para el diseñador, ya que deberá darse a la tarea de fabricar su propio semiconductor. Cuando no se sabe cómo manejar el programa de simulación, genera retrasos en los diseños, se debe estudiar de manera completa todos los componentes y opciones que tiene el programa, para poder realizar el trabajo de manera correcta.
    
    Separador

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-in")
      h2 4.1  Biblioteca de componentes
    
    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 <b>Es la parte dentro del programa de simulación donde se eligen los componentes de las librerías o elegir los componentes que formarán los circuitos eléctricos.</b>
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-0 Para seleccionar los componentes se debe estar en el modo donde se habiliten las funciones de esta opción, para lo cual, simplemente, se presiona un botón o algo por el estilo en la barra de herramientas del <i>software</i>.

    .row
      .col-md-6.mb-4.mb-md-0.d-flex
        .box-light-25.color-acento-botones.p-5
          p.mb-0 Cuando se acude a la biblioteca se observa algo como una ventana para la selección de objetos, allí se puede apreciar el nombre y una breve descripción de cada uno de los componentes contenidos. El aspecto visual de esto difiere dependiendo del <i>software</i> de simulación, en algunas es muy simple y los componentes se aprecian a simple vista, pero cuando la aplicación es muy robusta trae una gran variedad de componentes, lo que conlleva a agruparlos por categorías, lo que hace necesario brindar opciones para que se pueda navegar por las librerías de componentes para elegir los que formarán el diseño y también es posible hacer una búsqueda concreta. Un ejemplo de esto se puede apreciar a continuación:
      .col-md-6.d-flex
        .box-light-25.color-primario.p-5
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 14.] #[i Biblioteca de componentes]
          figure
            img(src='@/assets/curso/tema4-imagen3.png', alt='')
            figcaption Fuente: SENA
    
    Separador

    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-in")
      h2 4.2  Conexión de componentes
    
    p.mb-4 Después de haber aprendido cómo buscar y escoger los componentes dentro de la biblioteca es fundamental saber cómo se realizan las conexiones entre ellos dentro de un circuito. Para realizar las conexiones se debe estar en un modo donde se habiliten las herramientas de conexión, aunque en algunos simuladores es posible efectuarlas desde otros modos también. En el siguiente paso a paso se conocerá en detalle cómo es el procedimiento para conectar componentes.

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 1")
        h4 Paso 1
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso1.svg', alt='')
              figcaption
                i Componentes escogidos ya ubicados en el área de trabajo.
          .col-md-6
            p.mb-0 Para comenzar debe tener ubicados algunos componentes en la ventana de diseño, como por ejemplo, una fuente de voltaje alterno, un capacitor, una bobina y un par de resistores. 
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 2")
        h4 Paso 2
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso2.svg', alt='')
              figcaption
                i Lugar correcto de conexión de componente inicial.
          .col-md-6
            p.mb-0 Luego, entre en el modo donde se habiliten las herramientas de conexión. Coloque el cursor en la punta de la terminal de la fuente de poder AC; observe que el cursor toma la forma de un lápiz de color verde y aparece un cuadro de color rojo en la terminal, lo cual indica que está en el lugar correcto para hacer una conexión. 
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 3")
        h4 Paso 3
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso3.svg', alt='')
              figcaption
                i Lugar correcto de conexión de componente final.
          .col-md-6
            p.mb-0 Haga un clic en ese lugar y desplace el cursor del #[i mouse] hacia la terminal donde se hará la conexión, en este caso, una terminal de una de las resistencias R1. Al llegar a la terminal de la resistencia, el cursor volverá a tomar la forma de un lápiz verde, y un pequeño cuadro rojo indicará que se puede hacer la conexión. Haga un clic y la conexión quedará hecha. 
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 4")
        h4 Paso 4
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso4.svg', alt='')
              figcaption
                i Lugar correcto de conexión de R1 y C1.
          .col-md-6
            p.mb-0 Para hacer la conexión entre el otro terminal de la resistencia R1 y un terminal del capacitor C1, lleve el cursor a la terminal de la resistencia R1 (también puede empezar por la terminal del capacitor, si lo desea).
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 5")
        h4 Paso 5
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso5.svg', alt='')
              figcaption
                i Conexión de R1 y C1.
          .col-md-6
            p.mb-0 Haga un clic para comenzar la conexión y desplace hacia abajo, hasta la terminal del capacitor C1. Puede hacer un clic en ese punto para indicar un cambio de dirección o trasladar la conexión directamente a la terminal del capacitor, y el simulador calculará automáticamente la trayectoria de la conexión. 
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 6")
        h4 Paso 6
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso6.svg', alt='')
              figcaption
                i Conexión de R1 y C1.
          .col-md-6
            p.mb-0 Al alcanzar la terminal del resistor, haga un clic, y la conexión quedará completa.
      .box-light-15.color-blue.box-light-border-15.color-primario.rounded.px-5.py-4(titulo="PASO 7")
        h4 Paso 7
        .row
          .col-md-6.mb-5.mb-md-0
            figure
              img(src='@/assets/curso/paso7.svg', alt='')
              figcaption
                i Fin de Conexión de componentes. 
          .col-md-6
            p.mb-0 Como se puede notar, hacer conexiones en los simuladores de circuitos eléctricos es simple y rápido. Se puede hacer así las conexiones entre las terminales de los componentes, y también es posible llevar las conexiones de una terminal a una línea de conexión ya existente o de una línea a otra.
              br
              br
              | Para conectar los demás componentes repetir los pasos anteriores y finalmente muestra cómo queda el circuito totalmente conexionado.
        

    h3.titulo-tercero Mover y borrar conexiones

    .row.mb-5
      .col-md-5.mb-5.mb-md-0
        p.mb-0
          strong Después de realizar las conexiones se pueden mover para ajustarlas y así mantener el diseño ordenado. Para esto, seleccione la línea de conexión por modificar, esta quedará en rojo; si se pone el cursor sobre ella, este cambiará de forma.
      .col-md-7
        p.mb-0 Haga clic sobre la línea seleccionada y arrastre el cursor en la dirección deseada sin soltarlo, a la izquierda o derecha para un segmento vertical, hacia arriba o abajo para uno horizontal, o en cualquier dirección si es una esquina de la conexión. Suelte el botón del <i>mouse</i> para que la línea o la esquina tomen su nueva posición. Mediante este sencillo procedimiento se reorganizan las conexiones para que todo quede ordenado como se quiere, también es posible seleccionar más de una línea de conexión a la vez y moverlas juntas para acelerar la tarea.

    Separador

    #t_4_3.titulo-segundo.color-acento-botones(data-aos="fade-in")
      h2 4.3  Parametrización de componentes

    .mb-5.px-4.py-2.texto-color-offset-top-left-3
      p Las propiedades de los diferentes componentes presentan un formato donde se editan o ajustan sus valores, aunque los campos dependen de cada simulador y de los componentes en particular. Algunos podrán tener más elementos y más variables, en los cuales es posible definir parámetros como resistencia, capacitancia, voltajes, tolerancias, tiempos, frecuencias, inductancias, entre otros; conforme se vayan utilizando algunos de los componentes se va aprendiendo a cómo manejar sus propiedades en cada caso. 
        br
        br
        | La mayoría de estas propiedades serán útiles al momento de realizar la simulación del circuito, ya que definen los valores y los parámetros de funcionamiento del componente. Algunas otras propiedades se utilizan solo para etiquetar los componentes dentro del circuito, por ejemplo, la referencia que se mostrará en el diagrama para identificar al componente dentro de él. 
    
    .row
      .col-md-6.mb-4.mb-md-0.d-flex
        .box-light-25.color-acento-botones.p-5
          p.mb-0 Ahora que se sabe cómo editar las propiedades de los componentes se presenta un ejemplo de un oscilador. Al dibujar el oscilador por primera vez se dejan los valores por defecto del resistor y del capacitor R = 10 kohm y C = 1 nF. Con estos valores, el oscilador generará una señal de aproximadamente 120 kHz, lo cual es muy alto y no se puede apreciar en detalle, entonces, para lograr una mejor visualización se cambiarán los valores a R = 15 kohm y C = 47uF; con esto el oscilador tendrá una frecuencia aproximada de 1 Hz y se podrá ver su funcionamiento con más claridad al correr la simulación. De manera que se puede realizar este circuito como práctica y analizar los resultados, como se muestra a continuación:
      .col-md-6.d-flex
        .box-light-25.color-primario.p-4
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 15.] #[i Parametrización de componentes]
          figure
            img(src='@/assets/curso/tema4-imagen4.svg', alt='')
            figcaption Fuente: SENA
    Separador

    #t_4_4.titulo-segundo.color-acento-botones(data-aos="fade-in")
      h2 4.4  Visualización de resultados

    .mb-5.px-4.py-2.texto-color-offset-top-left-4
      p Se puede observar mejor el funcionamiento de los circuitos cambiando algunas opciones de animación, para hacerlo, buscar en el simulador la ubicación de la configuración de las animaciones y visualizaciones del simulador. Se abrirá el cuadro de diálogo de <i>Animated Circuits Configuration</i> con dos secciones principales, velocidad de simulación para controlar esta en el circuito a simular y opciones de simulación para configurar la forma en que se verá la simulación.
        br
        br
        | Las opciones de velocidad y de animación permiten ver la simulación de diferentes maneras, siguiendo algunas recomendaciones. Las opciones <i>Frames per Second</i> y <i>Timestep per Frame</i> determinan la velocidad de animación del circuito; los valores por defecto son 20 y 50 m, respectivamente, entonces, si se multiplica 20 cuadros cada segundo, por 50 milisegundos de cada cuadro, se obtiene un tiempo exacto de un segundo, lo cual indica que la simulación correrá en tiempo real.
        br
        br
        | Si se quiere mantener esta velocidad real se debe asegurar que la multiplicación de estos campos arroje un resultado de un segundo; por ejemplo, para 50 cuadros por segundo se tiene que ingresar un tiempo por cuadro de 20 milisegundos (20 ms). Se puede variar estos valores para acelerar o ralentizar la simulación; si se coloca una combinación de 20 por 100 ms, por ejemplo, el resultado será 2 segundos, de modo que por cada segundo transcurrido, en la simulación habrán pasado 2 segundos, y de esta forma se habrá acelerado el proceso al doble de la velocidad real.
      
    .row.mb-5
      .col-md-6.mb-4.mb-md-0.d-flex
        .box-light-25.color-acento-botones.p-5
          p.mb-0 Al acelerar la simulación los eventos pasarán más rápido y, por el contrario, al hacer más lenta la simulación se podrá ver el funcionamiento con mayor lentitud. Para las opciones de visualización de voltajes y corrientes, los voltajes se representan normalmente con variaciones de color de la siguiente forma: 
            br
            | Los voltajes positivos en rojo, tierra en verde y los voltajes negativos en azul. Esto puede ser diferente en uno que otro simulador, como se muestra en la siguiente figura.
      .col-md-6.d-flex
        .box-light-25.color-primario.p-5
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 16.] #[i Animación de la simulación]
          figure 
            img(src='@/assets/curso/tema4-imagen5.svg', alt='')
            figcaption Fuente: SENA

    h3.titulo-tercero Visualización de parámetros instantáneos

    p.mb-5 Durante cualquier simulación se puede realizar pausas y ejecutar una simulación paso a paso que está en la mayoría de los simuladores. En algunos simuladores mientras la simulación permanezca en este estado y se lleve el cursor del <i>mouse</i> sobre cualquier componente, este tomará la forma de una mano. Al hacer un clic sobre cualquier componente del circuito se mostrará una ventana que contiene información sobre los parámetros del componente en ese momento. Estos parámetros son llamados parámetros instantáneos y son los siguientes:

    .row.mb-4
      .col-auto
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Los voltajes en los pines.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Los voltajes relativos entre los pines.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Los parámetros de corriente y potencia.

    .row.justify-content-center.align-items-center
      .col-md-6.mb-4.mb-md-0.d-flex
        .box-light-25.color-primario.p-5
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 #[b Figura 17.] #[i Parámetros instantáneos]
          figure
            img(src='@/assets/curso/tema4-imagen6.svg', alt='')
            figcaption Fuente: SENA
      .col-md-6.d-flex
        .box-light-25.color-acento-botones.p-5
          p.mb-0 Estos valores se toman directamente, es decir, se miden justo en el momento de la pausa, por ejemplo, a los 4 segundos. Otros elementos presentan diferentes parámetros según el componente de que se trate. 
            br
            br
            | Finalmente, en algunos componentes, sobre todo en los que tienen actuadores, no se puede acceder a esta función con un clic, ya que es como si se presionara los actuadores. En estos casos, se hace un clic con el botón derecho del <i>mouse</i>, y en el menú contextual se selecciona la opción que visualice esa información, como se muestra en la figura 17.

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
