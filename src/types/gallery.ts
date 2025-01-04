export interface GalleryImage {
  src: string;
  caption: string;
}

export interface PinData {
  id: string;
  name: string;
  images: GalleryImage[];
  coordinates: {
    x: number;
    y: number;
  };
}
