
 const artists = [
    {
      name: "Ms Scandalous",
      birthYear: 1985,
      link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
    },
    {
     name: "Juggy D",
     birthYear: 1981,
     link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
   },
   {
     name: "Sukhbir Singh",
     birthYear: 1969,
     link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
   },
   {
     name: "Abrar-ul-Haq",
     birthYear: 1989,
     link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
   },
   {
     name: "Rishi Rich",
     birthYear: 1970,
     link: "https://www.youtube.com/watch?v=O95-w2gACuA"
   }
  ]

  const tab = document.querySelector("#bhangra");
  populateTable(arr = artists);


  const nameButton = document.querySelector("#name-button");
  nameButton.addEventListener("click", sortByName);
  nameButton = document.querySelector("click", function sortByName());
  const tab = document.querySelector(#bhangra);
  tab.innerHTML = makeTableContents(artists.name)


  const birthYearButton = document.querySelector("#birthYear-button");
  birthYearButton.addEventListener("click", sortByBirth);
  birthYearButton = document.querySelector("click", function sortByBirth());
  const tab = document.querySelector(#bhangra);
  tab.innerHTML = makeTableContents(artists.birthYear)


  const randomButton = document.querySelector("#random-button");
  randomButton.addEventListener("click", Randomize);
  randomButton.document.querySelector("click", function Randomize());
  const tab = document.querySelector(#bhangra);
  tab.innerHTML = makeTableContents(artists.Randomize)

//making the functions for the buttons represented above, the use of stackoverflow for line 56 and then lines 66-72 are also from stackoverflow
function sortByName(arr) {
  artists.sort((a,b) => a.name.localeCompare(b.name));
  let sortedArray = [];  
  function populateTable (#bhangra){
    const table = document.getElementById("makeTableContents");
    const tbody = table.querySelector("tbody");
  }
  populateTable(sortedArray);
}


function Randomize(arr){
    artists.forEach((_, artists, arr) => {{
        const Randomizearr = Math.floor(Math.random() * arr.length);
        [arr[artists], arr[Randomizearr]] = [arr[Randomizearr], arr[artists]];
    });
}
Randomize(#bhangra)
console.log(#bhangra)
populateTable(artists)


function sortByBirth(){
    artists.sort((a,b) => a.birthYear - b.birthYear);
    populateTable(artists)
}

function populateTable(arr) {
  let contents = "<tbody>";
  contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;
    arr.forEach(artist => {
      contents += "<tr>";
      contents += `<td>${artist.name}</td>`;
      contents += `<td>${artist.birthYear}</td>`;
      contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
      contents += "</tr>"
    });
    contents += "</tbody>";
    tab.innerHTML = contents;
}