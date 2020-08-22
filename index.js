function nav_open() {
    $('#mySidebar').show();
    $('#myOverlay').show();
}

function nav_close() {
    $('#mySidebar').hide();
    $('#myOverlay').hide();
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