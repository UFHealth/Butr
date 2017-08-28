var butr = (function () {
'use strict';

/**
 * To
 * @param  {Object} options
 * @return
 */
var To = function To() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var start = void 0,
      distance = void 0,
      counter = void 0,
      step = void 0,
      el = options.el ? document.querySelector(options.el) : document.body,
      location = options.location || 0,
      direction = options.direction || 'y',
      duration = options.duration || 800,
      userCallback = options.callback || null,
      markerCallback = options.markerCallback || null;

  var getLocation = function getLocation() {
    if (direction === 'x') return el.scrollLeft;
    if (direction === 'y') return el.scrollTop;
  };

  var easing = function easing(t, b, c, d) {
    // http://gizma.com/easing/#quad3
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  var scrollEl = function scrollEl(distance) {
    if (direction === 'x') el.scrollLeft = distance;
    if (direction === 'y') el.scrollTop = distance;
  };

  var animationLoop = function animationLoop() {
    counter += step;
    scrollEl(easing(counter, start, distance, duration));
    if (counter < duration) requestAnimationFrame(animationLoop);else {
      if (typeof userCallback === 'function') userCallback();
      if (typeof markerCallback === 'function') markerCallback();
    }
  };

  var init = function init() {
    start = getLocation();
    distance = location - start;
    counter = 0;
    step = 33; // 30~ FPS
    animationLoop();
  };

  init();
};

/**
 * Marker
 * @param  {Object} options
 * @return
 */
var Marker = function Marker() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var top = void 0,
      topMostSection = void 0,
      marker = void 0,
      safeToUpdate = true,
      ignoreScrollEvents = false,
      useTo = options.useTo || false,
      duration = options.duration || 400,
      container = options.container ? document.querySelector(options.container) : document.body,
      nav = document.querySelector('.js-butr-nav') || false,
      links = document.querySelectorAll('.js-butr-link') || false,
      sections = document.querySelectorAll('.js-butr-section') || false;

  var getDistanceFromTop = function getDistanceFromTop(el) {
    return el.offsetTop - container.offsetTop + el.offsetHeight;
  };

  var checkRequiredElements = function checkRequiredElements() {
    if (!nav || !links || !sections) {
      console.error('Error: Missing required classes on nav, links, or sections. Aborted setup of Butr.Marker');
      return false;
    } else return true;
  };

  var createMarker = function createMarker() {
    marker = document.createElement('div');
    marker.classList.add('js-butr-marker');
    marker.style.height = links[0].offsetHeight + 'px';
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    marker.style.transition = duration + 'ms transform cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    nav.appendChild(marker);
  };

  var setMarkerPosition = function setMarkerPosition(activeLink) {
    marker.style.transform = 'translateY(' + activeLink.offsetTop + 'px)';
  };

  var setupLinkEvents = function setupLinkEvents() {
    var _loop = function _loop(i) {
      links[i].addEventListener('click', function (e) {
        ignoreScrollEvents = true;
        var linkHash = links[i].hash.replace('#', '');
        setActive(linkHash);
        if (useTo) setupSmoothLinks(e, linkHash);
      });
    };

    for (var i = 0; i < links.length; i++) {
      _loop(i);
    }
  };

  var setupSmoothLinks = function setupSmoothLinks(e, linkHash) {
    e.preventDefault();
    To({
      location: document.getElementById(linkHash).offsetTop,
      markerCallback: function markerCallback() {
        ignoreScrollEvents = false;
      }
    });
  };

  var checkActive = function checkActive() {
    for (var i = 0; i < sections.length; i++) {
      var distance = getDistanceFromTop(sections[i]);
      if (distance > top) {
        if (topMostSection !== sections[i]) {
          topMostSection = sections[i];
          setActive(topMostSection.id);
        }
        break;
      }
    }
  };

  var setActive = function setActive(id) {
    var previouslyActive = document.querySelector('.js-butr-link.js-butr-active');
    var currentlyActive = document.querySelector('.js-butr-link[href="#' + id + '"]');
    if (currentlyActive !== previouslyActive) {
      if (previouslyActive) previouslyActive.classList.remove('js-butr-active');
      currentlyActive.classList.add('js-butr-active');
    }
    setMarkerPosition(currentlyActive);
  };

  var updateNav = function updateNav() {
    top = container.scrollTop;
    checkActive();
  };

  var animationLoop = function animationLoop() {
    if (ignoreScrollEvents) return;
    if (safeToUpdate) {
      requestAnimationFrame(function () {
        updateNav();
        safeToUpdate = true;
      });
    }
    safeToUpdate = false;
  };

  var init = function init() {
    createMarker();
    setupLinkEvents();
    updateNav();
    window.addEventListener('scroll', animationLoop);
  };

  if (checkRequiredElements()) init();
};

var butr = {
  To: To,
  Marker: Marker
};

return butr;

}());