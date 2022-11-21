const metas = [
  {
    title: "Hour Glass Meta title",
    description: "This is a hour glass",
    image:
      "https://media.alle.com/image/upload/v1597159240/alle/icons/HOUR_GLASS_NUDE.png",
  },
  {
    title: "Gift Meta title",
    description: "This is a gift",
    image:
      "https://media.alle.com/image/upload/v1597159006/alle/icons/GIFT_NUDE.png",
  },
  {
    title: "Coin Meta title",
    description: "This is a coin",
    image:
      "https://media.alle.com/image/upload/v1597159146/alle/icons/COIN_NUDE.png",
  },
];

module.exports.getMetaById = (id) => metas[id - 1];
