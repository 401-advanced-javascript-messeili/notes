#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log('Connection Failed', err.message);
  });

// const arg = new Input();

// const note = new Notes(arg);

// note.execute(arg);

// console.log('test', note.execute(arg));

const arg = new Input();

const note = new Notes(arg);

arg.valid() ? note.execute(arg).then(mongoose.disconnect) : help();

function help() {
  console.log(`
  Please Enter a correct value
  `);
}
