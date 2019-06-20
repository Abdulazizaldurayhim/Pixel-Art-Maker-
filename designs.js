// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const  h = document.getElementById('inputHeight').value;
const  w = document.getElementById('inputWidth').value;
const  cnaves = document.getElementById('pixelCanvas');
const  sizePicker = document.getElementById('sizePicker');
const  tr =  document.createElement("tr");
const  td =  document.createElement("td");


// When size is submitted by the user, call makeGrid(), h:Height , w: Width
sizePicker.addEventListener("submit", function(event){
    event.preventDefault();
    const  h = document.getElementById('inputHeight').value;
    const  w = document.getElementById('inputWidth').value;
    makeGrid(h,w);
});

function makeGrid(h,w){
    cnaves.innerHTML="";
    for (var i = 1 ; i <= h ; i++){
        const  tr =  document.createElement("tr");
        const row = cnaves.appendChild(tr);
        for (var j= 1 ; j <= w ; j++){
            const  td =  document.createElement("td");
            row.appendChild(td);

            //selcet the color of cell,  c: refer to color
            cnaves.addEventListener('click', function (c){
                const color = document.getElementById('colorPicker').value
                c.target.style.backgroundColor = color;
            });
        }
    }

};

// Your code goes here!
