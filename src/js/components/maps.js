import {Loader} from '@googlemaps/js-api-loader';

if (document.getElementById('map')) {
	let map;
	let mapId = document.getElementById('map');
	let mapKey = mapId.dataset.key;
	let mapLat = mapId.dataset.lat;
	let mapLng = mapId.dataset.lng;
	let mapPin = mapId.dataset.pin;

	const loader = new Loader({
		apiKey: mapKey,
		version: 'weekly',
	});

	loader.load().then(() => {
    	const loc = {
			lat: Number(mapLat),
    		lng: Number(mapLng),
		};
    	map = new google.maps.Map(mapId, {
    		center: loc,
    		zoom: 15,
    		disableDefaultUI: true,
    		styles: stylesMap,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
    	});
    	const marker = new google.maps.Marker({
    		position: loc,
    		map,
    		icon: mapPin,
    	});
	});

	document.addEventListener('DOMContentLoaded', () => {
		setTimeout(() => {
			Element.prototype.removeAttributes = function (...attrs) {
				attrs.forEach((attr) => this.removeAttribute(attr));
			};

			mapId.removeAttributes('data-key', 'data-lat', 'data-lng', 'data-pin');
		}, 3000);
	});

	const stylesMap = [
		{
			elementType: 'geometry',
			stylers: [
				{
					color: '#f5f5f5',
				},
			],
		},
		{
			elementType: 'labels.icon',
			stylers: [
				{
					visibility: 'on',
				},
			],
		},
		{
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#616161',
				},
			],
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [
				{
					color: '#f5f5f5',
				},
			],
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#bdbdbd',
				},
			],
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [
				{
					color: '#eeeeee',
				},
			],
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [
				{
					color: '#e5e5e5',
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{
					color: '#ffffff',
				},
			],
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#757575',
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [
				{
					color: '#dadada',
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#616161',
				},
			],
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [
				{
					color: '#e5e5e5',
				},
			],
		},
		{
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [
				{
					color: '#eeeeee',
				},
			],
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [
				{
					color: '#c9c9c9',
				},
			],
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [
				{
					color: '#9e9e9e',
				},
			],
		},
	];
}
