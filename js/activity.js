$(document).ready(function() {
    $(document).bind("click", function(e) {
        $(e.target).filter(".available").closest("td").toggleClass("selected");
    });

    //table cells
    $("td").click(function() { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var cliffName = $("th").eq($(this).index()).text(); //index+eq

        if (content != "Not Available") { //check if content does not contain a particular string
            $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected

            if($(this).hasClass("tdhighlight")) { //check if selected cell has class
                $('#displaySelected').css("visibility","visible");
                $('#displaySelected').css("margin-top","2em");
                $('#result').append("<p>"+content+" at "+cliffName+"</p>"); //add child element with contents of cell
            } else { //if selected cell dont have class
                $('#result p:contains('+content+')').remove(); //remove child element

                if($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});
