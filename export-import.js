// For exporting the data

function exportData(){
    let fileData = JSON.stringify(state);
    let blob=new Blob([fileData],{type:"application/json"});
    let url=URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href=url;
    link.download="sheet.json";
    link.click();
}


// For importing the data

function importData() {
    const importInput = document.getElementById("importInput");
    importInput.click(); // Trigger the file input element to open the file selection dialog.
  
    importInput.addEventListener("change", function () {
      const file = importInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const importedData = JSON.parse(event.target.result);
        applyImportedData(importedData);
      };
  
      reader.readAsText(file);
    });
  }
  


  function applyImportedData(importedData) {
    for (const cellId in importedData) {
      const cellData = importedData[cellId];
      const cell = document.getElementById(cellId);
  
      if (cell) {
        // Apply the imported styles and value to the cell.
        cell.style.fontSize = `${cellData.fontSize}px`;
        cell.style.fontFamily = cellData.fontFamily;
        cell.style.color = cellData.textColor;
        cell.style.backgroundColor = cellData.backgroundColor;
        cell.style.textAlign = cellData.textAlign;
  
        if (cellData.isBold) {
          cell.style.fontWeight = "bold";
        } else {
          cell.style.fontWeight = "normal";
        }
  
        if (cellData.isItalic) {
          cell.style.fontStyle = "italic";
        } else {
          cell.style.fontStyle = "normal";
        }
  
        if (cellData.isUnderlined) {
          cell.style.textDecoration = "underline";
        } else {
          cell.style.textDecoration = "none";
        }
  
        cell.innerText = cellData.value;
  
        // Update the state with the imported data.
        state[cellId] = cellData;
      }
    }
  }

//============================================================================  



