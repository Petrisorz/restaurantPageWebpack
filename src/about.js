export {createAboutPageDetails}
function createAboutPageDetails (){
    let div = document.createElement('div');
    let txtspan = document.createElement('span');
    txtspan.innerHTML = " salut contacteaza grupa ceokan la 077264725557555215";
    div.appendChild(txtspan);
    return div;
}