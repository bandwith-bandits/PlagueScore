var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(map);

      L.control.scale().addTo(map);

      // show a marker on the map
      L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);