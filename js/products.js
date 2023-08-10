    const DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

    const container = document.getElementsByClassName("container"); 
    
    
    onDOMContentLoaded = (event) => {function showData(dataArray) {
      
      for (const item of dataArray) {
        container.innerHTML += `<p> ${item.cost} ${item.name} ${item.description}  ${item.soldCount}  ${item.image} </p>`;
      }
    }

    fetch(DATA_URL)
    .then((response)=>{
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      showData(data.products);
    })}