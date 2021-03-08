// api url 
const api_url = 
	"https://api.rootnet.in/covid19-in/hospitals/beds"; 

// Defining async function 
async function getapi(url) { 
	
	// Storing response 
	const response = await fetch(url); 
	
	// Storing data in form of JSON 
	var data = await response.json(); 
	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
	let tab = 
		`<tr style="color:#ff4b5c;font-size:25px; text-align: center;"> 
		<th style="padding:10px;">state</th>
        <th style="padding:10px;">ruralHospitals</th>
        <th style="padding:10px;">ruralBeds</th>
        <th style="padding:10px;">urbanHospitals</th>
        <th style="padding:10px;">urbanBeds</th>
        <th style="padding:10px;">totalHospitals</th>
        <th style="padding:10px;">totalBeds</th>
        <th style="padding:10px;">asOn</th>
		</tr>`; 
	
	// Loop to access all rows 
	for (let r of data.data.regional) { 
		tab += `<tr> 
	<td style="padding: 10px 0px 10px 30px;">${r.state} </td> 
	<td style="padding: 10px 0px 10px 30px;">${r.ruralHospitals}</td> 
	<td style="padding: 10px 0px 10px 30px;">${r.ruralBeds}</td> 
    <td style="padding: 10px 0px 10px 30px;">${r.urbanHospitals}</td>
    <td style="padding: 10px 0px 10px 30px;">${r.urbanBeds} </td> 
	<td style="padding: 10px 0px 10px 30px;">${r.totalHospitals}</td> 
	<td style="padding: 10px 0px 10px 30px;">${r.totalBeds}</td> 
	<td style="padding: 10px 0px 10px 30px;">${r.asOn}</td>		 
</tr>`; 
	} 
	// Setting innerHTML as tab variable 
	document.getElementById("Hospital").innerHTML = tab; 
} 
