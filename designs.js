// Select size input and color input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);
})

function makeGrid(h, w) {
    $('tr').remove();

    // Your code goes here!
    for (var i = 1; i <= h; i++) {
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var j = 1; j <= h; j++) {
            $("#table" + i).append("<td></td>");
        }
    }

    // add color to cell
    $('td').click(function addColor() {
        color = $("#colorPicker").val();

        if ($(this).attr("style")) {
            $(this).removeAttr("style")
        } else {
            $(this).attr('style', "background-color:" + color);
        }
    })
}