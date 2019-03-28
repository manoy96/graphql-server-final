"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Rocket",
    embedded: false
  },
  {
    name: "Model",
    embedded: false
  },
  {
    name: "Pokemon",
    embedded: false
  },
  {
    name: "Ability",
    embedded: false
  },
  {
    name: "Form",
    embedded: false
  },
  {
    name: "GameIndex",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Move",
    embedded: false
  },
  {
    name: "Species",
    embedded: false
  },
  {
    name: "Sprite",
    embedded: false
  },
  {
    name: "Stat",
    embedded: false
  },
  {
    name: "Type",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
