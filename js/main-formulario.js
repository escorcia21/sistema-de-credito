function _(el) {
    return document.getElementById(el);
}
  
function uploadCedula() {
    var file = _("file1").files[0];
    _("txt").innerHTML = file.name;
}

function uploadCarta() {
    var file = _("file2").files[0];
    _("tx1").innerHTML = file.name;
}