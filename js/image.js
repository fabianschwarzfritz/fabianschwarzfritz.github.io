var DefaultConfig = {
	count: 76,
	directory: '/images/unsplash/',
	type: 'jpg'
};

var BackgroundChanger = function(spec) {
	spec = spec || DefaultConfig;

	function change() {
		var num = Math.ceil(Math.random() * spec.count);
		document.body.background = spec.directory + num + '.' + spec.type;
		console.log('changeBackgrund', document.body.background);
		// document.body.style.backgroundRepeat = "repeat";
	}

	return Object.freeze({
		change: change
	});
};

new BackgroundChanger().change();
