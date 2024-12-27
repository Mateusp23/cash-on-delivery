export const convertToEmbedUrl = (url) => {
  const videoId = url.split("/").pop().split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};
