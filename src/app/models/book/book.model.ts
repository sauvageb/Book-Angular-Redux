export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    },
    industryIdentifiers: any[];
  };
}
