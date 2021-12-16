import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

import alexPortrait from './assets/img/1.jpg';
import barneyPortrait from "./assets/img/2.jpg";
import ronPortrait from "./assets/img/3.jpg";
import katyPortrait from './assets/img/4.jpg';
import lusyPortrait from "./assets/img/5.jpg";
import matPortrait from "./assets/img/6.jpg";

const app = document.getElementById("app");

const userData = [
  {
    name: "Alex",
    description: "Knowledge itself is power",
    portrait: alexPortrait,
  },
  {
    name: "Barney",
    description: "When an elephant is in trouble, even a frog will kick him",
    portrait: barneyPortrait,
  },
  {
    name: "Ron",
    description: "Don’t poison someone whom you can kill with sweets",
    portrait: ronPortrait,
  },
  {
    name: "Katy",
    description: "When an elephant is in trouble, even a frog will kick him",
    portrait: katyPortrait,
  },
  {
    name: "Mat",
    description: "Don’t poison someone whom you can kill with sweets",
    portrait: matPortrait,
  },
  {
    name: "Lusy",
    description: "Don’t poison someone whom you can kill with sweets",
    portrait: lusyPortrait,
  },
]

const vnode = h("div", { class: { container: true } },
  [h("div", { class: { users: true } },
    [h("ul", { class: { users__list: true } },
      userData.map((d) =>
        h("li", { class: { users__item: true, user: true, } }, [
          h("picture", { class: { user__img: true } },
            [h("img", { props: { alt: `portrait-${d.name}`, src: d.portrait } },)],
          ),
          h("div", { class: { user__info: true } }, [
            h("h2", { class: { user__name: true } }, d.name),
            h("p", { class: { user__description: true } }, d.description)],
          )],
        )
      )
    )]
  )]
);

patch(app, vnode);
