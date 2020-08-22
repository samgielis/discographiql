export interface NamedNode {
  id: string;
  name: string;
}

export interface NamedNodeWithImage extends NamedNode {
  image: string;
}

export type Album = NamedNodeWithImage;

export type Discography = Album[];

export interface ArtistWithDiscography extends NamedNode {
  albums: Discography;
}
