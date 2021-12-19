import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

import { watchEffect } from "./reactive";
import { userData } from "./userData";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const app = document.getElementById("app");

const data = {
  names: [],
  descriptions: [],
  portraits: [],
  id: 7
}

const addUser = function () {
  let nameRandom = data.names[Math.floor(Math.random() * data.names.length)];
  let descriptionRandom = data.descriptions[Math.floor(Math.random() * data.descriptions.length)];
  let portraitRandom = data.portraits[Math.floor(Math.random() * data.portraits.length)];

  userData.push({ id: data.id, name: nameRandom, description: descriptionRandom, portrait: portraitRandom });
  data.id++;
}

const delUser = function (id) {
  const index = userData.indexOf(userData.find((user) => user.id === id));

  if (index > -1) {
    userData.splice(index, 1);
  }
}

const getData = userData.map((user) => {
  data.names.push(user.name);
  data.descriptions.push(user.description);
  data.portraits.push(user.portrait);
});

const render = () => h("div", { class: { container: true } },
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
          h("button", { class: { 'user__delete-btn': true, 'delete-btn': true }, on: { click: () => delUser(user.id) } }, [
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

let previousVnode = null;
watchEffect(() => {
  const vnode = render();
  patch(previousVnode || app, vnode, getData);
  previousVnode = vnode;
});
