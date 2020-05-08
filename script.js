function processAccept() {
  alert("Tooltip accepted");
}

function processDeny() {
  alert("Tooltip Denied");
}

function processMenuDrop() {
  alert("Tooltip Menu Open");
}

// Tooltips
  $( function() {
    $( document ).tooltip();
  } );

// Toggle Rows //

  $("button").click(function(){
    $('div').fadeToggle(1000);
  });

// menu show //

  $("button").click(function(){
    $('menu-drop').fadeToggle(1000);
  });

//merge and exclude //

function merge() {
  alert("merge");
}

function exclude() {
  alert("exclude");
}

function rowAction(rowID) {
  /*
    the height() function in jQuery can be run with or without parameters
    with parameters, it sets the height of the element it's being called on,
    and without, it only gets the height of the element it's called on
  */
  
  if ($("#selectedRow").is(":hidden")) { // if a row is not currently selected
      $("#selectedRow").show();
      let elementHeight = $(".tooltip-body").height() + 50; // calculating new height of body
      $(".tooltip-body").height(elementHeight + "px");
      elementHeight = elementHeight + 50; // calculating new height of entire element (50px for header)
      $(".tooltip-card").height(elementHeight + "px");
      $("#selectedContent").text("ID = " + rowID); // setting the text for the selected row
  }
  else { // if a row is already selected
    
  }
}

