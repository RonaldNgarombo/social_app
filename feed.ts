const feed = [
  {
    id: 1,
    image: require("./assets/feed1.jpeg"),
    content: "It's been a very good time, thanks! @maryjane",
    likes: 24,
    comments: 23,
    views: 680,
  },

  {
    id: 2,
    image: require("./assets/feed2.jpeg"),
    content: "Street photography in downtown LA",
    likes: 85,
    comments: 4,
    views: 192,
  },

  {
    id: 3,
    image: require("./assets/feed3.jpeg"),
    content:
      "Enjoying the sunset in Venice Beach! What a beautiful day spent with friends!",
    likes: 856,
    comments: 455,
    views: 995,
  },

  {
    id: 4,
    image: require("./assets/feed4.jpeg"),
    content: "Out here camping in the wilderness. Such an amazing place",
    likes: 765,
    comments: 34,
    views: 564,
  },

  {
    id: 5,
    image: require("./assets/feed5.jpeg"),
    content: "Just another day hiking in the mountains of Switzerland",
    likes: 658,
    comments: 457,
    views: 543,
  },

  {
    id: 6,
    image: require("./assets/feed6.jpeg"),
    content: "Feeling blessed to be able to travel and see the world",
    likes: 456,
    comments: 765,
    views: 564,
  },
];

export type FeedType = {
  id: number;
  image: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
};

export default feed;
