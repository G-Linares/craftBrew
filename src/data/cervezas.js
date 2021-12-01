const cervezas = [
    {
        id:0,
        titulo: '5 De Mayo, Saga',
        tipo: 'Blonde Ale',
        descripcionCorta:'Cerveza 5 de Mayo Saga. Especiada, con notas cítricas y frescos aromas definidos',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '56.00',
        img: 'menu-1.jpg'
    },
    {
        id:1,
        titulo: 'Calavera Mexican Imperial Stout',
        tipo: 'Blonde Ale',
        descripcionCorta: 'Su cerveza imperial stout mexicana es una cerveza negra y suave que sabe y huele a chocolate y a café, con la sorpresa añadida de un toque de chile',
        descripcionDetallada: 'Fundada por el maestro cervecero danés, Gilbert Bjorn Nielson, Cervecería Calavera se complace en voltear la tradición de cabeza. Educado en México, pero con estudios de ingeniería química en su país natal, Nielson elabora cerveza que funde las tradiciones de ambos países. Su cerveza imperial stout mexicana es una cerveza negra y suave que sabe y huele a chocolate y a café, con la sorpresa añadida de un toque de chile, las cuales se añaden cerca del final. La cerveza stout es la cerveza distintiva de Calavera, y corresponde casi al 40% de las ventas de la compañía.',
        precio: '59.00',
        img: 'menu-3.jpg'
    },
    {
        id:2,
        titulo: 'Chacá Tequilana',
        tipo: 'Imperial Stour',
        descripcionCorta: 'Cerveza clara color paja.',
        descripcionDetallada: 'Cerveza Chacá Tequilana. Cerveza clara color paja. Tipo ale, una cerveza refrescante con notas de aromas y sabores propios del agave Tequilana Weber variedad azul.',
        precio: '30.00',
        img: 'cart-item3.jpg'
    },
    {
        id:3,
        titulo: 'Jabalí Bock',
        tipo: 'Block',
        descripcionCorta: 'Jabalí Bock es una Cerveza lager con fuerte aroma a maltas tostadas y cuerpo robusto.',
        descripcionDetallada: 'el amargor del lúpulo equilibra los sabores tostados de la malta permitiendo un ligero dulzor que permanece. Su estilo de Cerveza es Bock: Surge en el siglo XIV, en Einbeck, Alemania. Lager pura y limpia siguiendo las leyes de pureza alemana. Sólo se elaboraba en invierno. Se recomienda acompañar con platillos como carnes a la parrilla y con postres.',
        precio: '41.00',
        img: 'menu-4.jpg'
    },
    {
        id:4,
        titulo: 'Delirium Nocturnum',
        tipo: 'Belgian Strong Ale',
        descripcionCorta: 'La versión nocturnum de Delirium de triple fermentación, utiliza tres diferentes cepas de levadura y 5 diferentes tipos de maltas',
        descripcionDetallada: 'a cerveceria tiene su nombre por Leon Huyghe, cervecero que compró un a granja- maltería- cervecería en Melle en 1902, abandonando en poco tiempo las actividades agrícolas para centrarse en la elaboración de cerveza.En 1939 ponen en funcionamiento una nueva sala de elaboración, todavía en activo hoy, siendo ésta el corazón y la joya de la fábrica',
        precio: '142.00',
        img: 'menu-5.jpg'
    },
    {
        id:5,
        titulo: 'Grolsch Premium Lager',
        tipo:'Lager',
        descripcionCorta: 'Nuestra Pilsner Premium tiene un aroma de lúpulo verde natural, acabado fresco y amargor limpio y firme procedente de la combinación de dos lúpulos Hallertau: Emerald y Magnum.',
        descripcionDetallada: 'Nuestra Pilsner Premium tiene un aroma de lúpulo verde natural, acabado fresco y amargor limpio y firme procedente de la combinación de dos lúpulos Hallertau: Emerald y Magnum. El resultado es una pilsner con un sabor profundo que atrae a una gama más amplia.',
        precio: '74.00',
        img: 'menu-6.jpg'
    },
     {
        id:6,
        titulo: 'Erdinger Pikantus',
        tipo:'Bock',
        descripcionCorta: 'Largo proceso de elaboración con trigo oscuro le brinda un sabor fuerte y robusto.',
        descripcionDetallada: 'Esta cerveza estilo bock oscura es ideal para los meses fríos del año gracias a que el largo proceso de elaboración con trigo oscuro le brinda un sabor fuerte y robusto. Su color oscuro y sabor fuerte se deben a la utilización de trigo oscuro y malta de cebada, que aunado al tiempo de maduración más largo se vuelve irresistible para los amantes de la cerveza fuerte.',
        precio: '120.00',
        img: 'menu-7.jpg'
    },
     {
        id:7,
        titulo: 'La Trappe Dubbel',
        tipo:'Dubbel',
        descripcionCorta: 'Cerveza La Trappe Dubbel. Una cerveza trapense (elaborada por monjes) de color marrón oscuro con una cabeza de color marﬁl.',
        descripcionDetallada: 'Aroma afrutado con notas cálidas de vainilla, caramelo y chocolate tostado. La Trappe Dubbel es una cerveza trapense oscura clásica con un sabor dulce de malta, caramelo y una sutil inﬂuencia dulce de dátiles, miel y frutos secos.',
        precio: '81.00',
        img: 'menu-8.jpg'
    },
     {
        id:8,
        titulo: 'London Pridel',
        tipo:'Bitter',
        descripcionCorta: 'La cerveza ale, balanceada y completa, obtiene su nombre gracias a la flor cuyos brotes lograron florecer en los sitios bombardeados tras la guerra en Londres',
        descripcionDetallada: 'Hoy, es la cerveza ale de barril más vendida en el Reino Unido, y se vende (embotellada) alrededor del mundo. Su sabor descrito como "una sensación de ángeles bailando en la lengua" porque ha sido ganadora de numerosos premios conviertiendose en un estandarte para la cervecería Fullers.',
        precio: '109.00',
        img: 'menu-9.jpg'
    },
     {
        id:9,
        titulo: 'Hornet Gose',
        tipo:'Gose',
        descripcionCorta: 'Hornet Gose es una cerveza estilo sour con adición de kiwi, guayaba, carambola y sal de mar francesa',
        descripcionDetallada: 'Hornet Gose es una cerveza estilo sour con adición de kiwi, guayaba, carambola y sal de mar francesa, cerveza muy refrescante con notas cítricas que te dejará una grata sensación en boca.',
        precio: '94.00',
        img: 'menu-10.jpg'
    },

];

module.exports = cervezas;