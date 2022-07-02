

const btnSubmit = document.getElementById('submitButton');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const tempStatus = document.getElementById('temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const dataHide=document.getElementsByClassName("middle_layer");

const getValue = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;


    if (cityval === "") {
        city_name.innerText == `please enter name before search`;
        
        dataHide[0].classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=40629e430a65b0502eb63f5a9afdbeed`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData= await [data];
            temp_real_value.innerText=arrData[0].main.temp;

            const tempMode=arrData[0].weather[0].main;

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            

            if(tempMode==="Clear"){
                tempStatus.innerHTML=`<i class='fas fa-sun' style='color:#eccc68;'></i>`
            }
            else if(tempMode==="Clouds"){
                tempStatus.innerHTML=`<i class='fas fa-cloud' style='color:#f1f2f6;'></i>`
            }
            else if(tempMode==="Rain"){
                tempStatus.innerHTML=`<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>`
            }
            else{
                tempStatus.innerHTML=`<i class='fas fa-cloud' style='color:#f1f2f6;'></i>`
            }
            dataHide[0].classList.remove('data_hide');
        }
        catch {
            city_name.innerText == `please enter cityname properly`;
            dataHide[0].classList.add('data_hide');    
        }
    }
}

btnSubmit.addEventListener('click', getValue)