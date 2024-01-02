const products = [
  {
    id: "airforce1",
    description: "Nike Air Force 1 blacked out",
    reviews: [
      {
        rating: 5,
        comment: "Best and most stylish shoes.",
      },
      {
        rating: 4,
        comment:
          "Good shoes but i can find better with the same price or lower.",
      },
    ],
    price: 115.11,
  },
  {
    id: "jordan4",
    description: "Nike Jordan 4 white",
    reviews: [
      {
        rating: 5,
        comment: "Best basketball shoes.",
      },
      {
        rating: 3,
        comment: "Good shoes but the price is to high.",
      },
    ],
    price: 300.51,
  },
];

const getAllProducts = () => {
  return products;
};

module.exports={getAllProducts};
