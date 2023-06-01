export default interface Post {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    author: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
  };
}
