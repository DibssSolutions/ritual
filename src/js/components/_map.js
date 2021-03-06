const EasyGoogleMaps = require('easygooglemaps');
const mapNode = $('.js-map');

if (mapNode.length) {
  mapNode.each((i,container) => {
    const id = $(container).attr('id');
    if (!id) return;
    let map = new EasyGoogleMaps({
      map: {
        APIKEY: 'AIzaSyDMWIxCN9ijYRfiH7bmQN-LNRDtoboLZqY',
        container: `#${id}`,
        options: {
          center: {
            lat: +mapNode.data('center-lat'),
            lng: +mapNode.data('center-lng')
          },
          zoom: 8,
          styles: [
            {
              'featureType': 'administrative',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#444444'
                }
              ]
            },
            {
              'featureType': 'administrative.country',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#623c38'
                }
              ]
            },
            {
              'featureType': 'administrative.province',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#623c38'
                }
              ]
            },
            {
              'featureType': 'administrative.province',
              'elementType': 'geometry.stroke',
              'stylers': [
                {
                  'hue': '#ff0000'
                },
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'administrative.locality',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#623c38'
                }
              ]
            },
            {
              'featureType': 'administrative.neighborhood',
              'elementType': 'labels',
              'stylers': [
                {
                  'visibility': 'on'
                }
              ]
            },
            {
              'featureType': 'administrative.neighborhood',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#633d38'
                }
              ]
            },
            {
              'featureType': 'administrative.land_parcel',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'on'
                }
              ]
            },
            {
              'featureType': 'administrative.land_parcel',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#633d38'
                }
              ]
            },
            {
              'featureType': 'landscape',
              'elementType': 'all',
              'stylers': [
                {
                  'color': '#f2f2f2'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.business',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.government',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.medical',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.place_of_worship',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.school',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'poi.sports_complex',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': -100
                },
                {
                  'lightness': 45
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'simplified'
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'on'
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'transit',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'all',
              'stylers': [
                {
                  'color': '#dcd7d2'
                },
                {
                  'visibility': 'on'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#ddd7d3'
                }
              ]
            }
          ]
        }
      },

      infobox: {
        template: `.js-${id}`,
        class: 'awesome-infobox',
        onlyOneBox: true,
        style: {
          width: '571px'
        },
        position: {
          x: 'right',
          y: 'center'
        },
        closeButton: '.js-infobox-close'
      }
    });
    window[id] = map;
    window[id].init();
  });
}
