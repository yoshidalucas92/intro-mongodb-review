//  criação das collections
use proffyDB;

//  aulas
db.classes.insertMany(
  [
    {
        "_id": 1,
        "user_id": 1,
        "subject": "Desenvolvimento",
        "cost": 80.0
    },
    {
        "_id": 2,
        "user_id": 2,
        "subject": "Educação Física",
        "cost": 33.0
    },
    {
        "_id": 3,
        "user_id": 3,
        "subject": "Português",
        "cost": 25.0
    }
]
);

// professores
db.users.insertMany(
  [
    {
        "_id": 1,
        "avatar": "https://avatars2.githubusercontent.com/u/52613749?s=460&u=5740f41f865cad8715d42dfb08d703dfe39a22d6&v=4",
        "name": "Orlando Messias",
        "bio": "Entusiasta das melhores tecnologias em web. Apaixonado por desenvolvimento e pela área da educação. Já trabalhou mais de 10 anos como instrutor de Informática.",
        "whatsapp": "31-98375-3421"
    },
    {
        "_id": 2,
        "avatar": "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        "name": "Diego Fernandes",
        "bio": "CTO at @Rocketseat. Passionate about education and changing people's lives through programming",
        "whatsapp": "11-98399-3211"
    },
    {
        "_id": 3,
        "avatar": "https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4",
        "name": "Tiago Marinho",
        "bio": "Software Developer React Native | React | NodeJS",
        "whatsapp": "21-98356-1206"
    }
]
);

//  horários
db.schedules.insertMany(
  [
    {
        "_id": 1,
        "class_id": 1,
        "from": 480,
        "to": 720,
        "week_day": 1
    },
    {
        "_id": 2,
        "class_id": 1,
        "from": 600,
        "to": 1020,
        "week_day": 3
    },
    {
        "_id": 3,
        "class_id": 1,
        "from": 480,
        "to": 720,
        "week_day": 4
    },
    {
        "_id": 4,
        "class_id": 2,
        "from": 480,
        "to": 780,
        "week_day": 1
    },
    {
        "_id": 5,
        "class_id": 2,
        "from": 840,
        "to": 1140,
        "week_day": 5
    },
    {
        "_id": 6,
        "class_id": 3,
        "from": 480,
        "to": 780,
        "week_day": 2
    }
]
);

// conexões orlando explicará sábado
db.connections.insertMany([
    {
        "_id": 1,
        "user_id": 1,
        "created_at": "2020-09-07 22:06:18"
    },
    {
        "_id": 2,
        "user_id": 1,
        "created_at": "2020-09-07 22:12:53"
    },
    {
        "_id": 3,
        "user_id": 1,
        "created_at": "2020-09-07 22:18:10"
    }
]);
