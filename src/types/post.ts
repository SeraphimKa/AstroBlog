export default interface Post {
  url: string;
  frontmatter: {
    title: string;
    pubDate: string;
    author: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
  };
}
