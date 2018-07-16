const express = require('express');
const router = express.Router();

function shuffle(collection) {
  for (let i = collection.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [collection[i], collection[j]] = [collection[j], collection[i]];
  }

  return collection;
}

const questions = [
  {
    predicate: 'Plan:',
    answers: shuffle([
      {
        label: 'Salir',
        img: '/images/answers/Plan_Salir.svg',
        value: 63,
      },
      {
        label: 'Netflix',
        img: '/images/answers/Plan_Netflix.svg',
        value: 86,
      },
      {
        label: 'Videojuegos',
        img: '/images/answers/Plan_Videojuegos.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'Juego:',
    answers: shuffle([
      {
        label: 'Candy Crush',
        img: '/images/answers/Juego_Candy Crush.svg',
        value: 67,
      },
      {
        label: 'Fortnite',
        img: '/images/answers/Juego_Fortnite.svg',
        value: 83,
      },
      {
        label: 'World of Warcraft',
        img: '/images/answers/Juego_WoW.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'En ocasión especial visto:',
    answers: shuffle([
      {
        label: 'Jeans',
        img: '/images/answers/Ocasion_Jeans.svg',
        value: 65,
      },
      {
        label: 'Formal',
        img: '/images/answers/Ocasion_Formal.svg',
        value: 83,
      },
      {
        label: 'Cosplay',
        img: '/images/answers/Ocasion_Cosplay.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'Una serie:',
    answers: shuffle([
      {
        label: 'Casa de Papel',
        img: '/images/answers/Serie_Casa de Papel.svg',
        value: 61,
      },
      {
        label: 'Game of Thrones',
        img: '/images/answers/Serie_GoT.svg',
        value: 89,
      },
      {
        label: 'Silicon Valley',
        img: '/images/answers/Serie_Silicon Valley.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'La quiero ver ya:',
    answers: shuffle([
      {
        label: 'Mamma mia 2',
        img: '/images/answers/Pelicula_Mamma Mia.svg',
        value: 68,
      },
      {
        label: 'Avatar 2',
        img: '/images/answers/Pelicula_Avatar.svg',
        value: 88,
      },
      {
        label: 'Animales fantásticos 2',
        img: '/images/answers/Pelicula_Animales Fantasticos.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'No podría vivir sin:',
    answers: shuffle([
      {
        label: 'Heladera',
        img: '/images/answers/Vivir_Heladera.svg',
        value: 60,
      },
      {
        label: 'Celu',
        img: '/images/answers/Vivir_Celu.svg',
        value: 80,
      },
      {
        label: 'Compu con 3 monitores',
        img: '/images/answers/Vivir_Compu.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'Aprendería:',
    answers: shuffle([
      {
        label: 'Cocina',
        img: '/images/answers/Aprender_Cocina.svg',
        value: 73,
      },
      {
        label: 'Guitarra',
        img: '/images/answers/Aprender_Guitarra.svg',
        value: 79,
      },
      {
        label: 'Klingon y Dothraki',
        img: '/images/answers/Aprender_Klingon.svg',
        value: 100,
      },
    ]),
  },
  {
    predicate: 'Una lectura:',
    answers: shuffle([
      {
        label: 'Posteos',
        img: '/images/answers/Leer_Posteos.svg',
        value: 69,
      },
      {
        label: 'Novelas',
        img: '/images/answers/Leer_Novelas.svg',
        value: 89,
      },
      {
        label: 'Comics Manga',
        img: '/images/answers/Leer_Comics.svg',
        value: 100,
      },
    ]),
  },
];

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', { questions })
);

module.exports = router;
