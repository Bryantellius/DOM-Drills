// Created div
let hContainer = document.createElement('div');
hContainer.className = 'header-container';
// Creates elements to document once the html is loaded
window.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(hContainer);
    let btn = document.querySelector('button');
    btn.addEventListener("click", createListItem); 
    hContainer.addEventListener('dblclick', changeColor);

    
    // Created h1 with text and color
    let firstH1 = document.createElement('h1');
    firstH1.className = 'h1';
    let firstH1Text = document.createTextNode('This is an h1.');
    firstH1.style.color = 'black';
    // Affixed text to h1, and h1 to main div
    firstH1.appendChild(firstH1Text);
    hContainer.appendChild(firstH1);
    // Creates h2 with text and color
    let firstH2 = document.createElement('h2');
    firstH2.className = 'h2';
    let firstH2Text = document.createTextNode('This is an h2.');
    firstH2.style.color = 'black';
    // Affixes text to h2, h2 to main div
    firstH2.appendChild(firstH2Text);
    hContainer.appendChild(firstH2);

    // Creates h3 with text and color
    let firstH3 = document.createElement('h3');
    firstH3.className = 'h3';
    let firstH3Text = document.createTextNode('This is an h3.');
    firstH3.style.color = 'black';
    // Affixes text to h3, h3 to main div
    firstH3.appendChild(firstH3Text);
    hContainer.appendChild(firstH3);

    // Creates h4 with text and color
    let firstH4 = document.createElement('h4');
    firstH4.className = 'h4';
    let firstH4Text = document.createTextNode('This is an h4.');
    firstH4.style.color = 'black';
    // Affixes text to h4, h4 to main div
    firstH4.appendChild(firstH4Text);
    hContainer.appendChild(firstH4);
    // Creates h5 with text and color
    let firstH5 = document.createElement('h5');
    firstH5.className = 'h5';
    let firstH5Text = document.createTextNode('This is an h5.');
    firstH5.style.color = 'black';
    // Affixes text to h5, h5 to main div
    firstH5.appendChild(firstH5Text);
    hContainer.appendChild(firstH5);
    // Creates h6 with text and color
    let firstH6 = document.createElement('h6');
    firstH6.className = 'h6';
    let firstH6Text = document.createTextNode('This is an h6.');
    firstH6.style.color = 'black';
    // Affixes text to h6, h6 to main div
    firstH6.appendChild(firstH6Text);
    hContainer.appendChild(firstH6);

    // Array of colors
    let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

    // Functions to change headers as they are clicked
    hContainer.addEventListener('click', changeColor);
    function changeColor(e){
        if(e.target===firstH1 || e.target===firstH2 || e.target===firstH3 || e.target===firstH4 || 
            e.target===firstH5 || e.target===firstH6){
                e.target.style.color = rainbow[getRandomInt(8)];
            }
        if(e.target===listItem){
            e.target.style.color = rainbow[getRandomInt(8)];
        }
    }

    hContainer.addEventListener('dblclick', removeItem);
    function removeItem(e){
        if(e.target===listItem){
            e.target.remove();
        }
    }


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //   List items
    let listCount = 1;
    let listItem;
    let listItemText;
    function createItem(){

        listItem = document.createElement('li');
        listItemText = document.createTextNode('This is list item ' + listCount);

    }
    function createListItem(e){
        createItem();
        listItem.appendChild(listItemText);
        hContainer.appendChild(listItem);
        listCount++;
    }
});


