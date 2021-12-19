
import { reactive} from "./reactive";

import alexPortrait from './assets/img/1.jpg';
import barneyPortrait from "./assets/img/2.jpg";
import ronPortrait from "./assets/img/3.jpg";
import katyPortrait from './assets/img/4.jpg';
import lusyPortrait from "./assets/img/5.jpg";
import matPortrait from "./assets/img/6.jpg";

export const userData = reactive([
  {
    id: 1,
    name: "Alex",
    description: "Knowledge itself is power",
    portrait: alexPortrait,
  },
  {
    id: 2,
    name: "Barney",
    description: "When an elephant is in trouble, even a frog will kick him",
    portrait: barneyPortrait,
  },
  {
    id: 3,
    name: "Ron",
    description: "Don’t poison someone whom you can kill with sweets",
    portrait: ronPortrait,
  },
  {
    id: 4,
    name: "Katy",
    description: "When an elephant is in trouble, even a frog will kick him",
    portrait: katyPortrait,
  },
  {
    id: 5,
    name: "Mat",
    description: "Don’t poison someone whom you can kill with sweets",
    portrait: matPortrait,
  },
  {
    id: 6,
    name: "Lusy",
    description: "Don’t poison someone whom you can kill with sweets",
    portrait: lusyPortrait,
  },
]);
