import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Amazing I'm absolutely in love with the product!",
  },
  {
    id: 2,
    rating: 9,
    text: 'Great quality for a reasonable price. Love it!',
  },
  {
    id: 3,
    rating: 7,
    text: 'I love the selection of products and quality, but delivery takes quite a long time',
  },
]);
