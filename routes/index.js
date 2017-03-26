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
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Cine o TV',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Videojuegos',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Ver animés',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'No podés vivir sin…',
        answers: [
          {
            label: 'Laptop',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Celular',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Heladera',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Compu de escritorio con dos monitores',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Sabés…',
        answers: [
          {
            label: 'Inglés o Francés',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Klingon, élfico o dothraki',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'C++',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Ninguno',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Leés…',
        answers: [
          {
            label: 'Poco y nada',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Uno de autoayuda',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Novelas todo el tiempo',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Comics, el Hobbit y El Silmarillion',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Tenés cubo mágico…',
        answers: [
          {
            label: 'No',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Sí, pero nunca pude armarlo',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Lo armé con un tutorial',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: '¿Cuántas veces querés que lo arme y desarme?',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Tus amistades te suelen pedir…',
        answers: [
          {
            label: 'Plata',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Ropa',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Que les arregle la compu',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Debatir sobre Android o iOS',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Deportes…',
        answers: [
          {
            label: 'Fútbol',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Basket',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Esgrima',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Ajedrez',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Jugás a…',
        answers: [
          {
            label: 'FIFA',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Candy Crush',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'World of Warcraft',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Juegos de rol',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Tu definición de CRACK es…',
        answers: [
          {
            label: 'El Lucho',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Lio',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Neil DeGrass Tyson',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Wozniak',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      },
      {
        predicate: 'Para una ocasión especial te vestís…',
        answers: [
          {
            label: 'Casual, sencillito',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Lo que es moda, no incomoda',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Me dicen fashion victim',
            value: 0,
            img: '/images/sample-1.jpg'
          },
          {
            label: 'Con un cosplay',
            value: 0,
            img: '/images/sample-1.jpg'
          }
        ]
      }
    ]
  })
);

module.exports = router;
