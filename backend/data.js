const shopsData = [
  {
    name: "Магазин Океан",
    slug: "ocean",
    address: "ул. Республики, 42",
  },
  {
    name: "ТЦ Паруса",
    slug: "parus",
    address: "ул. Малыгина, 90",
  },
  {
    name: "ТЦ Монблан",
    slug: "monblan",
    address: "ул. Совесткая, 51к3",
  },
  {
    name: "ТЦ Калинка",
    slug: "kalinka",
    address: "Республики 65",
  },
  {
    name: "ДЦ Семён Дежнёв",
    slug: "dezhnev",
    address: "ул. Герцена, 96",
  },
  {
    name: "ЖК Новин",
    slug: "novin",
    address: "ул. Республики, 65",
  },
  {
    name: "ЖК Европейский",
    slug: "europ",
    address: "ул. Республики, 65",
  },
];
const shopsIems = {
  ocean: [
    {
      name: "Эспрессо",
      slug: "expresso",
      price: "109",
    },
    {
      name: "Фильтр-кофе",
      slug: "filter-coffe",
      price: "129",
    },
    {
      name: "Американо",
      slug: "americano",
      price: "129",
    },
    {
      name: "Капучино",
      slug: "capuchino",
      price: "129",
    },
    {
      name: "Флэт Уайт",
      slug: "flat-white",
      price: "129",
    },

    {
      name: "Латте",
      slug: "latte",
      price: "129",
    },
    {
      name: "Матча Латте",
      slug: "matcha-latte",
      price: "259",
    },
    {
      name: "Какао с зефирками",
      slug: "cocoa",
      price: "159",
    },
  ],
  parus: [
    {
      name: "Флэт Уайт",
      slug: "flat-white",
      price: "129",
    },

    {
      name: "Латте",
      slug: "latte",
      price: "129",
    },
    {
      name: "Матча Латте",
      slug: "matcha-latte",
      price: "259",
    },
    {
      name: "Какао с зефирками",
      slug: "cocoa",
      price: "159",
    },
  ],
  monblan: [
    {
      name: "Эспрессо",
      slug: "expresso",
      price: "109",
    },
    {
      name: "Фильтр-кофе",
      slug: "filter-coffe",
      price: "129",
    },
    {
      name: "Американо",
      slug: "americano",
      price: "129",
    },
    {
      name: "Капучино",
      slug: "capuchino",
      price: "129",
    },
  ],
  kalinka: [
    {
      name: "Эспрессо",
      slug: "expresso",
      price: "109",
    },
    {
      name: "Фильтр-кофе",
      slug: "filter-coffe",
      price: "129",
    },
    {
      name: "Американо",
      slug: "americano",
      price: "129",
    },
  ],
  dezhnev: [
    {
      name: "Флэт Уайт",
      slug: "flat-white",
      price: "129",
    },

    {
      name: "Латте",
      slug: "latte",
      price: "129",
    },
    {
      name: "Матча Латте",
      slug: "matcha-latte",
      price: "259",
    },
    {
      name: "Какао с зефирками",
      slug: "cocoa",
      price: "159",
    },
  ],
  novin: [
    {
      name: "Эспрессо",
      slug: "expresso",
      price: "109",
    },
    {
      name: "Фильтр-кофе",
      slug: "filter-coffe",
      price: "129",
    },
    {
      name: "Американо",
      slug: "americano",
      price: "129",
    },
    {
      name: "Капучино",
      slug: "capuchino",
      price: "129",
    },
    {
      name: "Флэт Уайт",
      slug: "flat-white",
      price: "129",
    },

    {
      name: "Латте",
      slug: "latte",
      price: "129",
    },
    {
      name: "Матча Латте",
      slug: "matcha-latte",
      price: "259",
    },
    {
      name: "Какао с зефирками",
      slug: "cocoa",
      price: "159",
    },
  ],
  europ: [
    {
      name: "Эспрессо",
      slug: "expresso",
      price: "109",
    },
    {
      name: "Фильтр-кофе",
      slug: "filter-coffe",
      price: "129",
    },
    {
      name: "Американо",
      slug: "americano",
      price: "129",
    },
    {
      name: "Капучино",
      slug: "capuchino",
      price: "129",
    },
  ],
};

const detailData = {
  expresso: {
    name: "Эспрессо",
    slug: "expresso",
    size: "60",
    price: "109",
    desc: "Эспрессо - это основа всех кофейных напитков, малого объема, с сбалансированным вкусом и тонкими нотками вишни, лимона и темного шоколада. Превосходно подойдёт для моментального пробуждения.",
  },
  "filter-coffe": {
    name: "Фильтр-кофе",
    slug: "filter-coffe",
    size: "15",
    price: "129",
    desc: "В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день",
  },
  americano: {
    name: "Американо",
    slug: "americano",
    size: "350",
    price: "129",
    desc: "В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день",
  },
  capuchino: {
    name: "Капучино",
    slug: "capuchino",
    size: "350",
    price: "129",
    desc: "Идеально сбалансированный кофейный напиток, для тех кто ценит классику и постоянство. Готовится на двух эспрессо с долей молока 80%",
  },
  "flat-white": {
    name: "Флэт Уайт",
    slug: "flat-white",
    size: "220",
    price: "129",
    desc: "Флэт уайт подходит тем, кто хочет проснуться, или тем, кто в кофейных напитках ценит в первую очередь вкус кофе.",
  },
  latte: {
    name: "Латте",
    slug: "latte",
    size: "350",
    price: "129",
    desc: "Нежный, молочный напиток с легким вкусом кофе. Готовится на одном эспрессо. 90% молока. Латте подходит для любого времени суток",
  },
  "matcha-latte": {
    name: "Матча Латте",
    slug: "matcha-latte",
    size: "291",
    price: "259",
    desc: "Отличное сочетание чая матча, обладающего потрясающим бодрящим эффектом, избавляющим от усталости и придающим сил, с кокосовым молоком. Латте матча превосходен для тех, кто следит за своим здоровьем",
  },
  cocoa: {
    name: "Какао с зефирками",
    slug: "kakao",
    size: "255",
    price: "159",
    desc: "Какао имеет яркий шоколадный вкус и сливочную текстуру, готовится на основе натурального горячего шоколада и молока",
  },
};

const slugs = [""];

module.exports = {
  shopsIems,
  shopsData,
  detailData,
};
