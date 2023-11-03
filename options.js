const cellNamePlaceholder=document.querySelector("#active-cell");

const fontSizeInput=document.querySelector("#fontsize");

const fontFamilyInput=document.querySelector("#fontfamily");

const form =document.querySelector("#form");

let activeElement=null;

const state={};

const defaultProperties={
    fontFamily:'Courier New',
    fontSize:16,
    color:"#000000",
    textAlign:"left",
    backgroundColor:"#ffffff",
    isBold:false,
    isItalic:false,
    isUnderlined:false,
    value:''
}

function onCellFocus(event){
    const elementId=event.target.id;
    cellNamePlaceholder.innerText=elementId;
    activeElement=event.target;

    document.getElementById("expressionInput").value = "";  // Newly added

    if(state[elementId]){
        resetOptions(state[elementId]);
    }
    else{
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState){

    // fontSizeInput.value=optionsState.fontSize;
    // fontFamilyInput.value=optionsState.fontFamily; 
    form.fontfamily.value= optionsState.fontFamily;
    form.fontsize.value=optionsState.fontSize;
    form.textalign.value=optionsState.textAlign;
    form.bold.checked=optionsState.isBold;
    form.italic.checked=optionsState.isItalic;
    form.underlined.checked=optionsState.isUnderlined;
    form.textcolor.value=optionsState.color;
    form.bgcolor.value=optionsState.backgroundColor;
    
}

// function onChangeFontSize(){

// }

function onFormChange(){
    if(!activeElement){
        alert("Please select a cell to make changes");
        form.reset();
        return;
    }

    let currentState={
        textColor:form.textcolor.value,
        backgroundColor:form.bgcolor.value,
        fontSize:form.fontsize.value,
        fontFamily:form.fontfamily.value,
        isBold:form.bold.checked,
        isItalic:form.italic.checked,
        isUnderlined:form.underlined.checked,
        textAlign:form.textalign.value
    }

    applyStylesToCell(currentState);

    state[activeElement.id]={...currentState, value:activeElement.innerText};
}

function applyStylesToCell(styleObject){
    activeElement.style.fontSize=`${styleObject.fontSize}px`;

    activeElement.style.fontFamily=styleObject.fontFamily;

    activeElement.style.color=styleObject.textColor;

    activeElement.style.backgroundColor=styleObject.backgroundColor;

    activeElement.style.textAlign=styleObject.textAlign;

    if(styleObject.isBold){
        activeElement.style.fontWeight="bold";
    }
    else {
        activeElement.style.fontWeight = "normal"; // Clear the bold style
    }

    if(styleObject.isItalic){
        activeElement.style.fontStyle="italic";
    }
    else {
        activeElement.style.fontStyle = "normal";
    }

    if(styleObject.isUnderlined){
        activeElement.style.textDecoration="underline";
    }
    else {
        activeElement.style.textDecoration = "none";
    }
}

  
