const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
window.onload = function () {
  const statsDays = document.querySelectorAll(".day");

  statsDays.forEach((e) => {
    e.addEventListener("click", () => {
      //
      data.forEach((d) => {
        if (d.day === e.children[1].textContent) {
          const text = document.createElement("p");
          text.classList.add("amount");
          text.textContent = "$"+d.amount;
          e.insertBefore(text, e.firstChild);
          setTimeout(() => {
            e.removeChild(e.firstChild);
          }, 1000);
        }
      });
    });
  });
};
