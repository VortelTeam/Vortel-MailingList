export interface Location {
    id: string
    name: string
    coordinates: {
      x: number
      y: number
    }
    images: GalleryImage[]
  }
  
  export interface GalleryImage {
    url: string
    caption: string
  }