$(document).ready(function() {
    $("#tbody").bind("click", function(e) {
        $(e.target).closest(".tdbox").toggleClass("tdclick");
        $("#myModal").modal('show');
    });

    //table cells
    $("td").click(function() { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var cliffName = $(".thead").eq($(this).index()).text(); //index+eq

        if (content != "Not Available") { //check if content does not contain a particular string
            $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected

            if($(this).hasClass("tdhighlight")) { //check if selected cell has class
                $('#myModal').css("visibility","visible");
                $('#myModal').css("margin-top","2em");
                $('.modal-body').append("<p>"+content+" at "+cliffName+"</p>"); //add child element with contents of cell
            } else {
                $('.modal-body p:contains('+content+')').remove();
                
                //if selected cell dont have class
                /*$('#result p:contains('+content+')').remove(); //remove child element

                if($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#myModal').css("visibility", "hidden");
                    $('#myModal').css("margin-top", "0");*/
                }
            }
    });
});
