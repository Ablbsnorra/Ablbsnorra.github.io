const form = document.querySelector('form'); // get the form element
const resultDiv = document.getElementById('result'); // get the div to display the result

form.addEventListener('submit', event => { // add an event listener for form submission
  event.preventDefault(); // prevent the form from submitting
  // If you remove event.preventDefault(), 
  // the form will submit and the page will reload
  // "event =>" define arrow function with a single parameter named event
  
  // Get the coordinates of the two points from the input fields
  const x1 = Number(document.getElementById('x1').value);
  const y1 = Number(document.getElementById('y1').value);
  const x2 = Number(document.getElementById('x2').value);
  const y2 = Number(document.getElementById('y2').value);
  
  // Calculate the distance between the two points using the distance (Haversine) formula
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) * 63710;
  const timeSec = distance/5.56; // ca 5.56 m/s schooter speed in town
  const timeMin = timeSec/60
  // Display the result in the div element
  resultDiv.textContent = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)} meters and it takes ${timeMin.toFixed(2)} 
  minutes to travel with average speed 20 km/h.`;
});
