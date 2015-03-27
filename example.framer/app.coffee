# Require our module
ph = require("placehold")

# Create a new layer
image = new Layer width: Framer.Device.screen.width, height: Framer.Device.screen.height

# Apply placeholder to layer
ph.placeHold(image, "random")
	
image.on Events.Click, -> 
	ph.placeHold(image, "random")

# And just a small star wars thingie
sw = new Layer width: 200, height: 200, image: ph.getUrl("starwars", 100, 109)
sw.center()
