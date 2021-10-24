function _(el) {
    return document.getElementById(el);
}
  
function uploadFile() {
    var file = _("file1").files[0];
    _("txt").innerHTML = file.name;
}