const Datastore = require('nedb');
const db = new Datastore({ filename: 'shops.db', autoload: true });

db.insert({
    "location": "Venderbight",
    "name": "Arcade of Sighs",
    "Cask of Mushroom Wine": {
        "Buy": "-",
        "Sell": 23
    },
    "Foxfire Candles": {
        "Buy": "-",
        "Sell": 33
    },
    "Fuel": {
        "Buy": 20,
        "Sell": 2
    },
    "Supplies": {
        "Buy": 30,
        "Sell": 8
    }
});

db.insert({
    "location": "Venderbight",
    "name": "Hollow Temple",
    "Memory of Distant Shores": {
        "Buy": "-",
        "Sell": 12
    },
    "Recent News": {
        "Buy": "-",
        "Sell": 10
    },
    "Vision of the Surface": {
        "Buy": "-",
        "Sell": 15
    },
    "Monstrous Almanac": {
        "Buy": "-",
        "Sell": 1000
    }
});

db.insert({
    "location": "Venderbight",
    "name": "The Charnel Lounge",
    "Tomb Colonist": {
        "Buy": "-",
        "Sell": 15
    }
});
