


$(document).on("click", "#emailForm", function () {
    var nameContact = $("#contactName").val();
    var emailContact = $("#contactEmail").val();
    var commentsContact = $("#contactMessage").val();
    $(location).attr('href', 'mailto: gustavo.canales@me.com' + '?subject='
        + encodeURIComponent("Information")
        + "&body="
        + encodeURIComponent("Hi this is " + nameContact + " with email " + emailContact
            + " and this is my message " + commentsContact)
    );


})