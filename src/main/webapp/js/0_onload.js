var check = window.location.href.match(/OAuth\/.*/) !== null;
if (check) {
    window.history.replaceState(null, null, '/#/');
}