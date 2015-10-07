var stickyElement = function () {
    // element to be sticky
    var $stickyEl = jQuery("#dfp-ad-right1_300x250");
    // element that will stop the sticky element
    var $stopEl = jQuery('#footer');

    $stickyEl.waypoint('sticky', {
        wrapper: '<div class="article-sticky-wrapper" />',
        stuckClass: 'sticky',
        offset: 90
    });

    $stopEl.waypoint(function (direction) {
        if (direction == 'down') {
            // when scrolling down
            // replace pos:fixed with absolute and set top value to
            // the distance from $stopEl to viewport top minus the 
            // height of the stickyElement 
            var footerOffset = $stopEl.offset();
            $stickyEl.css({
                position: 'absolute',
                top: footerOffset.top - $stickyEl.outerHeight()
            });
        } else if (direction == 'up') {
            // remove the inline styles so sticky styles apply again
            $stickyEl.attr('style', '');
        }

    }, {
        // trigger the waypoint when the bottom of stickyEl touches top of stopEl
        offset: function () {
            return $stickyEl.outerHeight();
        }
    });
};

stickyElement();
