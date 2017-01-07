var check = window.location.href.match(/OAuth\/.*/) !== null;
if (check) {
    window.history.replaceState(null, null, '/#/');
}

check = window.location.href.match(/access_token=.+/) !== null;
if (check) {
    window.localStorage.setItem('access_token', window.location.search.replace("?access_token=", ""));
}