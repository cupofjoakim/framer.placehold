# framer.placehold
This is a module for framer that provides a library of different image placeholder services.

![The majestic nicolas cage in an example vision of this framer module](https://cloud.githubusercontent.com/assets/2109753/6866277/e0bcc5b6-d476-11e4-8766-22404b90bc52.jpg)

## Installation
Put placehold.coffee in your modules folder.

## Usage
First, require the module.
````
# Require our module
module = require("placehold")
````

### module.placehold( layer:obj, style:str )
This function applies a image to a layer. It will take the same dimensions as the layer and will be set to layer.image. It takes two arguments, a layer object and a style string. Read more about the style strings at that section. 

````
module.placehold( layer, "fatcats" )
````

### module.getUrl( style:str, width:int, height:int )
If you just want the url for a placeholder, call this function. It takes three arguments, a style string, a width integer and a height integer. Read more about the style strings at that section.

````
module.getUrl( "cage", 150, 150 )
````

## Available styles
### simple
"simple" is the simplest style - with a simple box with the dimensions in it. Provided by [placehold.it][placeholdit].

### pretty
"pretty" takes images from every designers favorite placeholder source - [unsplash.it][unsplash]. It's all very nice. This is also the default for module.placehold() if no style string is provided.

### cage
"cage" sets all your images to be of one of our greatest actors, nicolas cage. Provided by [placecage.com][cage].

### crazy-cage
A crazier version of "cage". Provided by [placecage.com][cage].

### murray
Bill.  I love you, and you should be in everything anyone makes. Placeholder server provided by [fillmurray.com][murray].

### starwars
Star Wars imagery courtesy of [420placehold.it][420].

### startrek
Star Trek imagery curtesy of [420placehold.it][420]. R.I.P Leonard Nimoy.

### space
Space imagery courtesy of [420placehold.it][420].

### fatcats
Images of fat cats. Courtesy of [420placehold.it][420].

### familyphotos
Awkward family photos, now in your framer prototypes. Courtesy of [420placehold.it][420].

## Generous License, because this is like 15 lines of code.
The MIT License (MIT)
Copyright (c) 2015 Joakim Wimmerstedt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[420]: http://420placehold.it/
[cage]: http://placecage.com/
[murray]: http://fillmurray.com
[unsplash]: http://unsplash.it
[placeholdit]: http://placehold.it 
