const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.querySelector(".container1");

document.addEventListener("DOMContentLoaded", (event) => {
  function showData(dataArray) {
    for (const item of dataArray) {
      container.innerHTML += `<p>${item.cost} ${item.name} ${item.description} ${item.soldCount} </p> <img src="${item.image}">`;
    }
  }

  fetch(DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      showData(data.products);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});