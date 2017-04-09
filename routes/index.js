const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', {
    questions: [
      {
        predicate: 'Plan de viernes de noche…',
        answers: [
          {
            label: 'Salir',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Cine o TV',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Videojuegos',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Ver animés',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'No podés vivir sin…',
        answers: [
          {
            label: 'Laptop',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Celular',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Heladera',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Compu de escritorio con dos monitores',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Sabés…',
        answers: [
          {
            label: 'Inglés o Francés',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Klingon, élfico o dothraki',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'C++',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Ninguno',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Leés…',
        answers: [
          {
            label: 'Poco y nada',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Uno de autoayuda',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Novelas todo el tiempo',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Comics, el Hobbit y El Silmarillion',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Tenés cubo mágico…',
        answers: [
          {
            label: 'No',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Sí, pero nunca pude armarlo',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Lo armé con un tutorial',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: '¿Cuántas veces querés que lo arme y desarme?',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Tus amistades te suelen pedir…',
        answers: [
          {
            label: 'Plata',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Ropa',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Que les arregle la compu',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Debatir sobre Android o iOS',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Deportes…',
        answers: [
          {
            label: 'Fútbol',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Basket',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Esgrima',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Ajedrez',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      },
      {
        predicate: 'Jugás a…',
        answers: [
          {
            label: 'FIFA',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Candy Crush',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'World of Warcraft',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Juegos de rol',
            value: 0,
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
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Neil deGrass Tyson',
            value: 0,
            img: '/images/neil.svg'
          },
          {
            label: 'Cualquiera que sepa el nombre de los 150 Pokemones originales',
            value: 0,
            img: '/images/pika.svg'
          }
        ]
      },
      {
        predicate: 'Para una ocasión especial te vestís…',
        answers: [
          {
            label: 'Casual, sencillito',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Lo que es moda, no incomoda',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Me dicen fashion victim',
            value: 0,
            img: '/images/ballena.svg'
          },
          {
            label: 'Con un cosplay',
            value: 0,
            img: '/images/ballena.svg'
          }
        ]
      }
    ]
  })
);

module.exports = router;
