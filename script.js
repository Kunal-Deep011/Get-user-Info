/*var ip = "";
// using a 3rd party service to get the IP address
$.getJSON("https://api.ipify.org?format=json", function(data) {
    ip = data.ip;
    // set the IP in some HTML element
    document.getElementById("gfg").innerHTML = ip;
});*/


/*document.getElementById("btnGetInfo").addEventListener("click", function() {
    // use the IP to get the information from the API

    fetch(" https://ipinfo.io/"+ip+"/geo")
    .then((res) => res.json())
    .then((res) => console.log(res));
   
    });*/

    fetch("https://ipinfo.io/json?token=f960a18015d2e2")
    .then((res) => res.json())
    .then((res) =>{

        let r =`${res.loc}`;
        const myArr = r.split(",");
        let lat = myArr[0];
        let long = myArr[1];
        console.log(lat,long);

        let post = `${res.postal}`;

        console.log(res);
        document.getElementById("gfg").innerHTML = res.ip;

        document.getElementById("btnGetInfo").addEventListener("click",()=>{

            let india_datetime_str = new Date().toLocaleString("india",{ timeZone: `${res.timezone}` });

            // create new Date object
            let date_india = new Date(india_datetime_str);
            
            // year as (YYYY) format
            let year = date_india.getFullYear();
            
            // month as (MM) format
            let month = ("0" + (date_india.getMonth() + 1)).slice(-2);
            
            // date as (DD) format
            let date = ("0" + date_india.getDate()).slice(-2);
            
            // date time in YYYY-MM-DD format
            let date_time = year + "-" + month + "-" + date;
            
            // "2021-03-22"

         
          let today =new Date(india_datetime_str);


           
   let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   console.log(date_time , time);

let host = document.location.hostname ;


             document.querySelector("section").style.display="block";
             document.getElementById("time").innerHTML =`Time Zone : ${res.timezone}`;
             document.getElementById("pin").innerHTML =`Pincode : ${post}`;
             document.getElementById("lat").innerHTML =`Lat : ${lat}`;
             document.getElementById("city").innerHTML =`City : ${res.city}`;
             document.getElementById("org").innerHTML =`Organisation : ${res.org}`;
             document.getElementById("long").innerHTML =`Long : ${long}`;
             document.getElementById("reg").innerHTML =`Region : ${res.region}`;
             document.getElementById("host").innerHTML =`Hostname : ${host}`;
             document.getElementById("date").innerHTML =`Date And Time : ${date_time}   &  ${time}`;

             document.getElementById("img-box").innerHTML =`
             
             <iframe 
        id="map" 
        src="https://maps.google.com/maps?q=${res.lat},${res.lon}&hl=en&z=14&amp&output=embed" 
        frameborder="0" 
        
        height="400" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
             
             `;
            
             document.getElementById("btnGetInfo").style.display="none";

//fetch through pincode

fetch("https://api.postalpincode.in/pincode/"+post)
.then((res1) => res1.json())
.then((res1) => {
     console.log("data", res1);

     let myHtml ="";

     document.getElementById("msg").innerHTML=`Message : ${res1[0].Message}` ;

     res1[0].PostOffice.forEach((item) => {
        myHtml +=`
        
       
        
        <ul class="info">
        <li>Name : ${item.Name}</li>
        <li>Branch Type : ${item.BranchType}</li>
        <li>Delivery Status : ${item.DeliveryStatus}</li>
        <li>District : ${item.District}</li>
        <li>Division : ${item.Division}</li>
        </ul>
     
   
                 `;

     });

     document.getElementById("dataaBox").innerHTML=myHtml;
});




        });

    });


    function searching(){
        let srchInfo = document.getElementById("input").value.toUpperCase();
        console.log(srchInfo);


        let list = document.querySelectorAll("ul");

        for(let i = 0 ; i < list.length; i++){

            let li1 = list[i].getElementsByTagName("li")[0];
            let li2 = list[i].getElementsByTagName("li")[1];

            if(li1 || li2){
                let textvalue1 = li1.innerText || li1.innerHTML;
                let textvalue2= li2.innerText || li2.innerHTML;

                if(textvalue1.toUpperCase().indexOf(srchInfo) > -1 ||
                 textvalue2.toUpperCase().indexOf(srchInfo) > -1  ){
                      list[i].style.display="";
                }else{
                    list[i].style.display="none";
                }
            }
            
        }
    };



    let srchBtn = document.getElementsByClassName("icon")[0];

    srchBtn.addEventListener("click",()=>{
              searching();
    });


    

    

