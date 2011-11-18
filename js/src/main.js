(function(){
	window.Orbits = Orbits({
		renderer:{
			earthimg:"./images/earth.png"

		},
		physics:{

		},
		ui:{
			canvas:"CANVAS_BOARD",
			satmass:"SAT_MASS_INPUT",
			earthmass:"EARTH_MASS_INPUT",
			earthmasslbl:"EARTH_MASS_LBL",
			initx:"INIT_X_INPUT",
			inity:"INIT_Y_INPUT",
			defaultsatmass:1,
			defaultearthmass:1000,
			defaultinitx: -1,
			defaultinity: .2
		},
		settings:{
			earth: {
				x: 310,
				y: 250,
				r: 10,
				m: 100
			}
		}
	});

	setInterval(function(){
		Physics.reCalc();
		Renderer.redraw();
	}, 25);

})();
