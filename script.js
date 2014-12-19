$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        // menu: false,
        // anchors:['', 'home', 'about', 'projects', 'bottom'],
        // navigation: false,
        // navigationPosition: 'right',
        // navigationTooltips: ['home', 'about', 'projects', 'bottom'],
        // slidesNavigation: true,
        // slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'linear',
        easingcss3: 'linear',
        loopBottom: false,
        loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: false,
        // normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        //Design
        // controlArrows: true,
        verticalCentered: true,
        resize : false,
        // sectionsColor : ['#ccc', '#fff'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        // fixedElements: '#header, .footer',
        // responsive: 0,

        //Custom selectors
        // sectionSelector: '.section',
        // slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});
