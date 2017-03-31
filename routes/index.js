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
            img: '/images/ballenas.png'
          },
          {
            label: 'Cine o TV',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Videojuegos',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Ver animés',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'No podés vivir sin…',
        answers: [
          {
            label: 'Laptop',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Celular',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Heladera',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Compu de escritorio con dos monitores',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Sabés…',
        answers: [
          {
            label: 'Inglés o Francés',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Klingon, élfico o dothraki',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'C++',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Ninguno',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Leés…',
        answers: [
          {
            label: 'Poco y nada',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Uno de autoayuda',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Novelas todo el tiempo',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Comics, el Hobbit y El Silmarillion',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Tenés cubo mágico…',
        answers: [
          {
            label: 'No',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Sí, pero nunca pude armarlo',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Lo armé con un tutorial',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: '¿Cuántas veces querés que lo arme y desarme?',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Tus amistades te suelen pedir…',
        answers: [
          {
            label: 'Plata',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Ropa',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Que les arregle la compu',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Debatir sobre Android o iOS',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Deportes…',
        answers: [
          {
            label: 'Fútbol',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Basket',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Esgrima',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Ajedrez',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Jugás a…',
        answers: [
          {
            label: 'FIFA',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Candy Crush',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'World of Warcraft',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Juegos de rol',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Tu definición de CRACK es…',
        answers: [
          {
            label: 'El Lucho',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Lio',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Neil DeGrass Tyson',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Wozniak',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      },
      {
        predicate: 'Para una ocasión especial te vestís…',
        answers: [
          {
            label: 'Casual, sencillito',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Lo que es moda, no incomoda',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Me dicen fashion victim',
            value: 0,
            img: '/images/ballenas.png'
          },
          {
            label: 'Con un cosplay',
            value: 0,
            img: '/images/ballenas.png'
          }
        ]
      }
    ]
  })
);

module.exports = router;
