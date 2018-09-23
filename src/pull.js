import { IMAGE_OPTIONS } from "./constatns";

export const pullShuffledImage = () => {
  const index = Math.floor(Math.random() * IMAGE_OPTIONS.length);
  return { index, image: IMAGE_OPTIONS[index] };
};

export const getImage = index => {
  if (0 <= index && index < IMAGE_OPTIONS.length) {
    return IMAGE_OPTIONS[index];
  }
  return null;
};
