const reviews = [
  {
    id: 1,
    image: "id1.jpeg",
    name: "Alice Johnson",
    profession: "Software Engineer",
    review:
      "This product has revolutionized my workflow. It's intuitive, efficient, and a joy to use every day. Highly recommended for any tech professional!",
  },
  {
    id: 2,
    image: "id2.jpeg",
    name: "Bob Smith",
    profession: "Graphic Designer",
    review:
      "As a designer, I'm always looking for tools that enhance my creativity. This exceeded my expectations. The user interface is sleek, and the features are top-notch.",
  },
  {
    id: 3,
    image: "id3.jpeg",
    name: "Carol Martinez",
    profession: "Marketing Manager",
    review:
      "I've tried many marketing tools, but this one stands out. It's comprehensive, user-friendly, and has significantly improved our campaign performance.",
  },
  {
    id: 4,
    image: "id4.jpeg",
    name: "David Lee",
    profession: "Entrepreneur",
    review:
      "As a startup founder, I need reliable and scalable solutions. This product has been a game-changer for our operations. It's worth every penny.",
  },
  {
    id: 5,
    image: "id5.jpg",
    name: "Eva Chen",
    profession: "Data Analyst",
    review:
      "The data visualization capabilities of this tool are outstanding. It has made my job so much easier and more efficient. I can't imagine working without it now.",
  },
];

let currentIndex = 0;

const img = document.querySelector(".review img");
const nameEl = document.querySelector(".name");
const profession = document.querySelector(".profession");
const personReview = document.querySelector(".person-review");
const prevBtn = document.querySelector(".button-container button:first-child");
const nextBtn = document.querySelector(".button-container button:last-child");

function reviewDisplay() {
  const review = reviews[currentIndex];
  img.src = review.image;
  nameEl.innerText = review.name;
  profession.innerText = review.profession;
  personReview.innerText = review.review;

  prevBtn.style.display = currentIndex === 0 ? "none" : "inline";
  nextBtn.style.display = currentIndex === reviews.length - 1 ? "none" : "inline";
}

function forward() {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
    reviewDisplay();
  }
}

function backward() {
  if (currentIndex > 0) {
    currentIndex--;
    reviewDisplay();
  }
}

reviewDisplay();
