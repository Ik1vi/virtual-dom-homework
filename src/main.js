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
import matPortrait from "./assets/img/5.jpg";
import lusyPortrait from "./assets/img/6.jpg";

const app = document.getElementById("app");

// const userData = [
//   {
//     name: "Barneyasfs",
//     description: "Knowledge itself is power",
//     portrait: barneyPortrait,
//   }
// ]

const vnode = h("div", { class: { container: true } },
  [h("div", { class: { users: true } },
    [h("ul", { class: { users__list: true } }, [
      h("li", { class: { users__item: true, user: true, } }, [
        h("picture", { class: { user__img: true } },
          [h("img", { props: { alt: "portrait", src: alexPortrait} }, )],
        ),
        h("div", { class: { user__info: true } }, [
          h("h2", { class: { user__name: true } }, "Alex"),
          h("p",  { class: { user__description: true } }, "When an elephant is in trouble, even a frog will kick him")],
        )],
      ),

      // userData.map((d) =>
      //   h("li", { class: { users__item: true, user: true, } }, [
      //     h("picture", { class: { user__img: true } },
      //       [h("img", { props: { alt: "portrait", src: d.portrait} }, )],
      //     ),
      //     h("div", { class: { user__info: true } }, [
      //       h("h2", { class: { user__name: true } }, d.name),
      //       h("p",  { class: { user__description: true } }, d.description)],
      //     )],
      //   )
      // ),

      h("li", { class: { users__item: true, user: true, } }, [
        h("picture", { class: { user__img: true } },
          [h("img", { props: { alt: "portrait", src: barneyPortrait} }, )],
        ),
        h("div", { class: { user__info: true } }, [
          h("h2", { class: { user__name: true } }, "Barney"),
          h("p",  { class: { user__description: true } }, "Knowledge itself is power")],
        )],
      ),

      h("li", { class: { users__item: true, user: true, } }, [
        h("picture", { class: { user__img: true } },
          [h("img", { props: { alt: "portrait", src: ronPortrait} }, )],
        ),
        h("div", { class: { user__info: true } }, [
          h("h2", { class: { user__name: true } }, "Ron"),
          h("p",  { class: { user__description: true } }, "When an elephant is in trouble, even a frog will kick him")],
        )],
      ),

      h("li", { class: { users__item: true, user: true, } }, [
        h("picture", { class: { user__img: true } },
          [h("img", { props: { alt: "portrait", src: katyPortrait} }, )],
        ),
        h("div", { class: { user__info: true } }, [
          h("h2", { class: { user__name: true } }, "Katy"),
          h("p",  { class: { user__description: true } }, "Don’t poison someone whom you can kill with sweets")],
        )],
      ),

      h("li", { class: { users__item: true, user: true, } }, [
        h("picture", { class: { user__img: true } },
          [h("img", { props: { alt: "portrait", src: matPortrait} }, )],
        ),
        h("div", { class: { user__info: true } }, [
          h("h2", { class: { user__name: true } }, "Mat"),
          h("p",  { class: { user__description: true } }, "When an elephant is in trouble, even a frog will kick him")],
        )],
      ),

      h("li", { class: { users__item: true, user: true, } }, [
        h("picture", { class: { user__img: true } },
          [h("img", { props: { alt: "portrait", src: lusyPortrait} }, )],
        ),
        h("div", { class: { user__info: true } }, [
          h("h2", { class: { user__name: true } }, "Lusy"),
          h("p",  { class: { user__description: true } }, "Don’t poison someone whom you can kill with sweets")],
        )],
      )]
    )]
  )]
);

patch(app, vnode);
