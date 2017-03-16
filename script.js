$(document).ready(function(){
	
	
		$('.crop-img').on({
		click: function(){
			var filename = $(this).attr('src');

			var number = filename.match(/\d+/)[0];
			var caption = captions[number];
			console.log(caption);
			$('#slideshow .caption').empty().text(caption);


			$('#slideshow').css({
				'background-image': 'url(big-images/'+number+'.jpg)'
			}).show();

		}
	});


	$('#slideshow').on({
		click: function(){
			$(this).hide();

		}
	});

	$('a.video-link').on({
		click: function(e){
			e.preventDefault();
			var id = $(this).attr('data-id');
			var top = $(this).position().top;
			var left = $(this).position().left;
			console.log(top, left);
			$('.container').append(
				$('<div>').addClass('video').css({
					top: top,
					left: left
				}).append(
					$('<iframe>').attr({
						frameborder: 0,
						allowfullscreen: true,
						src: 'https://www.youtube.com/embed/'+id+'?autoplay=1',
						width: 720,
						height: 410, // * 0.6
					})
				).on({
					click: function(){
						
						$(this).remove();
					}
				})
			);

		}
	});	
});



var captions = {
	'1': 'Flora&Corpo',
	'2': 'El cielo',
	'3': 'My baby is an idiot',
	'4': 'Lost',
	'5': 'Tri parti',
	'6': 'Double Exposure',
	'7': 'Techno party in Moscow, Russia',
	'8': 'Techno party in Moscow, Russia',
	'9': 'Techno party in Moscow, Russia',
	'10': 'Newspaper design based on  the Kamikazes in the WWII',
	'11': 'Typography project based on Fraktur and the love/obsession with it',
	'12': 'Typography project based on Fraktur and the love/obsession with it',
	'13': ' ',
	'14': 'Analogue technique with plaster bands to have the shape of the torso, technique with alginate powder and plaster to have the shape of the left hand, technique with liquid latex and plaster to have the shape of the right hand and the forearm, technique with modelling clay to have the shape of part of the waist and part of the upper back, technique with air drying clay to have the shape of backside and pelvis, technique with air cotton textile and textile dryer to have the shape of the upper leg',
	'15': ' ',
	'16': 'The Twilight Tarot card re-design',
	'17': 'Ouroboros',
	'18': 'Untitled Gradient IV',
	'19': 'Founded in 2015 by avid and visionary minds, London based techno organisation: Unmasked, is born. Bringing together and uniting as one the people with the music. A journey into a nocturnal space, which glides through the confines between electronic, industrial techno music. Showcased through the transcendent sound system of Funktion One and a live visual sense, each without compromise. Proposing rising artists, selected for their quality of sound and performance. Delivering DJ sets synergising cdj with vinyl, live hybrid performances and authenticity behind the console.',
	'20': 'Founded in 2015 by avid and visionary minds, London based techno organisation: Unmasked, is born. Bringing together and uniting as one the people with the music. A journey into a nocturnal space, which glides through the confines between electronic, industrial techno music. Showcased through the transcendent sound system of Funktion One and a live visual sense, each without compromise. Proposing rising artists, selected for their quality of sound and performance. Delivering DJ sets synergising cdj with vinyl, live hybrid performances and authenticity behind the console.',
	'21': 'Aries',
	'22': 'Libra',
	'23': 'Flyer design for Copenhagen, Denmark',
	'24': 'Flyer design for Copenhagen, Denmark',
	'25': 'After silence that nearest which comes to expressing the inexpressible',
	'26': 'Consumed-Self. Plaster, oil, acrylic, cigarettes.',
	'27': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music.',
	'28': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'29': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'30': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'31': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'34': 'Tango',
	'35':' Monument Podcast series https://soundcloud.com/monument-podcast/monument-91-plattform',
	'36':'Monument Podcast series https://soundcloud.com/monument-podcast/monument-87-iy ',
	'37': 'Urban Sound/Landscape',
	'222': '',
	'223': '(+31) 06 14 90 65 68 sophiamarinadejongy@gmail.com https://soundcloud.com/neithme',
	'224': 'Born and raised in Buenos Aires Argentina, The Hague based graphic designer and visual artist. My main interests are communicating expressive art combined with experiemental sound and different media platforms',
	}

