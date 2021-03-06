
// for calling local storage at the first time

displayNotes();


// function for storing the value in local storage 

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
         let addTxt = document.getElementById('addTxt');
        //  addTxt = addTxt.toLowerCase();
         let addTitle = document.getElementById('addTitle');
         let notes = localStorage.getItem("notes");
         let notesObj;
         if(notes == null)
         {
             notesObj = [];
         }
         else{
             notesObj = JSON.parse(notes);
         }
         let myObj = {
            title: addTitle.value,
            decript: addTxt.value   
         }
         notesObj.push(myObj);
         localStorage.setItem("notes" , JSON.stringify(notesObj));
         addTxt.value = "";
         addTitle.value = "";
         displayNotes();
})

// function for display the notes the notes 

function displayNotes(){
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        }
        // console.log('fdfsfsdfs');
        let html = "";
        notesObj.forEach((element, index)=> {
            html+= `<div class="cardNotes card my-3 mx-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}. ${element.title}</h5>
              <p class="card-text">${element.decript}</p>
              <a href="#" id = ${index} onclick = "dltNote(this.id)" class="btn btn-primary">Delete</a>
            </div>
          </div>`
        });
        let elem = document.getElementById('notes');
        if(notesObj != 0){
            elem.innerHTML = html;
        }
        else{
            elem.innerHTML = `Nothing to show plz add the note`
        }

}

//  function for dlt the note


function dltNote (index){
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    displayNotes();
}

// function for for search the note

let search = document.getElementById('searchNote');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let cardNotes = document.getElementsByClassName('cardNotes');
    Array.from(cardNotes).forEach(function (element) {
        let elem2 = (element.getElementsByTagName("p")[0].innerText).toLowerCase();
        console.log(elem2);
        if(elem2.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
})


