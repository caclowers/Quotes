console.log('jhg');
$(document).ready(readyNow);
// const express = require('express');
// const quotes = require('./quotes.js');
function readyNow() {
    getQuotes();
    $('#addButton').on('click', addQuote);
}
//     $('#addButton').on('click', addQuotes);
// }
function getQuotes(){
// function addQuotes() {
    $.ajax({
        url: '/quotes', //THE ROUTE TO WHERE YOU WNT TO GO
        method: 'GET'
    }).done(function (response) {
        $('#quoteList').empty();
         //reponse will be --cats[]--
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            $('#quoteList').append(`<li>${response[i].quote} - ${response[i].author}</li>`);
        }
        //addQuote(response);
        // append each cat to DOM
        // response is array of cats
        //loop over -response- and append
        

    }).fail(function (errorResponse) { //error path
        console.log(errorResponse);
        alert('request Failed... Error:' + errorResponse.status)
    })

}


function clickHandler(){
    $('#addButton').on('click', addQuote);
}


function addQuote(){

    let quote = $('#quoteInput').val();
    let author = $('#authorInput').val();

    //$('#recordList').append(`<li>${title} ${artist} ${genre} ${price}</li>`)
    $.ajax({
        url: '/quotes',
        method: 'POST',
        data: {
            quote: quote,
            author: author,
        }
    }).done(function(response){
        console.log(response);
        getQuotes();
    }).fail(function(errorResponse){
        console.log('error:', errorResponse);
    })
    $('#quoteInput').val('');
    $('#authorInput').val('');
}