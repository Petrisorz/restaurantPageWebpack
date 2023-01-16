import _ from 'lodash';
import './style.css';
import Icon from'./backgrMiere.jpg' 
import {createHeader} from './header.js';
import { menuContentCreate, menuTitleCreate } from './menu';
import { createAboutPageDetails } from './about';
import { clearContentBox } from './clearContent';
const contentBox = document.createElement('div');
let poza = new Image();
poza = Icon;
contentBox.classList.add('content');
contentBox.setAttribute('id','contentBox')
document.body.appendChild(createHeader());
document.body.appendChild(contentBox);
//default menu page selected
contentBox.appendChild(menuTitleCreate());
contentBox.appendChild(menuContentCreate());
let selectedPage = [];
let menuBtn = document.querySelector('#menuBtn');
let aboutBtn = document.querySelector('#aboutBtn');

menuBtn.classList.add('selectedPage');
selectedPage.push(menuBtn);
// swithch page

menuBtn.addEventListener('click',(e)=>{
    if(!menuBtn.classList.contains('selectedPage')){
        if(selectedPage.length){
            selectedPage.pop().classList.remove('selectedPage')
        }
        selectedPage.push(menuBtn);
        menuBtn.classList.add('selectedPage');
        clearContentBox();
        contentBox.appendChild(menuTitleCreate());
        contentBox.appendChild(menuContentCreate());
    }
})
aboutBtn.addEventListener('click',(e)=>{
    if(!aboutBtn.classList.contains('selectedPage')){
        if(selectedPage.length){
            selectedPage.pop().classList.remove('selectedPage')
        }
        selectedPage.push(aboutBtn);
        aboutBtn.classList.add('selectedPage');
        clearContentBox();
        contentBox.appendChild(createAboutPageDetails());
    }
})