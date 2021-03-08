// api url 
const api_url =  "https://api.rootnet.in/covid19-in/contacts"; 

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
    //show1(data)
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
/***function show1(data)
{
    let tab = 
    `<tr> 
    <th>number</th>
    <th>number-tollfree</th>
    <th>email</th>
    <th>twitter</th>
    <th>facebook</th>
    <th>media</th>
    </tr>`; 


 for (let r of data.data.contacts.primary)
 {
    tab += `<tr> 
<td>${r.number} </td> 
<td>${r.number-tollfree}</td> 
<td>${r.email}</td> 
<td>${r.twitter}</td>
<td>${r.facebook} </td> 
<td>${r.media}</td> 		 
</tr>`; 
}
} ***/
function show(data) 
{ 
 tab =  `<tr style="color:#ff4b5c;font-size:25px; text-align: center;"> 
<th style="padding:10px;">LOC</th>
<th style="padding:10px;">Contact Number</th>
</tr>`; 

// Loop to access all rows 
    for (r of data.data.contacts.regional) 
    { 
    tab += `<tr> 
    <td style="padding: 10px 0px 10px 30px;">${r.loc} </td> 
    <td style="padding: 10px 0px 10px 30px;">${r.number}</td> 	 
    </tr>`; 
    } 
    // Setting innerHTML as tab variable 
    document.getElementById("Contact").innerHTML = tab; 
} 
