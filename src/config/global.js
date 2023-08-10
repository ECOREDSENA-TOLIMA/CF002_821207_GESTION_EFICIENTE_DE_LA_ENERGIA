export default {
  global: {
    componenteFormativo: 'Principios de circuitos eléctricos',
    descripcionCurso:
      'La electricidad es la más flexible y versátil de todas las formas de energía existentes. En el hogar la electricidad proporciona energía y comodidad en la refrigeración, la cocina, el televisor y muchos otros servicios. Conocer el concepto de circuito eléctrico y comprender la relación entre los parámetros fundamentales permitirá entender cómo funcionan las numerosas aplicaciones tanto domésticas como industriales que tiene la electricidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Circuitos eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Circuitos en serie y paralelo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ley de Ohm',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ley de Watt',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Leyes de Kirchhoff',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Respuesta transitoria circuitos de primer orden',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Fasores',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Potencia eléctrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Potencia activa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Potencia reactiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Potencia aparente',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Factor de potencia',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Facturas de energía eléctrica',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Circuitos trifásicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conexión "Y"',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conexión "Δ"',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Equivalente monofásico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Software</i> de simulación de circuitos eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Biblioteca de componentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Conexión de componentes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Parametrización de componentes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Visualización de resultados',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Circuitos eléctricos',
      referencia: 'ENDESA Fundación. (2020). Circuitos eléctricos.',
      tipo: 'Página web',
      link:
        'https://www.fundacionendesa.org/es/recursos/a201908-elementos-circuito-electrico',
    },
    {
      tema: 'Leyes de Kirchhoff',
      referencia:
        'Llanos, S. (2019). Leyes de Kirchhoff. Solución de un circuito [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ni37_i656RI',
    },
    {
      tema: 'Potencia eléctrica',
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (1980). Diferencia de potencial y corriente eléctrica. SENA.',
      tipo: 'Cartilla PDF',
      link: 'https://repositorio.sena.edu.co/handle/11404/1839',
    },
    {
      tema: 'Facturas de energía eléctrica',
      referencia:
        'Empresas Públicas de Pereira. (2015). Aprende a leer tu factura de energía eléctrica. ',
      tipo: 'Imagen explicativa PDF',
      link: 'https://old.eep.com.co/images/stories/noticias/facturav2.jpg',
    },
  ],
  glosario: [
    {
      termino: 'Circuito eléctrico',
      significado: 'Es la interconexión de dos o más componentes eléctricos.',
    },
    {
      termino: 'Circuito en paralelo',
      significado:
        'Cuando dos o más aparatos se conectan a una fuente de energía, de tal manera que la corriente total se divide circulando los electrones a través de cada aparato en una trayectoria separada, se dice que los aparatos (cargas o resistencias) están conectados en paralelo.',
    },
    {
      termino: 'Circuito en serie',
      significado:
        'En este, los aparatos receptores (cargas o resistencias) están conectados uno tras otro, de tal manera que existe solamente una trayectoria para los electrones.',
    },
    {
      termino: 'Constante de tiempo',
      significado:
        'Es un indicador de la velocidad de reacción del circuito ante una perturbación.',
    },
    {
      termino: 'Componente eléctrico',
      significado: 'Dispositivo que forma parte de un circuito electrónico.',
    },
    {
      termino: 'Factor de potencia',
      significado:
        'Es la relación entre la potencia activa, P, y la potencia aparente, S. ​Da una medida de la capacidad de una carga de absorber la potencia activa.',
    },
    {
      termino: 'Fase',
      significado:
        'Es la fracción de un ciclo transcurrido desde el inicio de la señal de corriente voltaje, su símbolo es (p).',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Número de veces que un voltaje o una corriente alterna cambia de polaridad en segundo.',
    },
    {
      termino: 'Inducción electromagnética',
      significado:
        'Producción de energía por variación de campos magnéticos alrededor de bobinas.',
    },
    {
      termino: 'Ley de Ohm',
      significado:
        'La Ley de Ohm muestra la relación entre la tensión (o voltaje), la corriente y la resistencia en un circuito eléctrico: la diferencia de potencial (tensión) a través de una resistencia es directamente proporcional a la corriente que circula por la misma.',
    },
    {
      termino: 'Ley de Watt',
      significado:
        'La potencia eléctrica suministrada por un receptor es directamente proporcional a la tensión de alimentación (U) del circuito y a la intensidad (I) que circule por él.',
    },
    {
      termino: 'Malla',
      significado:
        'Es el tramo de circuito eléctrico comprendido entre dos nodos consecutivos.',
    },
    {
      termino: 'Nodo',
      significado:
        'Es el punto donde se conectan dos o más elementos de un circuito.',
    },
    {
      termino: 'Potencia eléctrica',
      significado:
        'Volumen de energía que gasta una instalación eléctrica en la unidad de tiempo, se representa con la letra P.',
    },
    {
      termino: 'Rama',
      significado:
        'Es un recorrido cerrado del circuito que resulta de recorrer el esquema eléctrico en un mismo sentido, regresando al punto de partida, pero sin pasar dos veces por la misma rama.',
    },
    {
      termino: '<i>Software</i> de simulación eléctrica',
      significado:
        'Herramienta de <i>software</i> utilizada por profesionales en el campo de la electricidad y por los estudiantes de las carreras del área eléctrica y afines.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fitzgerald, A., Higginbotham, D. y Grabel, A. (1988). Fundamentos de ingeniería eléctrica. 4ª edición. McGraw-Hill. ',
    },
    {
      referencia: 'Fluke. (s.f.). ¿Qué es la ley de Ohm? ',
      link:
        'https://www.fluke.com/es-co/informacion/blog/electrica/que-es-la-ley-de-ohm',
    },
    {
      referencia:
        'González, B.; Toledano, J. (1994). Sistemas polifásicos. Editorial Paraninfo.',
    },
    {
      referencia:
        'Hayt, Kemmerly y Durbin. (2007). Análisis de circuitos en Ingeniería. 7ª edición. McGrawHill',
    },
    {
      referencia:
        'McAllister, W. (2020). Las leyes de Kirchhoff. Khan Academy.',
      link:
        'https://es.khanacademy.org/science/physics/circuits-topic/circuits-resistance/a/ee-kirchhoffs-laws',
    },
    {
      referencia: 'Mantilla, G. (1985). Fuerza, trabajo y potencia. SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/1851',
    },
    {
      referencia: 'Mantilla, G. (1983). La Ley de Ohm. Unidad 19. SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/1846',
    },
    {
      referencia:
        'Rodríguez P., M. Á. (s.f.). Circuitos de corriente alterna trifásica. Universidad de Cantabria. Departamento de Ingeniería Eléctrica y Energética.',
    },
    {
      referencia:
        'Vila, R. (2008). Circuitos eléctricos básicos para el estudiante. 2ª edición. Universidad Industrial de Santander.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica del SENA',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Regional Distrito Capital -Centro para la Industria de la Comunicación Gráfica del SENA',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
