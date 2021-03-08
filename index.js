function main()
{
    const type=document.getElementById("type").value;
    const state=document.getElementById("state").value;
    //console.log(state);
    if (state=='' & type!="All")
    {
        cha();
    }
    else if(state!='' & type!='All')
    {
        csvd();
    }
    else if(type=='All' & state=='')
    {
        mix();
    }
    else if(type=='All' & state!='')
    {
        mixst();
    }
}
async function cha()
{
const daf=document.getElementById("datef").value;
const dat=document.getElementById("datet").value;
const date1 = new Date('3/14/2020');
const date2 = new Date(daf);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const f=diffDays;
const date3 = new Date(dat);
const dt = Math.abs(date3 - date1);
const dd = Math.floor(dt/ (1000 * 60 * 60 * 24));
const t=dd;
//console.log(day);
chartit();

var ctx = document.getElementById("myChart").getContext('2d');
async function chartit()
{
const temp=await getdata();
const type=document.getElementById("type").value;
const data=temp[0];
const label=temp[1];
//console.log(data,label);
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: type+' Cases',
            data: data,
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['black'],
            borderWidth: 2
        }]
    },
    options: {
        responsive:true,
        scales: {
            xAxes:[{stacked:true}],
            yAxes: [{
                stacked:false,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

async function getdata()
{
    const data1=[];
    const data2=[];
    const labels1 =[];
    const temp=[];
    const type=document.getElementById("type").value;
    await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history')
          .then(res => res.json())
          .then(res => {
            data1.push(res);
          });
          if(type=="Confirmed")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].total.confirmed);
            }
          }
          else if(type=="Recovered")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].total.recovered);
            }
          }
          else if(type=="Deaths")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].total.deaths);
            }
          }
          else if(type=="Active")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].total.active);
            }
          }
          console.log(data1);
          temp.push(data2,labels1)
          return temp;
}
}
async function csvd()
{
const starr=["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
const daf=document.getElementById("datef").value;
const dat=document.getElementById("datet").value;
const stat=document.getElementById("state").value;
const date1 = new Date('3/14/2020');
const date2 = new Date(daf);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const f=diffDays;
const date3 = new Date(dat);
const dt = Math.abs(date3 - date1);
const dd = Math.floor(dt/ (1000 * 60 * 60 * 24));
const t=dd;
const ind=starr.indexOf(stat);
//console.log(day);
chartit();

var ctx = document.getElementById("myChart").getContext('2d');
async function chartit()
{
const temp=await getdata();
const type=document.getElementById("type").value;
const data=temp[0];
const label=temp[1];
//console.log(data,label);
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: starr[ind]+" "+type+" Cases",
            data: data,
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['black'],
            borderWidth: 2
        }]
    },
    options: {
        responsive:true,
        scales: {
            xAxes:[{stacked:true}],
            yAxes: [{
                stacked:false,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

async function getdata()
{
    const data1=[];
    const data2=[];
    const labels1 =[];
    const temp=[];
    const type=document.getElementById("type").value;
    await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history')
          .then(res => res.json())
          .then(res => {
            data1.push(res);
          });
          if(type=="Confirmed")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].statewise[ind].confirmed);
            }
          }
          else if(type=="Recovered")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].statewise[ind].recovered);
            }
          }
          else if(type=="Deaths")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].statewise[ind].deaths);
            }
          }
          else if(type=="Active")
          {
            for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              data2.push(data1[0].data.history[i].statewise[ind].active);
            }
          }
          console.log(data2);
          temp.push(data2,labels1)
          return temp;
}
}
                            //All type of cases without state filter
async function mix()        
{
const daf=document.getElementById("datef").value;
const dat=document.getElementById("datet").value;
const date1 = new Date('3/14/2020');
const date2 = new Date(daf);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const f=diffDays;
const date3 = new Date(dat);
const dt = Math.abs(date3 - date1);
const dd = Math.floor(dt/ (1000 * 60 * 60 * 24));
const t=dd;
//console.log(day);
chartit();

var ctx = document.getElementById("myChart").getContext('2d');
async function chartit()
{
const temp=await getdata();
const type=document.getElementById("type").value;
const datac=temp[0];
const datar=temp[1];
const datad=temp[2];
const dataa=temp[3];
const label=temp[4];
//console.log(data,label);
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: 'Confirmed Cases',
            data: datac,
            //backgroundColor: ['white'],
            borderColor: ['blue'],
            borderWidth: 2
            },
            {
                label: 'Recovered Cases',
                data: datar,
                //backgroundColor: ['white'],
                borderColor: ['green'],
                borderWidth: 2
        },
        {
            label: 'Deaths',
            data: datad,
            //backgroundColor: ['white'],
            borderColor: ['black'],
            borderWidth: 2
    },
    {
        label: 'Active Cases',
        data: dataa,
        //backgroundColor: ['white'],
        borderColor: ['red'],
        borderWidth: 2
}
    ]
        }
    }
)
}

async function getdata()
{
    const data1=[];
    const datac=[];
    const datar=[];
    const datad=[];
    const dataa=[];
    const labels1 =[];
    const temp=[];
    const type=document.getElementById("type").value;
    await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history')
          .then(res => res.json())
          .then(res => {
            data1.push(res);
          });
          for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              datac.push(data1[0].data.history[i].total.confirmed);
              datar.push(data1[0].data.history[i].total.recovered);
              datad.push(data1[0].data.history[i].total.deaths);
              dataa.push(data1[0].data.history[i].total.active);
            }
          console.log(data1);
          temp.push(datac,datar,datad,dataa,labels1)
          return temp;
}
}
                            //All type of cases without state filter
async function mix()        
{
const daf=document.getElementById("datef").value;
const dat=document.getElementById("datet").value;
const date1 = new Date('3/14/2020');
const date2 = new Date(daf);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const f=diffDays;
const date3 = new Date(dat);
const dt = Math.abs(date3 - date1);
const dd = Math.floor(dt/ (1000 * 60 * 60 * 24));
const t=dd;
//console.log(day);
chartit();

var ctx = document.getElementById("myChart").getContext('2d');
async function chartit()
{
const temp=await getdata();
const type=document.getElementById("type").value;
const datac=temp[0];
const datar=temp[1];
const datad=temp[2];
const dataa=temp[3];
const label=temp[4];
//console.log(data,label);
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: 'Confirmed Cases',
            data: datac,
            //backgroundColor: ['white'],
            borderColor: ['blue'],
            borderWidth: 2
            },
            {
                label: 'Recovered Cases',
                data: datar,
                //backgroundColor: ['white'],
                borderColor: ['green'],
                borderWidth: 2
        },
        {
            label: 'Deaths',
            data: datad,
            //backgroundColor: ['white'],
            borderColor: ['yellow'],
            borderWidth: 2
    },
    {
        label: 'Active Cases',
        data: dataa,
        //backgroundColor: ['white'],
        borderColor: ['red'],
        borderWidth: 2
}
    ]
        }
    }
)
}

async function getdata()
{
    const data1=[];
    const datac=[];
    const datar=[];
    const datad=[];
    const dataa=[];
    const labels1 =[];
    const temp=[];
    const type=document.getElementById("type").value;
    await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history')
          .then(res => res.json())
          .then(res => {
            data1.push(res);
          });
          for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              datac.push(data1[0].data.history[i].total.confirmed);
              datar.push(data1[0].data.history[i].total.recovered);
              datad.push(data1[0].data.history[i].total.deaths);
              dataa.push(data1[0].data.history[i].total.active);
            }
          console.log(data1);
          temp.push(datac,datar,datad,dataa,labels1)
          return temp;
}
}

                            //All type of cases with state filter

async function mixst()        
{
const daf=document.getElementById("datef").value;
const dat=document.getElementById("datet").value;
const date1 = new Date('3/14/2020');
const date2 = new Date(daf);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const f=diffDays;
const date3 = new Date(dat);
const dt = Math.abs(date3 - date1);
const dd = Math.floor(dt/ (1000 * 60 * 60 * 24));
const t=dd;
const starr=["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
const stat=document.getElementById("state").value;
const ind=starr.indexOf(stat);
//console.log(day);
chartit();

var ctx = document.getElementById("myChart").getContext('2d');
async function chartit()
{
const temp=await getdata();
const type=document.getElementById("type").value;
const datac=temp[0];
const datar=temp[1];
const datad=temp[2];
const dataa=temp[3];
const label=temp[4];
//console.log(data,label);
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: stat+' Confirmed Cases',
            data: datac,
            //backgroundColor: ['white'],
            borderColor: ['blue'],
            borderWidth: 2
            },
            {
                label: stat+' Recovered Cases',
                data: datar,
                //backgroundColor: ['white'],
                borderColor: ['green'],
                borderWidth: 2
        },
        {
            label: stat+' Deaths',
            data: datad,
            //backgroundColor: ['white'],
            borderColor: ['yellow'],
            borderWidth: 2
    },
    {
        label: stat+' Active Cases',
        data: dataa,
        //backgroundColor: ['white'],
        borderColor: ['red'],
        borderWidth: 2
}
    ]
        }
    }
)
}

async function getdata()
{
    const data1=[];
    const datac=[];
    const datar=[];
    const datad=[];
    const dataa=[];
    const labels1 =[];
    const temp=[];
    const type=document.getElementById("type").value;
    await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history')
          .then(res => res.json())
          .then(res => {
            data1.push(res);
          });
          for(var i=f;i<=t;i++)
            {
              labels1.push(data1[0].data.history[i].day);
              datac.push(data1[0].data.history[i].statewise[ind].confirmed);
              datar.push(data1[0].data.history[i].statewise[ind].recovered);
              datad.push(data1[0].data.history[i].statewise[ind].deaths);
              dataa.push(data1[0].data.history[i].statewise[ind].active);
            }
          //console.log(data1);
          temp.push(datac,datar,datad,dataa,labels1)
          return temp;
}
}
function download()
{
  var canvas = document.getElementById("myChart");
  image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "Chart.png";
  link.href = image;
  link.click();
}