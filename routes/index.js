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
    predicate: 'Video Juego:',
    answers: shuffle([
      {
        label: 'Fortnite',
        img: '/images/answers/pregunta-1_respuesta-1.svg',
        value: 67
      },
      {
        label: 'World of Warcraft',
        img: '/images/answers/pregunta-1_respuesta-2.svg',
        value: 88
      },
      {
        label: 'Zelda: Breath of the wild',
        img: '/images/answers/pregunta-1_respuesta-3.svg',
        value: 100
      }
    ])
  },
  {
    predicate: 'Juego de Mesa:',
    answers: shuffle([
      {
        label: 'Monopoly',
        img: '/images/answers/pregunta-2_respuesta-1.svg',
        value: 63
      },
      {
        label: 'WAR',
        img: '/images/answers/pregunta-2_respuesta-2.svg',
        value: 84
      },
      {
        label: 'Zombicide',
        img: '/images/answers/pregunta-2_respuesta-3.svg',
        value: 100
      }
    ])
  },
  {
    predicate: 'Series:',
    answers: shuffle([
      {
        label: 'Casa de Papel',
        img: '/images/answers/pregunta-3_respuesta-1.svg',
        value: 62
      },
      {
        label: 'Game of Thrones',
        img: '/images/answers/pregunta-3_respuesta-2.svg',
        value: 87
      },
      {
        label: 'Silicon Valley',
        img: '/images/answers/pregunta-3_respuesta-3.svg',
        value: 100
      }
    ])
  },
  {
    predicate: 'Shonen Champion:',
    answers: shuffle([
      {
        label: 'Goku',
        img: '/images/answers/pregunta-4_respuesta-1.svg',
        value: 67
      },
      {
        label: 'Naruto',
        img: '/images/answers/pregunta-4_respuesta-2.svg',
        value: 82
      },
      {
        label: 'Saitama',
        img: '/images/answers/pregunta-4_respuesta-3.svg',
        value: 100
      }
    ])
  },
  {
    predicate: 'La quiero ver ya:',
    answers: shuffle([
      {
        label: 'Avatar 2',
        img: '/images/answers/pregunta-5_respuesta-1.svg',
        value: 63
      },
      {
        label: 'Animales Fantásticos 2',
        img: '/images/answers/pregunta-5_respuesta-2.svg',
        value: 81
      },
      {
        label: 'Avengers Infinity War 2',
        img: '/images/answers/pregunta-5_respuesta-3.svg',
        value: 100
      }
    ])
  }
];

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', { questions })
);

module.exports = router;
