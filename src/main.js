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
]

const data = {
  names: [],
  descriptions: [],
  portraits: [],
  id: 7
}

const addUser = function() {
  let nameRandom = data.names[Math.floor(Math.random() * data.names.length)];
  let descriptionRandom = data.descriptions[Math.floor(Math.random() * data.descriptions.length)];
  let portraitRandom = data.portraits[Math.floor(Math.random() * data.portraits.length)];
  let idRandom = Math.floor((Math.random() * 1000) + data.id);

  userData.push({id: idRandom, name: nameRandom, description: descriptionRandom, portrait: portraitRandom});
}

const delUser = function(e) {
  console.log(e.target.value)
  // console.log(userData.find((el) => el.id === e.target.id))
}

const getData = userData.map((user) => {
  data.names.push(user.name);
  data.descriptions.push(user.description);
  data.portraits.push(user.portrait);
});

const vnode = h("div", { class: { container: true } },
  [h("div", { class: { users: true } },
    [h("ul", { class: { users__list: true } },
      userData.map((user) =>
        h("li", { class: { users__item: true, user: true, } }, [
          h("picture", { class: { user__img: true } },
            [h("img", { props: { alt: `portrait-${user.name}`, src: user.portrait } },)],
          ),
          h("div", { class: { user__info: true } }, [
            h("h2", { class: { user__name: true } }, user.name),
            h("p", { class: { user__description: true } }, user.description)],
          ),
          h("button", { class: { 'user__delete-btn': true, 'delete-btn': true }, on: { click: delUser } }, [
            h("span"),
            h("span")
          ])
        ])
      )
    ),
    h("button", { class: { 'users__add-btn': true, 'add-btn': true }, on: { click: addUser } }, '+')
    ])
  ]
);

patch(app, vnode, getData);
