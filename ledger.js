#!/usr/bin/env node

'use strict';

const _ = require('lodash');
const fuzzy = require('fuzzy');
const Datastore = require('nedb');
const shopsDB = new Datastore({ filename: 'shops.db', autoload: true });
const commander = require('commander');
const string = require('string');

function getAll(dataStore) {
    return new Promise((resolve, reject) => {
        dataStore.find({}, (err, docs) => {
            if (err) reject(err);
            resolve(docs);
        });
    });
}

function fuzzyFind(elements, item) {
    let probableElements = _.map(elements, e => {
        let probably = fuzzy.filter(item, Object.keys(e));
        return _.map(probably, p => p.string);
    });

    return _.head(_.flattenDeep(probableElements));
}

function find(dataStore, item) {
    return new Promise((resolve, reject) => {
        getAll(dataStore).then(elements => {
            let probableElement = fuzzyFind(elements, item);
            let filtered = _.filter(elements, e => e[probableElement]);
            let output = _.map(filtered, f => {
                return {
                    location: f.location,
                    buy: f[probableElement].Buy,
                    sell: f[probableElement].Sell
                };
            })

            output.searchedFor = probableElement;

            resolve(output);
        });
    });
}

function printItems(items) {
    console.log(`Searched for: ${items.searchedFor}`);
    console.log(`Location\tBuy\tSell`);
    items.forEach(item => {
        console.log(`${string(item.location).padRight(15)}\t${item.buy}\t${item.sell}`);
    })
}

commander
    .arguments('<item>')
    .action(function(item) {
        find(shopsDB, item).then(items => {
            printItems(items);
        });
    })
    .parse(process.argv);



module.exports = {
    getAll
}
