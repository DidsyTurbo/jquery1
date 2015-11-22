//parameter in brackets sets default grid size 32 * 32
$(document).ready(function(){
	makeGrid(32);
});

$('.clear').click(function() {
	$('.square').css({
		"background-color": '#E8E8E8',
		'opacity': "1"
	})
});

//in each click function I called the function to make a 
//new grid, then defined what happens to the div when you go 
//over a square with the mouse.
$('.color').click(function() {
	newGrid();
	$('.square').mouseover(function(){
		$(this).css('background-color', randomColor());
	});
});

$('.grad').click(function() {
	newGrid();
	$('.square').mouseover(function(){
		$(this).css("opacity", $(this).css('opacity') * 0.75);
		$('.wrapper').css("background-color", "black");
		});
});

$('.trail').click(function() {
	newGrid();
 	$('.square').hover(function() {
		$(this).css('opacity', 0);
		$('.wrapper').css("background-color", "black");
	}, function(){
		$(this).fadeTo('fast', 1);
 	});
});

//Function to build square grid
//Parameter decides size of grid eg. 32 * 32
function makeGrid(numSquares) {

	for (var i = 0; i < numSquares * numSquares; i++) {
        $(".wrapper").append($("<div />").addClass("square"));
    };
    
	var squareSize = 800 / numSquares;
	$('.square').css({"height": squareSize, "width": squareSize});
};

//Called at start of each click function to reset grid. Used
// if/else to stop pop-up repeating when number is outside range
function newGrid() {
	var numSquares = parseInt(prompt("Enter number of squares between 1-64: ", 32));
	if (numSquares > 0 && numSquares <= 64){
		$('.square').unbind();
		clean();
		makeGrid(numSquares);
	}	else {
		alert("Sorry, please pick a number in the defined range");
		$('.square').unbind();
		clean();
		makeGrid(32);
	}
};

//Random color function, found answer online.
//1st var describes letters/no's used in hex values
//function loops over the values in "letters" 6 times
//and adds the picked numbers to "color"
function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

//Clears current grid, doesnt affect size
function clean() {
	$('.square').remove();
};


