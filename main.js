// jQuery Syntax

$(document).ready(function(){

    // Block Of Code

    // $('selector').action/method/function

    // Select the Elements
    $('h4,h5,h6,p').html(`Hello,Mounish`);

    // like innerHTML in JS

    // html in jQuery

    // Can insert textContent for group of elements at a time.

    // To find the length
    let result = $('h3,h4,h5,h6,p').length;
    console.log(result);

    // Selecting the element based on (#id) and (.class)

    $('#text').html(`Hello,Hyderabad`)

    $('.special').hide()

    // Navigating from parent to children
    $('.parent>span').css('color','teal')

    // Selecting the siblings
    $('.parent-child  h2 + h3 + span').css('color','blue')

    // Adding External CSS classes Dynamic
    $('article[class]').addClass('style')

    $('a[href="#"]').addClass('link')

    // For invalids
    $('a[href!="#"]').addClass('special')

    // Begin with
    $('a[href^=https]').addClass('http')

    // Ends with
    $('a[href$=repositories]').addClass('ends')

    // For the first item
    $('.order-one li:first').css('list-style','none')

    // For the last item
    $('.order-one li:last').css('list-style','none')

    // For Even
    $('.order-two li:even').css('font-size','50px')

    // For Odd
    $('.order-two li:odd').css('color','red')

    // For eq(n)
    // Array position starts from zero
    $('.order-three li:eq(1)').hide()

    // For lt(n)
    $('.order-three li:lt(2)').css('color','brown')

    // For gt(n)
    $('.order-three li:gt(3)').css('color','green')

    // To Add CSS border to all the form elements
    $(':input').addClass('border')

    // Only for the inputs
    $('input').css('background-color','blue')

    $('input').css('color','white')

    // Add multiple concepts (Chaining jQuery)
    $('h6')
    .hide(4000)
    .html('Hello,Teja')
    .addClass('border')
    .show(4000)

    // About Each function()
    $('a').each(function(index,element){

        // console.log(index + "  "+ element.innerHTML);

        // Ananymous function
        console.log(index + "  "+ $(element).text());
    })
    // callBack function

    $('a').each(eachFunction)

    function eachFunction(index,element){
        console.log(index + "  "+$(element).text());
    }

    // To extract all properties for html elements we use this concept.

    // Global Variable
    let classNames = [];


    $('a[class]').each(function(i){
        classNames[i] = $(this).attr('class')
    });

    console.log(classNames.join(' , '));

    // Filter the Serial Number and apply styles

    $('.order-three > li').each(function(index){

        if(index % 2 == 1){
            $(this).addClass('odd')
        }
        else{
            $(this).addClass('green')
        }

    });

    // Adding Attributes using jQuery
    // For the HTML elements without properties and values.

    $('.images > img').each(function(index){

        if(index % 2 == 1){

            $(this).attr({
                src:'./2.jpg',
                alt:'first',
                style:'height:50vh',
                title:'hey',
                class:'first'
            });
        }

        else{

            $(this).attr({
                src: "./2.jpg",
                alt: "second",
                style: "height:50vh",
                title: "second",
                class: "third",
            });
        }

    });

    // About Append - next and Prepend - before
    // Visible Only in DOM

    let firstAppend = $('#append');

    firstAppend.append('<h4 class="append"> Hello jQuery </h4>')

    let secondAppend = $('#append-to');

    secondAppend.prepend('<h2 class="prepend">Hello ReactJs </h2>');

    // About AppendTo-Before and PrependTo-Next

    $('<h4 class="append"> Hello HTML5 </h4>').appendTo(secondAppend);

    $('<h4 class="prepend"> Hello Sass </h4>').prependTo(firstAppend);

    // First select the elements

    // Add class
    $('#meta').addClass('spec');

    // Remove Class
    $('span').removeClass('spec');

    // toggleClass
    $('span, section').click(function(){
        $(this).toggleClass('spec')
    });

    // hasClass
    const classCheck = $('span').hasClass('spec-two');
    console.log(classCheck);

    const classCheckk = $('section').hasClass('spec');
    console.log(classCheckk);

    // CSS
    $('h6').css({
        // Array of CSS Styles
        "color":"red"
    });

    // Click Events
    $('#events').click(function(){
        $('h3').toggleClass('spec')
    });

    // Change Events
    $('#First_Name,#last_Name,#number,#email-id').change(function(){
        $(this).addClass('spec')
    });

    // hover Events
    $('#hover').hover(function(){
        alert('You Hovered Me');
        $(this).addClass('spec')
    });

    // Mouse enter and mouse leave
    $("#mouse").mouseenter(function () {
        $(this).css("color", "yellow");
    }).mouseleave(function () {
        $(this).css("color", "red");
    });

}); 