const express = require('express');
const router = express.Router();

const questions = [
  {
    predicate: 'Video Juego:',
    answers: [
      {
        label: 'Fortnite',
        img: '/images/answers/pregunta-1_respuesta-1.svg',
        value: 60
      },
      {
        label: 'World of Warcraft',
        img: '/images/answers/pregunta-1_respuesta-2.svg',
        value: 80
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
        value: 60
      },
      {
        label: 'WAR',
        img: '/images/answers/pregunta-2_respuesta-2.svg',
        value: 80
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
        value: 60
      },
      {
        label: 'Game of Thrones',
        img: '/images/answers/pregunta-3_respuesta-2.svg',
        value: 80
      },
      {
        label: 'Silicon Valley',
        img: '/images/answers/pregunta-3_respuesta-3.svg',
        value: 100
      }
    ]
  },
  {
    predicate: 'Shonen Champion:',
    answers: [
      {
        label: 'Goku',
        img: '/images/answers/pregunta-4_respuesta-1.svg',
        value: 60
      },
      {
        label: 'Naruto',
        img: '/images/answers/pregunta-4_respuesta-2.svg',
        value: 80
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
        value: 60
      },
      {
        label: 'Fantastic Beast 2',
        img: '/images/answers/pregunta-5_respuesta-2.svg',
        value: 80
      },
      {
        label: 'Avengers Infinity War 2',
        img: '/images/answers/pregunta-5_respuesta-3.svg',
        value: 100
      }
    ]
  }
];

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', { questions })
);

module.exports = router;
