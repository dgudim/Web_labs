window.onscroll = function () { scroll() };

var header = document.getElementById("nav");
var content = document.getElementById("content");
var sticky = header.offsetTop;

function scroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("content_sticky");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("content_sticky");
  }
}

window.slider_init = function() {

  var slider_options = {
    $AutoPlay: 0,
    $SlideWidth: 720,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16
    }
  };

  var slider = new $JssorSlider$("slider", slider_options);

  /*#region responsive code begin*/
  
  function ScaleSlider() {
      var containerElement = slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {
          slider.$ScaleWidth(containerWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
};