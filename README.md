# proms
[![Is this project finished ?](https://img.shields.io/badge/finished-yes-brightgreen.svg)]

A Very Simple Promise Simulator for Old Browsers

[![NPM](https://nodei.co/npm/proms.png)](https://nodei.co/npm/proms/)

## "Why should I use it ?!!"
Because it works in any javascript standards, and it does'nt matter that your code
is executed in old browsers or the new ones.

## "What does it support ?!!"
It can only understand `then`, `catch`, and `finally`.

## "How can I test it ?"
Here is an example which you can compare native `Promise` with this package ((`proms`)) in node.js:
```javascript
"use strict";

const fs = require("fs");
const proms = require("proms");

console.log("======================== Use The JavaScript Built-in Promise");
logDirListPromise()
    .then(msg => console.error(`1. ${msg}`))
    .then(msg => console.log(`2. ${msg}`))
    .catch(msg => console.error(msg))
    .then(() => {

        console.log("======================== Then Use This Package");
        logDirListProms()
            .then(msg => console.error(`1. ${msg}`))
            .then(msg => console.log(`2. ${msg}`))
            .catch(msg => console.error(msg))
            .finally(msg /*message of resolve or reject*/ => {
                console.log(`The .finally() msg is => ${msg}`);
            });

    });


function logDirListPromise(){

    return new Promise((resolve, reject) => {

        fs.readdir("./", (err, files) => {
            if(err)
                return reject(err);
            files.forEach(elem => console.log(elem));
            resolve("Hello");
        });

    });

}

function logDirListProms(){

    return new proms((resolve, reject) => {

        fs.readdir("./", (err, files) => {
            if(err)
                return reject(err);
            files.forEach(elem => console.log(elem));
            resolve("Hello");
        });

    });

}

```

## Wanna Learn The Usage of Promises ?
Here is a [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
for those who want to learn promises, recently.

### Contribution
Contribute with me, guys !

Help me close the current ((or the future)) issues together in github...

###### ❤️ Thanks for using