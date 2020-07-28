console.log('%c HI', 'color: firebrick')
'use strict'
/*-----------------------------------------------------*/

    // load dog images

/*-----------------------------------------------------*/


function createImg(dogUrl){
    console.log(dogUrl);
    const dogContainer = document.getElementById("dog-image-container");
    const img = document.createElement('img');
    img.src = dogUrl;
    img.style.width = 'auto';
    img.style.height = '200px';
    dogContainer.appendChild(img);
 
}

//why cannot use .forEach on dogs??????
function showDogs(dogs){
    console.log(dogs.message.length);
  for (let i = 0; i<dogs.message.length; i++){
        //for each dog show image
        createImg(dogs.message[i]);
        
    }
}
 async function getDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const response = await fetch(imgUrl);
     const json = await response.json();
     return showDogs(json);
}

document.addEventListener("DOMContentLoaded", getDogs);

/*-----------------------------------------------------*/

    // load dog breeds

/*-----------------------------------------------------*/

   

function showBreed(breeds){
    const breedList = document.getElementById('dog-breeds');
    for (const dog in breeds.message) {
        let li = document.createElement('li');
        li.innerText = dog;
        li.style.listStyle= 'none';
        breedList.appendChild(li);
        // color the li that is picked
        li.addEventListener('click',(e)=> {  let liTarget = e.target; 
            console.log(liTarget.style.backgroundColor);
            if (liTarget.style.backgroundColor === "white" && liTarget.style.color === 'black') {
                liTarget.style.backgroundColor = 'red';
                liTarget.style.color = 'white';
              } else {
                liTarget.style.backgroundColor = "white";
                liTarget.style.color = 'black';
              }
        } );
            /*(e)=> { e.target.style.backgroundColor = 'red'; e.target.style.color = 'white';}
          });
        */

           // button sort breeds
       let button = document.getElementById('breed-dropdown');


       function sortBreed(){
           // don't put return in conditionals and loops!!!
           const breedList = document.querySelectorAll('li');
           for ( const breed of breedList){
              if (button.value === breed.textContent.charAt(0)){
                  breed.style.display = 'block';
              } else {
                 breed.style.display = 'none';
              };
       
           }
       
       }
       
       
       button.addEventListener('change', sortBreed); 
       
    
    }
};

async function getDogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const response = await fetch(breedUrl);
    const json = await response.json();
    return showBreed(json);
}
document.addEventListener("DOMContentLoaded", getDogBreeds);




