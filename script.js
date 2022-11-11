"use strict";

let currIndex = 0;
const allCards = [...document.querySelectorAll(".card")];

const handleRightClick = () => {
  const previousIndex =
    currIndex - 1 >= 0 ? currIndex - 1 : allCards.length - 1;

  const currCard = allCards[currIndex];
  const prevCard = allCards[previousIndex];

  currCard.dataset.status = "after";
  prevCard.dataset.status = "active";

  setTimeout(() => {
    currCard.dataset.status = "return-to-beginning-right";
  }, 250);

  currIndex = previousIndex;
};

const handleLeftClick = () => {
  const previousIndex =
    currIndex - 1 >= 0 ? currIndex - 1 : allCards.length - 1;

  const currCard = allCards[currIndex];
  const prevCard = allCards[previousIndex];

  prevCard.dataset.status = "return-to-beginning-left";
  currCard.dataset.status = "before";

  setTimeout(() => {
    prevCard.dataset.status = "active";
  });

  currIndex = previousIndex;
};
