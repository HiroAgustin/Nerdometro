const express = require('express');
const router = express.Router();

const questions = [
  {
    predicate: 'Video Juego:',
    answers: [
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
    ]
  },
  {
    predicate: 'Juego de Mesa:',
    answers: [
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
    ]
  },
  {
    predicate: 'Series:',
    answers: [
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
        value: 98
      }
    ]
  },
  {
    predicate: 'Shonen Champion:',
    answers: [
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
    ]
  },
  {
    predicate: 'La quiero ver ya:',
    answers: [
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
        value: 99
      }
    ]
  }
];

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', { questions })
);

module.exports = router;
