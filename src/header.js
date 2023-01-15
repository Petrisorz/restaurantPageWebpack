export {createHeader}
function createHeader (){
    let header = document.createElement('header');
    let btn1= document.createElement('button');
    let btn2= document.createElement('button');
    btn1.innerHTML = "Menu";
    btn2.innerHTML = "About";
    btn1.classList.add("menuButton");
    btn2.classList.add("aboutButton");
    btn1.setAttribute('id','menuBtn');
    btn2.setAttribute('id','aboutBtn');
    header.appendChild(btn1);
    header.appendChild(btn2);
    
    return header;
}
;