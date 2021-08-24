"use strict";

var menu_open = false;

$(document).ready(() => {
    $(document).keydown((e) => {
        const element = $(document.activeElement);
        //open accordian when enter is pressed and accordian selected (accessibility)
        if (e.key === "Enter" && element.hasClass('accordion')) {
            element.click();
        } else if (e.key === "Enter" && element.hasClass('mob-menu')) {
            nav_open();
        } else if (e.key === "Escape" && menu_open) {
            nav_close();
        }
    })
    //set menu_open to false when mobile menu is closed
    $('#myOverlay').click(() => {
        menu_open = false;
    })
});

function nav_open() {
    $('#mySidebar').show();
    $('#myOverlay').show();
    $('#homeLink').focus();
    menu_open = true;
}

function nav_close() {
    $('#mySidebar').hide();
    $('#myOverlay').hide();
    $('.mob-menu').focus();
    menu_open = false;
}

$(document).on('click', '.ptab', (e) => {
    $('.pdiv').hide();
    $(`#${e.target.dataset.ptype}`).show();
    $('.ptab').removeClass('w3-white w3-text-blue');
    $(e.target).addClass('w3-white w3-text-blue');
})

function toggle_accordion(id) {
    let e = $(`#${id}`);
    e.hasClass('w3-show') ? e.removeClass('w3-show') : e.addClass('w3-show');
}