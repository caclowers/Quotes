console.log('jhg');
$(document).ready(readyNow);

function readyNow() {
    $('#addButton').on('click', addQuotes);
}

function addQuotes() {
    $.ajax({
        url: '/quotes', //THE ROUTE TO WHERE YOU WNT TO GO
        type: 'GET'
    }).done(function (response) { //reponse will be --cats[]--
        console.log(response);
        // append each cat to DOM
        // response is array of cats
        //loop over -response- and append
        for (let i = 0; i < response.length; i++) {
            $('#quoteList').append(`<li>${response[i]}</li>`);
        }
        
    }).fail(function (errorResponse) { //error path
        console.log(errorResponse);
        alert('request Failed... Error:' + errorResponse.status)
    })
}