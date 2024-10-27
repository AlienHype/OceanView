        // Initialize the map 
        var map = L.map('map').setView([-20.3484, 57.5522], 10); 

       
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(map);
 
        // Function to add a marker on map click
       function onMapClick(e) {
        // Create a marker at the clicked position
        var marker = L.marker(e.latlng).addTo(map);
 
        // Prompt user for a comment and bind it to the marker as a popup
        var userComment = prompt("Enter a comment for this location:");
        if (userComment) {
       marker.bindPopup(userComment).openPopup();
     }
 
         // Add a right-click listener (context menu) to remove the marker
         marker.on('contextmenu', function () {
         map.removeLayer(marker); 
     });
     }
 
       // Listen for clicks on the map to add markers
        map.on('click', onMapClick);