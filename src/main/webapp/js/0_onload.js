var check = window.location.href.match(/#(.*)/) !== null;
if (check) {
    window.history.replaceState(null, null, '/#/');
}