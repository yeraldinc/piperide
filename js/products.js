const productos = [
    {
      id: 1,
      nombre: "Plumillas delanteras",
      imagen: "img/plumillas.jpg",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 5,
      reviews: 99,
      categoria: "exteriores"
    },
    {
      id: 2,
      nombre: "Pellones",
      imagen: "img/pellon.jpeg",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 4.5,
      reviews: 99,
      categoria: "interiores"
    },
    {
      id: 3,
      nombre: "Exploradoras led balnca",
      imagen: "img/Imagenes del proyecto de metodologia/exploradoras/exploradora barra  6 led blanca.webp",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 4,
      reviews: 99,
      categoria: "exteriores"
    },
    {
      id: 4,
      nombre: "organizador o almacenamiento",
      imagen: "img/Imagenes del proyecto de metodologia/exploradoras/alamacenamiento.webp",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 3.5,
      reviews: 99,
      categoria: "interiores"
    },
    {
      id: 5,
      nombre: "Luces exteriores rompe niebla",
      imagen: "img/rompeNiebla.webp",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 5,
      reviews: 99,
      categoria: "exteriores"
    },
    {
      id: 6,
      nombre: "Tapetes",
      imagen: "img/tapetes.jpg",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 4.5,
      reviews: 99,
      categoria: "interiores"
    },
    {
      id: 7,
      nombre: "Plumillas traseras",
      imagen: "img/plimillas.trasera.jpg",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 4,
      reviews: 99,
      categoria: "exteriores"
    },
    {
      id: 8,
      nombre: "Arelon o Spoiler",
      imagen: "img/Imagenes del proyecto de metodologia/exploradoras/aleron.spoiler.webp",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 3.5,
      reviews: 99,
      categoria: "exteriores"
    },
    {
      id: 9,
      nombre: "alfombras",
      imagen: "img/Imagenes del proyecto de metodologia/exploradoras/alfombras.webp",
      precio: 123.00,
      precioDescuento: 123.00,
      estrellas: 4,
      reviews: 99,
      categoria: "interiores"
    },
    {
        id: 9,
        nombre: "accesorio antirrobo",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/antirrobo.webp",
        precio: 10.00,
        precioDescuento: 5.00,
        estrellas: 5,
        reviews: 99,
        categoria: "seguridad"
      },
      {
        id: 8,
        nombre: "Parasoles",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/parasoles.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Barras de techo",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/barrasDeTecho.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Embellecedor de cano de escape",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/canoEscape.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "deflectores",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/deflectores.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "rejilla para entrada de aire",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/entradaDeAire.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "faldones",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/faldones.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Funda para volante",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/fundasParaVolantes.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "interiores"
      },
      {
        id: 8,
        nombre: "Fundas protectoras",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/fundasProtectoras.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "interiores"
      },
      {
        id: 8,
        nombre: "Gadgets",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/Gadgets.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "interiores"
      },
      {
        id: 8,
        nombre: "Luces internas",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/luzInterior.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "interiores"
      },
      {
        id: 8,
        nombre: "Pestañas de faro",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/pestanasdefaro.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Porta bicicleta",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/portabicicleta.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "rejillas delanteras de lujo",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/rejillas.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "reposa brazos",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/reposabrazos.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "interiores"
      },
      {
        id: 8,
        nombre: "set de parlantes",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/setParlantes.jpeg",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "sonido y multimedia"
      },
      {
        id: 8,
        nombre: "sonido",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/sonidoCoche.jpg",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "sonido y multimedia"
      },
      {
        id: 8,
        nombre: "tapon para valvula",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/taponValvula.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Vinilos o sticker",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/vinilos.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "farolas de colores",
        imagen: "img/Imagenes del proyecto de metodologia/farolas cuadradas de lujo/FAROLA-KENWORTH- con led de colores.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Farola blanca grande",
        imagen: "img/Imagenes del proyecto de metodologia/farolas cuadradas de lujo/farola cuadrada grande con led blanca.jpeg",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Luces led (variedad de colores)",
        imagen: "img/Imagenes del proyecto de metodologia/Camion1.jpg",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Emblemas",
        imagen: "img/emblemas.carro.jpg",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
      {
        id: 8,
        nombre: "Arelon o Spoiler",
        imagen: "img/Imagenes del proyecto de metodologia/exploradoras/aleron.spoiler.webp",
        precio: 123.00,
        precioDescuento: 123.00,
        estrellas: 3.5,
        reviews: 99,
        categoria: "exteriores"
      },
    // Puedes seguir agregando más productos según sea necesario
  ];
  