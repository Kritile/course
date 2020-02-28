
    ymaps.ready(init);
    function init(){

        var myMap = new ymaps.Map("map", {

            center: [39.746582, -104.874911],

            zoom: 11
        });
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [39.746582, -104.874911] // координаты точки
            }
        });
        
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject); 
    }
  
