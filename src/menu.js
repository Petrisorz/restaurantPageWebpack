export {menuContentCreate,menuTitleCreate}
function menuTitleCreate (){
    //Create heading
    let titleContainer = document.createElement('div');
    let h1Title = document.createElement('h1');
    titleContainer.classList.add("headlineContainer");
    h1Title.innerHTML = "Honey House"
    titleContainer.appendChild(h1Title);
    return titleContainer 
}
function menuContentCreate(){
    //Create menu details :
    let menuContent = document.createElement('div');
    let textContent = document.createElement('span');
    menuContent.classList.add("menuContainer")
    textContent.innerHTML = " Meniul zilei de cartof paine feliata pita si slanina";
    menuContent.appendChild(textContent);
    // create a body
    return menuContent;
}