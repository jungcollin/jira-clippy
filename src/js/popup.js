function doCopy(data) {
  var obj = document.getElementById('copy-clip');
  obj.style.display = '';
  obj.value = data;
  obj.focus();
  obj.select();
  document.execCommand('copy');
  obj.style.display = 'none';
}

chrome.tabs.query({
  active: true,
  windowId: chrome.windows.WINDOW_ID_CURRENT
}, function(tabs) {
  var tab = tabs[0];

  // url, title
  var url = tab.url.split('?')[0];
  var title = tab.title.split(' - ')[0].split(']');
  title = (title.length > 2)? title[1] + ']' + title[2] : title[1];
  doCopy(`${title}(${url})`);
});
