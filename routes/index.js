const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('index', {
    questions: [
      {
        predicate: 'Plan de viernes de noche…',
        answers: ['Salir', 'Cine o TV', 'Videojuegos', 'Ver animés']
      },
      {
        predicate: 'No podés vivir sin…',
        answers: ['Laptop', 'Celular', 'Heladera', 'Compu de escritorio con dos monitores']
      },
      {
        predicate: 'Sabés…',
        answers: ['Inglés o Francés', 'Klingon, élfico o dothraki', 'C++', 'Ninguno']
      },
      {
        predicate: 'Leés…',
        answers: ['Poco y nada', 'Uno de autoayuda', 'Novelas todo el tiempo', 'Comics, el Hobbit y El Silmarillion']
      },
      {
        predicate: 'Tenés cubo mágico…',
        answers: ['No', 'Sí, pero nunca pude armarlo', 'Lo armé con un tutorial', '¿Cuántas veces querés que lo arme y desarme?']
      },
      {
        predicate: 'Tus amistades te suelen pedir…',
        answers: ['Plata', 'Ropa', 'Que les arregle la compu', 'Debatir sobre Android o iOS']
      },
      {
        predicate: 'Deportes…',
        answers: ['Fútbol', 'Basket', 'Esgrima', 'Ajedrez']
      },
      {
        predicate: 'Jugás a…',
        answers: ['FIFA', 'Candy Crush', 'World of Warcraft', 'Juegos de rol']
      },
      {
        predicate: 'Tu definición de CRACK es…',
        answers: ['El Lucho', 'Lio', 'Neil DeGrass Tyson', 'Wozniak']
      },
      {
        predicate: 'Para una ocasión especial te vestís…',
        answers: ['Casual, sencillito', 'Lo que es moda, no incomoda', 'Me dicen fashion victim', 'Con un cosplay']
      }
    ]
  })
);

module.exports = router;
