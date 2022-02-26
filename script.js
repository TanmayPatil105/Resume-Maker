

function addWeField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("we");
    newNode.classList.add("my-3")
    newNode.setAttribute("rows",3) ;
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("style","border-color:#000000");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addAqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aq");
    newNode.classList.add("my-3")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("style","border-color:#000000");


    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode,aqAddButtonOb);
}


//            GENERATE CV
function generateCV(){
    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById('contactT').innerHTML= "+91" + document.getElementById('contactField').value;

    document.getElementById("addressT").innerHTML=document.getElementById('addressField').value;

    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;

    document.getElementById("hobbiesT").innerHTML=document.getElementById('hobbyField').value;

    document.getElementById("objectiveT").innerHTML=document.getElementById('objectiveField').value;


    let wes=document.getElementsByClassName('weField');

    let str='';

    for (let e of wes){
        str = str + `<li> ${e.value} </li>`;
        
    }
    
    document.getElementById('weT').innerHTML=str;



    let aqs=document.getElementsByClassName('aqField');

    let str1='';
    
    for (let e of aqs){
        str1=str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;



    let file=document.getElementById('imgField').files[0];

    let reader=new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
}

let areacv=document.getElementById('cv-template');
function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');
function printCV(){
    //document.getElementById.style.display="none";
    
    html2pdf(areacv);
}