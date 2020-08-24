export interface NamedNode {
  id: string;
  name: string;
}

export interface NamedNodeWithImage extends NamedNode {
  image: string;
}

export type Album = NamedNodeWithImage;
export type Artist = NamedNodeWithImage;

export type Discography = Album[];

export type ArtistWithDiscography<NodeType extends NamedNode> = NodeType & {
  albums: Discography;
};

export interface QueryData<NodeType extends NamedNode> {
  queryArtists: NodeType[];
}
