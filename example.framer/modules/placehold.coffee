styleArr = ["simple", "pretty", "cage", "crazy-cage", "murray", "starwars", "startrek", "space", "fatcats", "familyphotos"]

randomStyle = ->
    return style = styleArr[Math.floor(Math.random() * styleArr.length)]


createUrl = (style, width, height) ->

    # If no style has been provided we go with a pretty image from unsplash.it
    switch style
        when "simple"
            url = "http://placehold.it/" + width + '/' + height 
        when "pretty"
            url = "https://unsplash.it/" + width + '/' + height 
        when "cage"
            url = "http://www.placecage.com/" + width + '/' + height  
        when "crazy-cage"
            url = "http://www.placecage.com/c/" + width + '/' + height  
        when "murray"
            url = "http://www.fillmurray.com/" + width + '/' + height  
        when "starwars"
            url = "http://420placehold.it/starwars/" + width + '-' + height 
        when "startrek"
            url = "http://420placehold.it/startrek/" + width + '-' + height 
        when "space"
            url = "http://420placehold.it/space/" + width + '-' + height  
        when "fatcats"
            url = "http://420placehold.it/fatcats/" + width + '-' + height 
        when "familyphotos"
            url = "http://420placehold.it/familyphotos/" + width + '-' + height 
        else
            url = "https://unsplash.it/" + width + '/' + height 

    return url

applyStyle = ( layer, style ) ->
    niceUrl = createUrl(style, layer.width, layer.height)
    layer.image = niceUrl


# API METHODS

## placehold sets an image to the layer that has been passed through
exports.placehold = ( layer, style ) ->
    if layer
        if style == "random"
            style = randomStyle()

        applyStyle( layer, style )
    else
        console.log("Please provide a layer.")

## getUrl returns a placeholder url that the user has more freedom with
exports.getUrl = ( style, width, height ) -> 
    if style == "random"
        style = randomStyle()

    return createUrl( style, width, height )