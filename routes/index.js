const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', {
    questions: [
      {
        predicate: 'Tu plan de viernes:',
        answers: [
          {
            label: 'Salir',
            value: 30,
            img: '/images/answers/pregunta-1_respuesta-1.svg'
          },
          {
            label: 'Cine o Netflix',
            value: 50,
            img: '/images/answers/pregunta-1_respuesta-2.svg'
          },
          {
            label: 'Videojuegos',
            value: 70,
            img: '/images/answers/pregunta-1_respuesta-3.svg'
          },
          {
            label: 'Ver animés',
            value: 90,
            img: '/images/answers/pregunta-1_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: 'No podés vivir sin:',
        answers: [
          {
            label: 'Heladera',
            value: 30,
            img: '/images/answers/pregunta-2_respuesta-1.svg'
          },
          {
            label: 'Celular',
            value: 50,
            img: '/images/answers/pregunta-2_respuesta-3.svg'
          },
          {
            label: 'Notebook',
            value: 70,
            img: '/images/answers/pregunta-2_respuesta-2.svg'
          },
          {
            label: 'Compu de escritorio ¡con tres monitores!',
            value: 90,
            img: '/images/answers/pregunta-2_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: 'Dominás el:',
        answers: [
          {
            label: 'Yo hablar español del barrio',
            value: 30,
            img: '/images/answers/pregunta-3_respuesta-4.svg'
          },
          {
            label: 'Inglés o francés',
            value: 50,
            img: '/images/answers/pregunta-3_respuesta-1.svg'
          },
          {
            label: 'C++',
            value: 70,
            img: '/images/answers/pregunta-3_respuesta-3.svg'
          },
          {
            label: 'Klingon, élfico o dothraki',
            value: 90,
            img: '/images/answers/pregunta-3_respuesta-2.svg'
          }
        ]
      },
      {
        predicate: 'Leés:',
        answers: [
          {
            label: 'Los posts de mis amigos en Fb',
            value: 30,
            img: '/images/answers/pregunta-4_respuesta-1.svg'
          },
          {
            label: 'El best seller de moda o uno de autoayuda',
            value: 50,
            img: '/images/answers/pregunta-4_respuesta-2.svg'
          },
          {
            label: 'Cuentos, novelas, ensayos, poesía... lo que venga',
            value: 70,
            img: '/images/answers/pregunta-4_respuesta-3.svg'
          },
          {
            label: '¡Aguanten los comics, Tolkien y el Silmarillion!',
            value: 90,
            img: '/images/answers/pregunta-4_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: '¿​Tenés cubo Rubik?',
        answers: [
          {
            label: 'No',
            value: 30,
            img: '/images/answers/pregunta-5_respuesta-1.svg'
          },
          {
            label: 'Sí, pero nunca pude armarlo',
            value: 50,
            img: '/images/answers/pregunta-5_respuesta-2.svg'
          },
          {
            label: 'Lo armé con un tutorial',
            value: 70,
            img: '/images/answers/pregunta-5_respuesta-3.svg'
          },
          {
            label: '¿Cuántas veces querés que lo arme?',
            value: 90,
            img: '/images/answers/pregunta-5_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: 'Habilidades especiales:',
        answers: [
          {
            label: 'Una vez comí chivito y no me enchastré',
            value: 30,
            img: '/images/answers/pregunta-6_respuesta-1.svg'
          },
          {
            label: ['Organizo colectivos', '¡y logro que la gente me pague!'],
            value: 50,
            img: '/images/answers/pregunta-6_respuesta-2.svg'
          },
          {
            label: 'Todos me piden que les arregle la compu',
            value: 70,
            img: '/images/answers/pregunta-6_respuesta-3.svg'
          },
          {
            label: 'Me sé el árbol genealógico de los Lannister',
            value: 90,
            img: '/images/answers/pregunta-6_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: '¿​Deporte preferido?',
        answers: [
          {
            label: 'Fútbol',
            value: 30,
            img: '/images/answers/pregunta-7_respuesta-1.svg'
          },
          {
            label: 'Basket',
            value: 50,
            img: '/images/answers/pregunta-7_respuesta-2.svg'
          },
          {
            label: 'Esgrima',
            value: 70,
            img: '/images/answers/pregunta-7_respuesta-3.svg'
          },
          {
            label: 'Clasificar estrellas por características espectrales',
            value: 90,
            img: '/images/answers/pregunta-7_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: '¿​Qué juegos te entusiasman más?',
        answers: [
          {
            label: 'Ludo, damas, robamontón y conga',
            value: 30,
            img: '/images/answers/pregunta-8_respuesta-1.svg'
          },
          {
            label: 'La Viborita del Nokia 1100',
            value: 50,
            img: '/images/answers/pregunta-8_respuesta-2.svg'
          },
          {
            label: 'World of Warcraft',
            value: 70,
            img: '/images/answers/pregunta-8_respuesta-3.svg'
          },
          {
            label: 'Juegos de rol',
            value: 90,
            img: '/images/answers/pregunta-8_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: 'Tu definición de CRACK es…',
        answers: [
          {
            label: 'El Lucho',
            value: 30,
            img: '/images/answers/pregunta-9_respuesta-1.svg'
          },
          {
            label: 'Gandhi, Mandela y los que salvan ballenas',
            value: 50,
            img: '/images/answers/pregunta-9_respuesta-2.svg'
          },
          {
            label: 'Neil deGrass Tyson',
            value: 70,
            img: '/images/answers/pregunta-9_respuesta-3.svg'
          },
          {
            label: 'Cualquiera que sepa el nombre de los 150 Pokemones originales',
            value: 90,
            img: '/images/answers/pregunta-9_respuesta-4.svg'
          }
        ]
      },
      {
        predicate: 'Para una ocasión especial te vestís…',
        answers: [
          {
            label: 'Como cualquier día',
            value: 30,
            img: '/images/answers/pregunta-10_respuesta-1.svg'
          },
          {
            label: 'Formal',
            value: 50,
            img: '/images/answers/pregunta-10_respuesta-2.svg'
          },
          {
            label: 'Soy fashion victim',
            value: 70,
            img: '/images/answers/pregunta-10_respuesta-3.svg'
          },
          {
            label: 'Con un cosplay',
            value: 90,
            img: '/images/answers/pregunta-10_respuesta-4.svg'
          }
        ]
      }
    ]
  })
);

module.exports = router;
