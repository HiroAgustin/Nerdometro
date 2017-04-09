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
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Cine o Netflix',
            value: 40,
            img: '/images/ballena.svg'
          },
          {
            label: 'Videojuegos',
            value: 70,
            img: '/images/ballena.svg'
          },
          {
            label: 'Ver animés',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'No podés vivir sin:',
        answers: [
          {
            label: 'Heladera',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Notebook',
            value: 75,
            img: '/images/ballena.svg'
          },
          {
            label: 'Celular',
            value: 20,
            img: '/images/ballena.svg'
          },
          {
            label: 'Compu de escritorio ¡con tres monitores!',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Dominás el:',
        answers: [
          {
            label: 'Inglés o Francés',
            value: 28,
            img: '/images/ballena.svg'
          },
          {
            label: 'Klingon, élfico o dothraki',
            value: 100,
            img: '/images/ballena.svg'
          },
          {
            label: 'C++',
            value: 80,
            img: '/images/ballena.svg'
          },
          {
            label: 'Yo hablar español del barrio',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Leés:',
        answers: [
          {
            label: 'Los posts de mis amigos en Fb',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'El best seller de moda o uno de autoayuda',
            value: 47,
            img: '/images/ballena.svg'
          },
          {
            label: 'Cuentos, novelas, ensayos, poesía... lo que venga',
            value: 66,
            img: '/images/ballena.svg'
          },
          {
            label: '¡Aguanten los comics, Tolkien y el Silmarillion!',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Tenés cubo Rubik',
        answers: [
          {
            label: 'No',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Sí, pero nunca pude armarlo',
            value: 33,
            img: '/images/ballena.svg'
          },
          {
            label: 'Lo armé con un tutorial',
            value: 84,
            img: '/images/ballena.svg'
          },
          {
            label: '¿Cuántas veces querés que lo arme?',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Habilidades especiales:',
        answers: [
          {
            label: 'Una vez comí chivito y no me enchastré',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Organizo colectivos ¡y logro que la gente me pague!',
            value: 40,
            img: '/images/ballena.svg'
          },
          {
            label: 'Todos me piden que les arregle la compu',
            value: 70,
            img: '/images/ballena.svg'
          },
          {
            label: 'Me sé el árbol genealógico de los Lannister',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: '¿​Deporte preferido?',
        answers: [
          {
            label: 'Fútbol',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Basket',
            value: 15,
            img: '/images/ballena.svg'
          },
          {
            label: 'Esgrima',
            value: 80,
            img: '/images/ballena.svg'
          },
          {
            label: 'Ajedrez',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Qué juegos te entusiasman más:',
        answers: [
          {
            label: 'Ludo, damas, robamontón y conga',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'La Viborita del Nokia 1100',
            value: 28,
            img: '/images/ballena.svg'
          },
          {
            label: 'World of Warcraft',
            value: 91,
            img: '/images/ballena.svg'
          },
          {
            label: 'Juegos de rol',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Tu definición de CRACK es…',
        answers: [
          {
            label: 'El Lucho',
            value: 0,
            img: '/images/luis.svg'
          },
          {
            label: 'Gandhi, Mandela y los que salvan ballenas',
            value: 33,
            img: '/images/ballena.svg'
          },
          {
            label: 'Neil deGrass Tyson',
            value: 66,
            img: '/images/neil.svg'
          },
          {
            label: 'Cualquiera que sepa el nombre de los 150 Pokemones originales',
            value: 100,
            img: '/images/pika.svg'
          }
        ]
      },
      {
        predicate: 'Para una ocasión especial te vestís…',
        answers: [
          {
            label: 'Como cualquier día',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Formal',
            value: 23,
            img: '/images/ballena.svg'
          },
          {
            label: 'Soy fashion victim',
            value: 75,
            img: '/images/ballena.svg'
          },
          {
            label: 'Con un cosplay',
            value: 100,
            img: '/images/ballena.svg'
          }
        ]
      }
    ]
  })
);

module.exports = router;
