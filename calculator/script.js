let displayBox = document.getElementById("display-box");
let tempdisplay = document.getElementById("temp-output");
function btnvalue(btn){
    let btnvalue=btn.value;
    if(btnvalue != '='){
        displayBox.innerHTML += btnvalue;
    }
    if(btnvalue == '='){
        tempdisplay.style.display="none";
        displayBox.innerHTML = eval(displayBox.innerHTML);
    }
}
function clearvalue(){
    displayBox.innerHTML = '';
    tempdisplay.style.display="none";
}
function back(){
    displayBox.innerHTML = displayBox.innerHTML.slice(0, -1);
}
function tempoutput(){
    tempdisplay.style.display="flex";
    tempdisplay.innerHTML = '='+eval(displayBox.innerHTML);
}