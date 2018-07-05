// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//This function creates a grid with the provided height and width
function makeGrid() {

    // Your code goes here!

    const parentTable = $('#pixelCanvas');  //This value holds the parent table and should not change, hence a constant.
    var tableRow, tableData;    // variables to hold each table row and table data as it is dynamically created as required.


    //This for loop creates the required number of rows in each row which is equal to the height of the grid
    for(var col = 0; col < $("#height").val(); col++){
        
        tableRow = $('<tr></tr>');  //creates a new row element
        parentTable.append(tableRow);   //attaches the new row element as the next sibling of the table element
    
        //This inner for loop creates the required number of cells in each row which is equal to the width of the grid
        for(var row = 0; row < $("#width").val(); row++){
            
            tableData = $('<td></td>'); //creates a new cell element
            tableRow.append(tableData); //attaches the new cell element as the next sibling of the row element
        }
    }
}

//This function is called when a cell is clicked to change the cell color
function changeCellColor(){
    let cellColor = $("#colorPicker").val();
    $(this).css('background-color', cellColor);
}

//event listener to create grid on click of the button
$("#action").on("click", makeGrid);

//This uses event delegation to listen for when any cell is clicked
$("#pixelCanvas").on("click", "td", changeCellColor);