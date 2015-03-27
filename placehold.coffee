styleArr = ["simple", "pretty", "cage", "crazy-cage", "murray", "starwars", "startrek", "space", "fatcats", "familyphotos"]

randomStyle = ( layer ) ->
    style = styleArr[Math.floor(Math.random() * styleArr.length)]
    applyStyle( layer, style )

createUrl = (style, width, height) ->

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

exports.placeHold = ( layer, style ) ->

    if layer
        if style != "random"
            applyStyle( layer, style )
        else
            randomStyle( layer, style )

exports.getUrl = ( style, width, height ) -> 
    return createUrl( style, width, height )