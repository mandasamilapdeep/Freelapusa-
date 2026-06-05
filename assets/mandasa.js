function hideShowFindSetup(){
    var findCombination = "";
    var findCombinationFirst = $('.button_group_box.first .find_btn.active').text().trim();
    var findCombinationSecond = $('.button_group_box.second .find_btn.active').text().trim();
    findCombination = `${findCombinationFirst} ${findCombinationSecond}`;
    $('.right_side_inner').each(function(){
        var combination = $(this).attr('combination');
        if(findCombination == combination){
            $(this).show();
        }else {
            $(this).hide();
        }
    })
    // alert(findCombination);
}



$(document).on('click', '.find_btn', function(){
    if(!$(this).hasClass('active')){
        $(this).closest('.buttons_box').find('.find_btn.active').removeClass('active');
        $(this).addClass('active');
        hideShowFindSetup();
    }
});

$(document).on('input', '.custom-main-search .main-search__input', function(){
    var customInputVal = $(this).val();
    if(customInputVal !== ""){
       $('.custom-main-search .main-search__close').show();
    }else {
       $('.custom-main-search .main-search__close').hide(); 
    }
});

$(document).on('click', '.custom-main-search .main-search__close', function() {
    const input = document.querySelector('.custom-main-search .main-search__input');

    input.value = '';

    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keyup', {
        key: 'Backspace',
        bubbles: true
    }));

    $('.custom-main-search').removeClass('main-search--has-results main-search--no-results');
    $('.main-search__results').empty();
    $('.custom-main-search .main-search__close').hide(); 
});