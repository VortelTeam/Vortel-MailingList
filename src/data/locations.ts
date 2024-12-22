import { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "ontario",
    name: "Ontario",
    coordinates: {
      x: 280,
      y: 220,
    },
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Yes, that is our Prime Minister!",
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        caption: "Beautiful Ontario landscape",
      },
    ],
  },
  // Add more locations as needed
];
