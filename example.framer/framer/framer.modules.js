require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"placehold":[function(require,module,exports){
var applyStyle, createUrl, randomStyle, styleArr;

styleArr = ["simple", "pretty", "cage", "crazy-cage", "murray", "starwars", "startrek", "space", "fatcats", "familyphotos"];

randomStyle = function() {
  var style;
  return style = styleArr[Math.floor(Math.random() * styleArr.length)];
};

createUrl = function(style, width, height) {
  var url;
  switch (style) {
    case "simple":
      url = "http://placehold.it/" + width + '/' + height;
      break;
    case "pretty":
      url = "https://unsplash.it/" + width + '/' + height;
      break;
    case "cage":
      url = "http://www.placecage.com/" + width + '/' + height;
      break;
    case "crazy-cage":
      url = "http://www.placecage.com/c/" + width + '/' + height;
      break;
    case "murray":
      url = "http://www.fillmurray.com/" + width + '/' + height;
      break;
    case "starwars":
      url = "http://420placehold.it/starwars/" + width + '-' + height;
      break;
    case "startrek":
      url = "http://420placehold.it/startrek/" + width + '-' + height;
      break;
    case "space":
      url = "http://420placehold.it/space/" + width + '-' + height;
      break;
    case "fatcats":
      url = "http://420placehold.it/fatcats/" + width + '-' + height;
      break;
    case "familyphotos":
      url = "http://420placehold.it/familyphotos/" + width + '-' + height;
      break;
    default:
      url = "https://unsplash.it/" + width + '/' + height;
  }
  return url;
};

applyStyle = function(layer, style) {
  var niceUrl;
  niceUrl = createUrl(style, layer.width, layer.height);
  return layer.image = niceUrl;
};

exports.placehold = function(layer, style) {
  if (layer) {
    if (style === "random") {
      style = randomStyle();
    }
    return applyStyle(layer, style);
  } else {
    return console.log("Please provide a layer.");
  }
};

exports.getUrl = function(style, width, height) {
  if (style === "random") {
    style = randomStyle();
  }
  return createUrl(style, width, height);
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvd2ltbWVyc3RlZHQvZGV2LzAxLXJlcG9zLzE2LWZyYW1lci5wbGFjZUhvbGQvZnJhbWVyLnBsYWNlSG9sZC9leGFtcGxlLmZyYW1lci9tb2R1bGVzL3BsYWNlaG9sZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLDRDQUFBOztBQUFBLFFBQUEsR0FBVyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE1BQXJCLEVBQTZCLFlBQTdCLEVBQTJDLFFBQTNDLEVBQXFELFVBQXJELEVBQWlFLFVBQWpFLEVBQTZFLE9BQTdFLEVBQXNGLFNBQXRGLEVBQWlHLGNBQWpHLENBQVgsQ0FBQTs7QUFBQSxXQUVBLEdBQWMsU0FBQSxHQUFBO0FBQ1YsTUFBQSxLQUFBO0FBQUEsU0FBTyxLQUFBLEdBQVEsUUFBUyxDQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLFFBQVEsQ0FBQyxNQUFwQyxDQUFBLENBQXhCLENBRFU7QUFBQSxDQUZkLENBQUE7O0FBQUEsU0FNQSxHQUFZLFNBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEdBQUE7QUFHUixNQUFBLEdBQUE7QUFBQSxVQUFPLEtBQVA7QUFBQSxTQUNTLFFBRFQ7QUFFUSxNQUFBLEdBQUEsR0FBTSxzQkFBQSxHQUF5QixLQUF6QixHQUFpQyxHQUFqQyxHQUF1QyxNQUE3QyxDQUZSO0FBQ1M7QUFEVCxTQUdTLFFBSFQ7QUFJUSxNQUFBLEdBQUEsR0FBTSxzQkFBQSxHQUF5QixLQUF6QixHQUFpQyxHQUFqQyxHQUF1QyxNQUE3QyxDQUpSO0FBR1M7QUFIVCxTQUtTLE1BTFQ7QUFNUSxNQUFBLEdBQUEsR0FBTSwyQkFBQSxHQUE4QixLQUE5QixHQUFzQyxHQUF0QyxHQUE0QyxNQUFsRCxDQU5SO0FBS1M7QUFMVCxTQU9TLFlBUFQ7QUFRUSxNQUFBLEdBQUEsR0FBTSw2QkFBQSxHQUFnQyxLQUFoQyxHQUF3QyxHQUF4QyxHQUE4QyxNQUFwRCxDQVJSO0FBT1M7QUFQVCxTQVNTLFFBVFQ7QUFVUSxNQUFBLEdBQUEsR0FBTSw0QkFBQSxHQUErQixLQUEvQixHQUF1QyxHQUF2QyxHQUE2QyxNQUFuRCxDQVZSO0FBU1M7QUFUVCxTQVdTLFVBWFQ7QUFZUSxNQUFBLEdBQUEsR0FBTSxrQ0FBQSxHQUFxQyxLQUFyQyxHQUE2QyxHQUE3QyxHQUFtRCxNQUF6RCxDQVpSO0FBV1M7QUFYVCxTQWFTLFVBYlQ7QUFjUSxNQUFBLEdBQUEsR0FBTSxrQ0FBQSxHQUFxQyxLQUFyQyxHQUE2QyxHQUE3QyxHQUFtRCxNQUF6RCxDQWRSO0FBYVM7QUFiVCxTQWVTLE9BZlQ7QUFnQlEsTUFBQSxHQUFBLEdBQU0sK0JBQUEsR0FBa0MsS0FBbEMsR0FBMEMsR0FBMUMsR0FBZ0QsTUFBdEQsQ0FoQlI7QUFlUztBQWZULFNBaUJTLFNBakJUO0FBa0JRLE1BQUEsR0FBQSxHQUFNLGlDQUFBLEdBQW9DLEtBQXBDLEdBQTRDLEdBQTVDLEdBQWtELE1BQXhELENBbEJSO0FBaUJTO0FBakJULFNBbUJTLGNBbkJUO0FBb0JRLE1BQUEsR0FBQSxHQUFNLHNDQUFBLEdBQXlDLEtBQXpDLEdBQWlELEdBQWpELEdBQXVELE1BQTdELENBcEJSO0FBbUJTO0FBbkJUO0FBc0JRLE1BQUEsR0FBQSxHQUFNLHNCQUFBLEdBQXlCLEtBQXpCLEdBQWlDLEdBQWpDLEdBQXVDLE1BQTdDLENBdEJSO0FBQUEsR0FBQTtBQXdCQSxTQUFPLEdBQVAsQ0EzQlE7QUFBQSxDQU5aLENBQUE7O0FBQUEsVUFtQ0EsR0FBYSxTQUFFLEtBQUYsRUFBUyxLQUFULEdBQUE7QUFDVCxNQUFBLE9BQUE7QUFBQSxFQUFBLE9BQUEsR0FBVSxTQUFBLENBQVUsS0FBVixFQUFpQixLQUFLLENBQUMsS0FBdkIsRUFBOEIsS0FBSyxDQUFDLE1BQXBDLENBQVYsQ0FBQTtTQUNBLEtBQUssQ0FBQyxLQUFOLEdBQWMsUUFGTDtBQUFBLENBbkNiLENBQUE7O0FBQUEsT0EyQ08sQ0FBQyxTQUFSLEdBQW9CLFNBQUUsS0FBRixFQUFTLEtBQVQsR0FBQTtBQUNoQixFQUFBLElBQUcsS0FBSDtBQUNJLElBQUEsSUFBRyxLQUFBLEtBQVMsUUFBWjtBQUNJLE1BQUEsS0FBQSxHQUFRLFdBQUEsQ0FBQSxDQUFSLENBREo7S0FBQTtXQUdBLFVBQUEsQ0FBWSxLQUFaLEVBQW1CLEtBQW5CLEVBSko7R0FBQSxNQUFBO1dBTUksT0FBTyxDQUFDLEdBQVIsQ0FBWSx5QkFBWixFQU5KO0dBRGdCO0FBQUEsQ0EzQ3BCLENBQUE7O0FBQUEsT0FxRE8sQ0FBQyxNQUFSLEdBQWlCLFNBQUUsS0FBRixFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsR0FBQTtBQUNiLEVBQUEsSUFBRyxLQUFBLEtBQVMsUUFBWjtBQUNJLElBQUEsS0FBQSxHQUFRLFdBQUEsQ0FBQSxDQUFSLENBREo7R0FBQTtBQUdBLFNBQU8sU0FBQSxDQUFXLEtBQVgsRUFBa0IsS0FBbEIsRUFBeUIsTUFBekIsQ0FBUCxDQUphO0FBQUEsQ0FyRGpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwic3R5bGVBcnIgPSBbXCJzaW1wbGVcIiwgXCJwcmV0dHlcIiwgXCJjYWdlXCIsIFwiY3JhenktY2FnZVwiLCBcIm11cnJheVwiLCBcInN0YXJ3YXJzXCIsIFwic3RhcnRyZWtcIiwgXCJzcGFjZVwiLCBcImZhdGNhdHNcIiwgXCJmYW1pbHlwaG90b3NcIl1cblxucmFuZG9tU3R5bGUgPSAtPlxuICAgIHJldHVybiBzdHlsZSA9IHN0eWxlQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0eWxlQXJyLmxlbmd0aCldXG5cblxuY3JlYXRlVXJsID0gKHN0eWxlLCB3aWR0aCwgaGVpZ2h0KSAtPlxuXG4gICAgIyBJZiBubyBzdHlsZSBoYXMgYmVlbiBwcm92aWRlZCB3ZSBnbyB3aXRoIGEgcHJldHR5IGltYWdlIGZyb20gdW5zcGxhc2guaXRcbiAgICBzd2l0Y2ggc3R5bGVcbiAgICAgICAgd2hlbiBcInNpbXBsZVwiXG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvXCIgKyB3aWR0aCArICcvJyArIGhlaWdodCBcbiAgICAgICAgd2hlbiBcInByZXR0eVwiXG4gICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vdW5zcGxhc2guaXQvXCIgKyB3aWR0aCArICcvJyArIGhlaWdodCBcbiAgICAgICAgd2hlbiBcImNhZ2VcIlxuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vd3d3LnBsYWNlY2FnZS5jb20vXCIgKyB3aWR0aCArICcvJyArIGhlaWdodCAgXG4gICAgICAgIHdoZW4gXCJjcmF6eS1jYWdlXCJcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovL3d3dy5wbGFjZWNhZ2UuY29tL2MvXCIgKyB3aWR0aCArICcvJyArIGhlaWdodCAgXG4gICAgICAgIHdoZW4gXCJtdXJyYXlcIlxuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vd3d3LmZpbGxtdXJyYXkuY29tL1wiICsgd2lkdGggKyAnLycgKyBoZWlnaHQgIFxuICAgICAgICB3aGVuIFwic3RhcndhcnNcIlxuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vNDIwcGxhY2Vob2xkLml0L3N0YXJ3YXJzL1wiICsgd2lkdGggKyAnLScgKyBoZWlnaHQgXG4gICAgICAgIHdoZW4gXCJzdGFydHJla1wiXG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly80MjBwbGFjZWhvbGQuaXQvc3RhcnRyZWsvXCIgKyB3aWR0aCArICctJyArIGhlaWdodCBcbiAgICAgICAgd2hlbiBcInNwYWNlXCJcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cDovLzQyMHBsYWNlaG9sZC5pdC9zcGFjZS9cIiArIHdpZHRoICsgJy0nICsgaGVpZ2h0ICBcbiAgICAgICAgd2hlbiBcImZhdGNhdHNcIlxuICAgICAgICAgICAgdXJsID0gXCJodHRwOi8vNDIwcGxhY2Vob2xkLml0L2ZhdGNhdHMvXCIgKyB3aWR0aCArICctJyArIGhlaWdodCBcbiAgICAgICAgd2hlbiBcImZhbWlseXBob3Rvc1wiXG4gICAgICAgICAgICB1cmwgPSBcImh0dHA6Ly80MjBwbGFjZWhvbGQuaXQvZmFtaWx5cGhvdG9zL1wiICsgd2lkdGggKyAnLScgKyBoZWlnaHQgXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHVybCA9IFwiaHR0cHM6Ly91bnNwbGFzaC5pdC9cIiArIHdpZHRoICsgJy8nICsgaGVpZ2h0IFxuXG4gICAgcmV0dXJuIHVybFxuXG5hcHBseVN0eWxlID0gKCBsYXllciwgc3R5bGUgKSAtPlxuICAgIG5pY2VVcmwgPSBjcmVhdGVVcmwoc3R5bGUsIGxheWVyLndpZHRoLCBsYXllci5oZWlnaHQpXG4gICAgbGF5ZXIuaW1hZ2UgPSBuaWNlVXJsXG5cblxuIyBBUEkgTUVUSE9EU1xuXG4jIyBwbGFjZWhvbGQgc2V0cyBhbiBpbWFnZSB0byB0aGUgbGF5ZXIgdGhhdCBoYXMgYmVlbiBwYXNzZWQgdGhyb3VnaFxuZXhwb3J0cy5wbGFjZWhvbGQgPSAoIGxheWVyLCBzdHlsZSApIC0+XG4gICAgaWYgbGF5ZXJcbiAgICAgICAgaWYgc3R5bGUgPT0gXCJyYW5kb21cIlxuICAgICAgICAgICAgc3R5bGUgPSByYW5kb21TdHlsZSgpXG5cbiAgICAgICAgYXBwbHlTdHlsZSggbGF5ZXIsIHN0eWxlIClcbiAgICBlbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHByb3ZpZGUgYSBsYXllci5cIilcblxuIyMgZ2V0VXJsIHJldHVybnMgYSBwbGFjZWhvbGRlciB1cmwgdGhhdCB0aGUgdXNlciBoYXMgbW9yZSBmcmVlZG9tIHdpdGhcbmV4cG9ydHMuZ2V0VXJsID0gKCBzdHlsZSwgd2lkdGgsIGhlaWdodCApIC0+IFxuICAgIGlmIHN0eWxlID09IFwicmFuZG9tXCJcbiAgICAgICAgc3R5bGUgPSByYW5kb21TdHlsZSgpXG5cbiAgICByZXR1cm4gY3JlYXRlVXJsKCBzdHlsZSwgd2lkdGgsIGhlaWdodCApIl19
