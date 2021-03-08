const api_url =
      "https://api.rootnet.in/covid19-in/notifications";

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
          <th style="padding:10px;">Guildlines</th>
          <th style="padding:10px;">Link</th>

         </tr>`;

    // Loop to access all rows
    for (let r of data.data.notifications) {
        tab += `<tr>
    <td style="padding: 10px 0px 10px 30px;">${r.title} </td>
    <td style="padding: 10px 0px 10px 30px;">${r.link}</td>

</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}
