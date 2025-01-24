export interface GalleryImage {
  src: string;
  caption: string;
}

export interface PinData {
  id: string;
  name: string;
  coordinates: {
    x: number;
    y: number;
  };
}
