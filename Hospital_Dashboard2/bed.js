const api_url =
      "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";

// Defining async function
async function getapi(url) {
    let response = await fetch(url);
    let data = await response.json();
    try{

        console.log(data);
    }
    catch(err){
        console.log(err.message);
    }

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
          <th style="padding:10px;">State</th>
          <th style="padding:10px;">Name</th>
          <th style="padding:10px;">City</th>
          <th style="padding:10px;">Ownership</th>
          <th style="padding:10px;">Admission Capacity</th>
          <th style="padding:10px;">Hospital Beds</th>
        </tr>`;

    // Loop to access all rows
    for (let r of data.data.medicalColleges) {
        tab += `<tr>
    <td style="padding: 10px 10px 10px 20px; font-size:15px">${r.state} </td>
    <td style="padding: 10px 0px 10px 30px; font-size:15px">${r.name}</td>
    <td style="padding: 10px 0px 10px 30px; font-size:15px">${r.city}</td>
    <td style="padding: 10px 0px 10px 30px; font-size:15px">${r.ownership}</td>
    <td style="padding: 10px 0px 10px 30px; font-size:15px">${r.admissionCapacity}</td>
    <td style="padding: 10px 0px 10px 30px;font-size:15px">${r.hospitalBeds}</td>


</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("beds").innerHTML = tab;
}
