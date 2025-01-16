    {/* let mapToken = mapToken; */}
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        sttyle: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 8 // starting zoom
    });

    const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates) //Listing.geometry.cordinates
    .setPopup(new mapboxgl.Popup({offset:25 })
    .setHTML(`<h3>${listing.title}</h3><p>Exact location will be provided after booking.`))
    .addTo(map);