// When #resumebutton is clicked, open the dropdown menu
$("#resumebutton").on("click",function() {
    if ($("#resumemenu").hasClass("hidden")) {
        $("#resumemenu").removeClass("hidden");
        $("#resumeimg").addClass("rotate");
        $("#resumebutton").addClass("colorchange");
    } else {
        $("#resumemenu").addClass("hidden");
        $("#resumeimg").removeClass("rotate");
        $("#resumebutton").removeClass("colorchange");
}       
}
)