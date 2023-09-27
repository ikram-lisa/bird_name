let leftList;
let rightList;

async function getAllItems() {
  leftList = document.getElementById("leftList");
  rightList = document.getElementById("rightList");

  const response = await fetch("http://ap-examen.surge.sh/vogels.json");
  const data = await response.json();
  console.log(data);
  const listItems = data.slice(0, 20).map((bird) => {
    let li = document.createElement("li");
    li.textContent = bird.naam;
    li.dataset.birdId = bird.latijnse_benaming;
    return li;
  });

  listItems.forEach((li) => leftList.appendChild(li));
}

export default getAllItems;
export { leftList, rightList };
