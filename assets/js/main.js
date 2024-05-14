/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

function showProjectSection() {
    $('.project-section').each(function(index) {
        var projectSection = $(this);
        setTimeout(function() {
            projectSection.addClass('show');
        }, 200 * index);
    });
}

$(document).ready(function() {
    showProjectSection();
});

$(document).ready(function() {
    // Show "Read More" button if description is truncated
    $('.project-details').each(function() {
        var projectDetails = $(this);
        var description = projectDetails.find('.description');
        if (description[0].scrollHeight > description.innerHeight()) {
            projectDetails.find('.read-more-btn').show();
        }
    });

    // Toggle between full and truncated description on "Read More" click
    $('.read-more-btn').click(function(e) {
        e.preventDefault();
        var projectDetails = $(this).closest('.project-details');
        var description = projectDetails.find('.description');
        var readMoreBtn = projectDetails.find('.read-more-btn');
        var readLessBtn = projectDetails.find('.read-less-btn');

        description.css('max-height', 'none');
        readMoreBtn.hide();
        readLessBtn.show();
    });

    // Toggle between full and truncated description on "Read Less" click
    $('.read-less-btn').click(function(e) {
        e.preventDefault();
        var projectDetails = $(this).closest('.project-details');
        var description = projectDetails.find('.description');
        var readMoreBtn = projectDetails.find('.read-more-btn');
        var readLessBtn = projectDetails.find('.read-less-btn');

        description.css('max-height', 'calc(3 * 1.2em)'); // Adjust this value to display three lines
        readLessBtn.hide();
        readMoreBtn.show();
    });
});


$(document).ready(function() {
    // Toggle between full and truncated description on "Read More" click
    $('.read-more-btn').click(function(e) {
        e.preventDefault();
        var projectDetails = $(this).closest('.project-details');
        var description = projectDetails.find('.description');

        // Toggle between truncated and full description
        if (description.hasClass('truncated')) {
            description.removeClass('truncated').css('max-height', 'none');
            $(this).hide();
            projectDetails.find('.read-less-btn').show();
        } else {
            description.addClass('truncated').css('max-height', 'calc(3 * 1.2em)'); // Adjust this value to display three lines
            $(this).show();
            projectDetails.find('.read-less-btn').hide();
        }
    });




	// Toggle between full and truncated description on "Read Less" click
    $('.read-less-btn').click(function(e) {
        e.preventDefault();
        var projectDetails = $(this).closest('.project-details');
        var description = projectDetails.find('.description');
        var readMoreBtn = projectDetails.find('.read-more-btn');
        var readLessBtn = projectDetails.find('.read-less-btn');

        // Toggle between truncated and full description
        if (description.hasClass('truncated')) {
            description.removeClass('truncated').css('max-height', 'none');
            readMoreBtn.hide();
            readLessBtn.show();
        } else {
            description.addClass('truncated').css('max-height', 'calc(3 * 1.2em)'); // Adjust this value to display three lines
            readMoreBtn.show();
            readLessBtn.hide();
        }
    });
});
