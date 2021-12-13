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

const app = document.getElementById("app");

const vnode = h("div", { class: { container: true}}, [h("div", { class: { users: true}} , [h("span", "Hello")])]);

patch(app, vnode);
