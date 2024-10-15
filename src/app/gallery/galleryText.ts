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
        title: "ACEPS 2024",
        date: "7th July 2024",
        description:
          "10th International Symposium on Advances in Civil and Environmental Engineering Practices for Sustainable Development held on 27th June 2024 was an event Organized by Civil and Environmental Engineering Society, Faculty of Engineering , University of Ruhuna.",
      },
      photographers: ["Kasun dilshan", "Lakshitha udayanga"],
      images: [
        "/assets/galleryPage/albums/4_aceps/1.jpg",
        "/assets/galleryPage/albums/4_aceps/2.jpg",
        "/assets/galleryPage/albums/4_aceps/3.jpg",
        "/assets/galleryPage/albums/4_aceps/4.jpg",
        "/assets/galleryPage/albums/4_aceps/5.jpg",
      ],
      albumLink: "https://www.facebook.com/media/set/?vanity=refmediauor&set=a.911725750967747",
    },
    {
      textContent: {
        title: "Three Lanka Project: Pre-Closure Meeting and Dissemination",
        date: "16th July 2024",
        description:
          "Participants reflected on their journey through significant events and milestones, from international partnership meetings to technical seminars. This EU Erasmus+ funded initiative has been instrumental in developing a skilled workforce in renewable energy across Sri Lanka. As the project approaches its closure, the team celebrates the progress made in training and certifying technicians, engineers, and project managers in solar, wind, and biogas technologies. The collaboration across five universities has paved the way for a sustainable future.",
      },
      photographers: ["Hirun Seneviratne", "Chamika Rohan"],
      images: [
        "/assets/galleryPage/albums/3_three_lanka/1.jpg",
        "/assets/galleryPage/albums/3_three_lanka/2.jpg",
        "/assets/galleryPage/albums/3_three_lanka/3.jpg",
        "/assets/galleryPage/albums/3_three_lanka/4.jpg",
        "/assets/galleryPage/albums/3_three_lanka/5.jpg",
      ],
      albumLink: "https://www.facebook.com/media/set?vanity=refmediauor&set=a.917817343691921",
    },
    {
      textContent: {
        title: "ETABS Workshop",
        date: "16th July 2024",
        description:
          "Workshop about ETABS and related technogies",
      },
      photographers: ["Mesith Rathnayake"],
      images: [
        "/assets/galleryPage/albums/2_etabs/1.jpg",
        "/assets/galleryPage/albums/2_etabs/2.jpg",
        "/assets/galleryPage/albums/2_etabs/3.jpg",
        "/assets/galleryPage/albums/2_etabs/4.jpg",
        "/assets/galleryPage/albums/2_etabs/5.jpg",
      ],
      albumLink: "https://www.facebook.com/media/set?vanity=refmediauor&set=a.925719346235054",
    },
  ],
  June: [
    {
      textContent: {
        title: "Farewell Ceremony Honoring Mr. Daham Liyanage",
        date: "1st August 2024",
        description:
          "On August 1st, 2024, the Department of Mechanical & Manufacturing Engineering at University of Ruhuna gathered to bid farewell to Mr. Daham Liyanage. We celebrated his dedication, passion, and the lasting legacy he leaves behind. Thank you, Mr. Daham Liyanage, for your invaluable contributions and inspirational journey with us. ",
      },
      photographers: ["Hirun Seneviratne"],
      images: [
        "/assets/galleryPage/albums/1_farewell/1.jpg",
        "/assets/galleryPage/albums/1_farewell/2.jpg",
        "/assets/galleryPage/albums/1_farewell/3.jpg",
        "/assets/galleryPage/albums/1_farewell/4.jpg",
        "/assets/galleryPage/albums/1_farewell/5.jpg",
      ],
      albumLink: "https://www.facebook.com/media/set?vanity=refmediauor&set=a.927896379350684",
    },
  ],
};
