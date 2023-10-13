// making-table.js

// I used the textbook chapters 13, and 14, alongside this was stackoverflow, by asking stackoverflow specfific questions of 
// 'how does one make a table using javascript in vscode', this was to see for inspiration, I asked another question of how to use looping, specific 
//higher order functions to generate or go through each artist, another question I asked was how to create a dropdown function, 
// later in class today you showed us this using the textbook and alongside it the google search
// I also asked in stackoverflow how to loop in an array specfically with using option
// I as well asked after conducting the previous what was the purpose of the cell.innerHTMl, and sw the corrosponding exmaples, also
// it mentioned about childNODES too. Also asked about the DOM and essentially how to extract values from the text to javascript
// Kind of also went down a rabbit hole about the options, and essentialy I saw the question about whats the best way 
// to add select specfic object options from I beleive its called jQuery
// Which then lead me yo another question that was changing an elements class in javascript


//We have three properties they are name, birthYear, and link in our table of artists

// We have one array for the select part and one for the table in which it will be selected from
const artistSelect = document.getElementById('artistSelect');
const artistTable = document.getElementById('artistTable').getElementsByTagName('tbody')[0];

// The doc... method is getting to be referred to 2 elements when it'll be dropdowned which is artistSelet and artistTable
// These two setups allow us to be able to interact with it here and on HTML

function populateDropdown(){
    artists.forEach((artist, index) =>{
        const option = document.createElement('option');
        option.value = index;
        option.text = artist.name;
        artistSelect.appendChild(option);
    });
}

// So there needs to be a function for the dropdown in order for it to be used so we have that above essentially it is going to select artists
// By their names and its using the forEach method to go through the artists in the array named artists and it'll be making an option for them
// By essentially setting their gien value to the index of that artist in the array to their text name. Once its done this
// its going to to append to the artistSelect element and it'll show each artist as a viewable option in the dropdown for us to click

// Here we have the different arrays in the table to showcase for the different artists
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

  // Now that we have the above that was given to us earlier we can implement it with the previous code to make the table 
  // This function we have created is responsible for specifically showing the artists's information in the table with the dropwdpwn.
  // The index parameter indicated what artist to show in the table. artisTable is set ti innerHTML which in this case is an empty string
  //Its going to retreive the selected artist we selected from the artists array using index
  // A new array will be created from this called artistInfo which has the artists name, birthyear, and the link
  // A new row is inserted to the table's body to prepare for additional information on the artist
  // The forEach loop goes through each artists info (the properties mentioned earlier) and makes a new table cell for each
  // Each has its own corresponding one

  function updateTable(index){
    artistTable.innerHTML = '';
    const selectedArtist = artists[index];
    const artistInfo = [
        selectedArtist.name,
        selectedArtist.birthYear,
        `<a href=${selectedArtist.link}" target=" _blank">Watch</a>`
    ];

    const row = artistTable.insertRow(0);

    artistInfo.forEach(info => {
        const cell = row.insertCell();
        cell.innerHTML = info;
    });
  }

  //Next we need to include the event

  artistSelect.addEventListener('change', function(){
    const selectedArtistIndex = artistSelect.value;
    if (selectedArtistIndex === '-1'){
        artistTable.innerHTML = '';
    } else {
        updateTable(selectedArtistIndex);
    }
  });

  // the following lines 88-95 address the event listener  which is adding an event to the dropdown
  // the user will select the artist from the dropdown, and the provided function will be called when they do that
  // It will get the value or in this case the index of the selected artist from the dropdown and store it in the 
  // selectedArtistIndex and check if selectedArtistIndex is in fact -1 which will mean that the user did have displayed on their end
  // Because its the default the option of "Select an Artist"
  // If whoever selected the defualt option itll be cleared to the artistTable by setting it to innerHTML as an empty string clearing all info about
  // the artist. If however, the user selects a specfifc artist, its gonna get called on updateTabke function to sboew that specfic artists info

  populateDropdown();

  // finally we have the populateDropdown function which essentially will prepopulate the artists names when the page is loading!