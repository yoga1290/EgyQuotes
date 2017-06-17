
window.httpCount = window.httpCount | 0;

function onRequest() {
  window.httpCount++;
  console.log(window.httpCount);
  if (window.httpCount > 0) {
    $('#page-loader').addClass('active');
  }
}
function onResponse() {
  window.httpCount--;
  console.log(window.httpCount);
  if (window.httpCount <= 0) {
    $('#page-loader').removeClass('active');
  }
}

function wrap(xhr, data) {
  var successCallback = function() {};
  var errorCallback = function() {};

  xhr.onload = function() {
    if (xhr.readyState === 4) {
      successCallback(JSON.parse(xhr.responseText));
    } else {
      console.log(xhr);
      errorCallback(); //TODO
    }
    onResponse();
  };
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

function get(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  return wrap(xhr);
}

function post(url, data) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader("content-type", "application/json");
  return wrap(xhr, JSON.stringify(data));
}

module.exports = {
  get: get,
  post: post
}
