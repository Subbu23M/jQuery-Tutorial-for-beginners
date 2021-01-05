// For Animations
$(document).ready(function(){

    // Select the button
    // Ananymous function

    $('#btn').click(function(){
        // $('.simple').addClass('hide')
        // $('.simple').hide();

        // Through if...statement
        let simpleDiv = $('.simple')

        if(simpleDiv.is(':hidden')){
            // simpleDiv.show();
            simpleDiv.show('fast');
        }else{
            // simpleDiv.hide();
            simpleDiv.hide('slow');

        }

        // Using toggleClass
        let specialDiv = $('.special');
        specialDiv.toggle('fast');

        // slide and fade
        let fadeHeader = $('.header');

        // fadeHeader.fadeOut('fast').fadeIn('slow');

        // fadeHeader.fadeToggle('slow')

        // parametre1   - Duration
        // parametre2   - Opacity
        fadeHeader.fadeTo(3000,0.3);

        let slideHeader = $('.slide');
        slideHeader.slideToggle('1000');

        let animaParagraph = $('.anima');
        animaParagraph.animate({

            // CSS Properties
            fontSize:'25',
            marginLeft:'-5rem'

        },1000);

    });

    $.ajax({
        url:'simple.txt',
        dataType:'text',

        // Default Method
        method:'GET',

        // Property : function-name

        success:gotData,
        error:noData

    })

    // Ananymous function
    function gotData(data,status){
        console.log(data);
        console.log(status);
        $('#result').text(data);
    }

    // Ananymous function
    function noData(xhr,status){
        console.log(xhr);
        console.log(status);
        alert('no data found')
    }

    // Shorthand Method
    $('#resul').load('simple.txt')
    
    // JSON
    let url = 'quote.json'

    // $.getJSON(url,getData)

    $.ajax({

        url:url,
        dataType:"json",
        method:"GET",

    }).done(getData)

    // Ananymous function
    function getData(data){
        console.log(data);
        $.each(data,workData)
    }

    // Ananymous function
    // Append - Before
    function workData(index,element){

        $('#json').append('<h1 class = "color">'  + element.author +" is the author number:" + index + '</h1>')

    }

});