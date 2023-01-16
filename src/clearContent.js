export {clearContentBox}
function clearContentBox(){
    let contentBox = document.querySelector('#contentBox');
    while(contentBox.firstChild)
    contentBox.removeChild(contentBox.lastChild);
}