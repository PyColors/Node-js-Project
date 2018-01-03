export let ConfigConstants = {};

export function loadJSON() {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'config.json', false);
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      ConfigConstants = JSON.parse(xobj.responseText);
    }
  };
  xobj.send(null);  
}
