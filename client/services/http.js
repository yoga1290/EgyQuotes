
window.httpCount = window.httpCount | 0;
// XMLHttpRequest.setRequestHeader(header, value)
var accessToken = window.localStorage.getItem('access_token')

var cookie = window.document.cookie.match(/access_token=([^;]+)/)
if (cookie != null) {
  accessToken = cookie[1]
  window.localStorage.setItem('access_token', cookie[1])
}

var stringQuery = window.location.search.match(/access_token=([^&]+)/)
if (stringQuery != null) {
  accessToken = stringQuery[1]
  window.localStorage.setItem('access_token', stringQuery[1])
}

function onRequest() {
  window.httpCount++;
  if (window.httpCount > 0) {
    $('#page-loader').addClass('active');
  }
}
function onResponse() {
  window.httpCount--;
  if (window.httpCount <= 0) {
    $('#page-loader').removeClass('active');
  }
}

function wrap(xhr, data, noauth=false) {
  var successCallback = function() {};
  var errorCallback = function() {};

  var error = false;
  var onerror = (e) => {
    error = true;
    console.log('$http.error', e)
    var xhr = e.target

    if (parseInt(xhr.status/100) === 4 || parseInt(xhr.status/100) === 0) {
      $('#error-dialog .error').removeClass('active')
      $('#error-dialog .error.c0').addClass('active')
      $('#error-dialog').addClass('active')
    }
    errorCallback();
  };

  xhr.addEventListener("readystatechange", () => {

    if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED && xhr.status === 401) {
      accessToken = null
      window.localStorage.removeItem('access_token')
      // TODO
      $('#error-dialog .error').removeClass('active')
      $('#error-dialog .error.c401').addClass('active')
      $('#error-dialog').addClass('active')
    } else if (xhr.readyState === XMLHttpRequest.DONE && !error) {
      successCallback(JSON.parse(xhr.responseText));
    }
  });
  xhr.addEventListener("loadend", onResponse)

  if (accessToken && !noauth) {
    xhr.setRequestHeader("Authorization", 'bearer ' + accessToken)
  }
  //xhr.addEventListener("abort", onResponse)
  // https://developer.mozilla.org/en-US/docs/Web/Events/loadend
  xhr.addEventListener("loadend", onResponse)
  xhr.addEventListener("error", onerror)
  onRequest();
  xhr.send(data);

  var chain = {
    success: function(callback) {
      successCallback = callback;
      return chain;
    },
    error: function(callback) {
      errorCallback = callback;
      return chain;
    },
    finally: function(callback) {
      successCallback = callback;
      errorCallback = callback;
      return chain;
    },
    xhr: xhr
  };
  return chain;
}

function get(url, noauth) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  return wrap(xhr, undefined ,noauth);
}

function del(url, noauth) {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', url);
  return wrap(xhr, undefined ,noauth);
}
function post(url, data) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader("content-type", "application/json");
  return wrap(xhr, JSON.stringify(data));
}

export default {
  get,
  post,
  delete: del
}
