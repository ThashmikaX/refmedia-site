// galleryText.ts

export type GalleryContent = {
  textContent: {
    title: string;
    date: string;
    description: string;
  };
  photographers: string[];
  images: string[];
  albumLink: string;
};

export const galleryContents: Record<string, GalleryContent[]> = {
  July: [
    {
      textContent: {
        title: "THREE LANKA Project - Pre Closure Meeting and Conference",
        date: "16th July 2024",
        description:
          "Participants reflected on their journey through significant events and milestones, from international partnership meetings to technical seminars. This EU Erasmus+ funded initiative has been instrumental in developing a skilled workforce in renewable energy across Sri Lanka. As the project approaches its closure, the team celebrates the progress made in training and certifying technicians, engineers, and project managers in solar, wind, and biogas technologies. The collaboration across five universities has paved the way for a sustainable future.",
      },
      photographers: ["Hirun Seneviratne", "Chamika Rohan"],
      images: [
        "/assets/galleryPage/july1.jpeg",
        "/assets/galleryPage/july3.jpeg",
        "/assets/galleryPage/july2.jpeg",
        "/assets/galleryPage/july4.jpeg",
        "/assets/galleryPage/july5.jpeg",
      ],
      albumLink: "#",
    },
    // Add more entries if needed
  ],
  // Add more months if needed
  June: [
    {
      textContent: {
        title: "ACEPS 2024",
        date: "27th June 2024",
        description:
          "10th International Symposium on Advances in Civil and Environmental Engineering Practices for Sustainable Development held on 27th June 2024 was an event Organized by Civil and Environmental Engineering Society, Faculty of Engineering , University of Ruhuna.",
      },
      photographers: ["Kasun dilshan", "Lakshitha udayanga"],
      images: [
        "/assets/galleryPage/june1.jpeg",
        "/assets/galleryPage/june3.jpeg",
        "/assets/galleryPage/june2.jpeg",
        "/assets/galleryPage/june4.jpeg",
        "/assets/galleryPage/june5.jpeg",
      ],
      albumLink: "#",
    },
  ],
};
