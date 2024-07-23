import {
  HomeIcon,
  UserGroupIcon,
  PhotoIcon,
  UserIcon,
  BellIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Photos", href: "/photos", icon: PhotoIcon, current: false },
  { name: "Chatbot", href: "/chatbot", icon: CogIcon, current: false },
];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export const randomNamesWithPictures = [
  {
    id: 1,
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    username: "Olivia Adams",
    status: getRandomStatus(),
  },
  {
    id: 2,
    pic: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Emily Johnson",
    status: getRandomStatus(),
  },
  {
    id: 3,
    pic: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    username: "Ava Williams",
    status: getRandomStatus(),
  },
  // Add more contacts here...
  {
    id: 4,
    pic: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Sophia Smith",
    status: getRandomStatus(),
  },
  {
    id: 5,
    pic: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Mia Brown",
    status: getRandomStatus(),
  },
  {
    id: 6,
    pic: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Isabella Davis",
    status: getRandomStatus(),
  },
  {
    id: 7,
    pic: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Amelia Taylor",
    status: getRandomStatus(),
  },
  {
    id: 8,
    pic: "https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Charlotte Clark",
    status: getRandomStatus(),
  },
  {
    id: 9,
    pic: "https://plus.unsplash.com/premium_photo-1687294573608-b1cd92277cbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    username: "Ryan Smith",
    status: getRandomStatus(),
  },
  {
    id: 10,
    pic: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "John Johnson",
    status: getRandomStatus(),
  },
];

// Function to randomly return "online" or "offline" status
export function getRandomStatus() {
  const statuses = ["online", "offline"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomTimeAsString() {
  const now = new Date().getTime();
  const randomOffset = Math.floor(Math.random() * 86400000);
  const randomTime = new Date(now - randomOffset);

  return randomTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export const feeds = [
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    postMessage: "Best Ever Vecations!",
    img: "https://images.unsplash.com/photo-1565462900119-a16b91dead9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format",
  },
  {
    user: randomNamesWithPictures[
      Math.floor(Math.random() * randomNamesWithPictures.length)
    ],
    postMessage: "Best Ever Vecations!",
    content:
      "hello everyone, today is a very beautiful day. How you guys feeling, tell in the comments.hello everyone, today is a very beautiful day. How you guys feeling, tell in the comments.hello everyone, today is a very beautiful day. How you guys feeling, tell in the comments.",
    time: getRandomTimeAsString(),
  },
];

const comments = [
  "Your photography skills are exceptional! The composition and colors in this picture are simply stunning. I'm blown away by your talent!",
  "Wow! This picture is like a work of art. The way you captured the beauty of the moment is truly remarkable. I could stare at it for hours.",
  "This picture speaks a thousand words. I love the way you've framed the scene and the emotions it conveys. Keep up the fantastic work!",
  "Incredible shot! The lighting and shadows add so much depth to this image. It's clear that you have a great eye for photography.",
  "This is pure magic! I can't get over how captivating this picture is. Your photography skills are truly impressive.",
  "You've managed to capture a moment of pure beauty in this picture. It's like stepping into a dream. Absolutely breathtaking!",
  "I'm in awe of your talent! The details and colors in this photo are exquisite. You have a gift for capturing the essence of a scene.",
  "This picture tells a story and evokes so much emotion. It's like stepping into a different world. Thank you for sharing your art!",
  "This photo is a masterpiece! The composition, lighting, and subject are all perfectly aligned. You have a real talent for photography.",
  "Your photography is out of this world! This picture is mesmerizing, and I can't get enough of it. Keep sharing your incredible work!",
];

// Function to generate a random comment
export const generateRandomComment = () => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
};

export const generateRandomFeedComments = () => {
  const numberOfComments = Math.floor(Math.random() * 3) + 1; // Random number of comments between 1 and 3
  const feedComments = [];

  for (let i = 0; i < numberOfComments; i++) {
    feedComments.push({
      user: randomNamesWithPictures[
        Math.floor(Math.random() * randomNamesWithPictures.length)
      ],
      comment: generateRandomComment(),
    });
  }

  return feedComments;
};
