//function will run upon the completion of the websites loading, allowing all elements to be fully initialized before code acts on them 
window.onload = function() {

  //variables declared
    let podStatus = "off"; //represents the stat of the pod 
  
//start of page functionality, by hiding elements the single html file can appear to represent multiple pages 
    const homeButton = document.getElementById("homeLogo"); //home logo (acts as a button to return to the home page)
    homeButton.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

  const returnHome = document.getElementById("returnHome"); //return home shortcut
    returnHome.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const tripProgress = document.getElementById("tripProgress"); //trip progress shortcut
    tripProgress.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "flex"
    });

  const dashboard = document.getElementById("dashboard"); //dashboard main page button
    dashboard.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "flex"
    });
  
  const alerts = document.getElementById("podSystem"); //pod systems page button
    alerts.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
    });

    const podStats = document.getElementById("podStatus"); //pod status shortcut button
    podStats.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const inputs = document.getElementById("alerts"); //alerts page main button 
    inputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("alertsMiddle").style.display = "flex"
    });

  const errors = document.getElementById("errors"); //notifications shortcut button 
    errors.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "flex"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const podSystem = document.getElementById("inputs"); //inputs page main button 
    podSystem.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
    });

    const userInputs = document.getElementById("userInputs"); //shortcuts user inputs button 
    userInputs.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const closeButtons = document.querySelectorAll(".closebtn"); //uses a loop to select all alerts and allow them to be closed with the "x" close button
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const alertBox = this.parentElement;
        alertBox.style.display = "none";
      });
    });

    const saveChanges = document.getElementById("saveChanges"); //save changes button on the inputs page, triggers functions to initialize graphs 
    saveChanges.addEventListener('click', function() {
      startupTemp(); 
      startupVoltage(); 
      startupAcceleration(); 
      startupRPM(); 
    });
    //end of page functionality

  //local storage conditionals, currently each individual item is pulled from local storage into the page design, it is done here to ensure it shows upon the page loading 
if(localStorage.getItem("Location Right")!= undefined) {
  document.getElementById("locationRight").innerHTML = localStorage.getItem("Location Right"); 
}
if(localStorage.getItem("Month Right")!= undefined) {
  document.getElementById("monthRight").innerHTML = localStorage.getItem("Month Right"); 
}
if(localStorage.getItem("Day Right")!= undefined) {
  document.getElementById("dayRight").innerHTML = localStorage.getItem("Day Right"); 
}
if(localStorage.getItem("Event Right")!= undefined) {
  document.getElementById("eventRight").innerHTML = localStorage.getItem("Event Right"); 
}
if(localStorage.getItem("Location Left")!= undefined) {
  document.getElementById("locationLeft").innerHTML = localStorage.getItem("Location Left"); 
}
if(localStorage.getItem("Month Left")!= undefined) {
  document.getElementById("monthLeft").innerHTML = localStorage.getItem("Month Left"); 
}
if(localStorage.getItem("Day Left")!= undefined) {
  document.getElementById("dayLeft").innerHTML = localStorage.getItem("Day Left"); 
}
if(localStorage.getItem("Event Left")!= undefined) {
  document.getElementById("eventLeft").innerHTML = localStorage.getItem("Event Left"); 
}
if(localStorage.getItem("Friction Brakes Temperature")!= undefined) {
  document.getElementById("frictionBrakes").innerHTML = localStorage.getItem("Friction Brakes Temperature"); 
}
if(localStorage.getItem("Electric Brakes Temperature")!= undefined) {
  document.getElementById("electricBrakes").innerHTML = localStorage.getItem("Electric Brakes Temperature"); 
}
if(localStorage.getItem("Main Battery Temperature")!= undefined) {
  document.getElementById("mainBattery").innerHTML = localStorage.getItem("Main Battery Temperature"); 
}
if(localStorage.getItem("Liquid Cooling Temperature")!= undefined) {
  document.getElementById("liquidCooling").innerHTML = localStorage.getItem("Liquid Cooling Temperature"); 
}
if(localStorage.getItem("24V Battery Temperature")!= undefined) {
  document.getElementById("24VBattery").innerHTML = localStorage.getItem("24V Battery Temperature"); 
}
if(localStorage.getItem("Main Battery Voltage")!= undefined) {
  document.getElementById("mainBatteryVoltage").innerHTML = localStorage.getItem("Main Battery Voltage"); 
}
if(localStorage.getItem("24V Battery Voltage")!= undefined) {
  document.getElementById("24VBatteryVoltage").innerHTML = localStorage.getItem("24V Battery Voltage"); 
}
if(localStorage.getItem("5V Converter Voltage")!= undefined) {
  document.getElementById("5VConverterVoltage").innerHTML = localStorage.getItem("5V Converter Voltage"); 
}
if(localStorage.getItem("12V Converter Voltage")!= undefined) {
  document.getElementById("12VConverterVoltage").innerHTML = localStorage.getItem("12V Converter Voltage"); 
}
if(localStorage.getItem("Air Tank Pressure")!= undefined) {
  document.getElementById("airTankPressure").innerHTML = localStorage.getItem("Air Tank Pressure"); 
}
if(localStorage.getItem("Vessel Pressure")!= undefined) {
  document.getElementById("vesselPressure").innerHTML = localStorage.getItem("Vessel Pressure"); 
}
if(localStorage.getItem("Motor Temperature")!= undefined) {
  document.getElementById("motor").innerHTML = localStorage.getItem("Motor Temperature"); 
}
if(localStorage.getItem("RPM")!= undefined) {
  document.getElementById("rpm").innerHTML = localStorage.getItem("RPM"); 
}
if(localStorage.getItem("Acceleration Time")!= undefined && +localStorage.getItem("Acceleration Time") != 0) {
  document.getElementById("accelerationTime").innerHTML = "(" + Math.ceil(localStorage.getItem("Acceleration Time")) + "s)"; 
}
if(localStorage.getItem("Acceleration")!= undefined) {
  document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
}
if(localStorage.getItem("Trip Distance")!= undefined) {
  document.getElementById("tripDistance").innerHTML = localStorage.getItem("Trip Distance"); 
}
//end of local storage conditionals

  //start of pod image distance calculation, this function calculates the distance remaining and finds that information as a percentage which is 
//stored to be used later in the CSS to ensure the pod is moving correctly on the bottom of the dashboard
function updatePodDistance () { 
let targetDistance = document.getElementById("tripDistance").innerHTML; 
let travelledDistance = document.getElementById('travelledDistance').innerHTML;
let podImageDistance = document.getElementById('pod-distance');
travelledPercentage = ((+travelledDistance)/(+targetDistance))*100
podImageDistance.style.setProperty('--pod-width',travelledPercentage + '%');
} 
//end of pod image distance calculation 

//start of graph acceleration
let accelerationCanvas = document.getElementById("accelerationGraph"); //graph is linked to html 
let dataPointsAcceleration = [];
let accelerationData = { //data is described
    labels: [],
    datasets: [{
        label: "Acceleration",
        data: dataPointsAcceleration,
        borderColor: "grey",
        pointRadius: 3
    }]
};

let chartOptionsAcceleration = { //chart options are selected
    maintainAspectRatio: false,
    responsive: false, 
    scales: {
      x: {
          ticks: {
              display: false
          }
      },
      y: {
        ticks: {
            display: false
        }
    }
  }
};

let accelerationChart = new Chart(accelerationCanvas, { //graph is defined
    type: 'line',
    data: accelerationData,
    options: chartOptionsAcceleration,
});

let currentAcceleration = +(localStorage.getItem("Acceleration")); 
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();

function startupAcceleration() { //function is created to enable a default current acceleration 
currentAcceleration = +(localStorage.getItem("Acceleration"));
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();
dataPointsAcceleration.push(currentAcceleration);
accelerationData.labels.push(currentTime);
accelerationChart.update();
}

function addDataAcceleration() { //function that goes through and draws the graph based on prevous definitions
    let updateFromLocalAcceleration = localStorage.getItem("Acceleration"); 
    if(updateFromLocalAcceleration != 0) { //math here is done to replicate a semi-realistc acceleration (not constant)
    currentAcceleration += Math.random() * (2*(+updateFromLocalAcceleration/100)) - (+updateFromLocalAcceleration/100);
    if(currentAcceleration > +updateFromLocalAcceleration/2) currentAcceleration - 2*(+updateFromLocalAcceleration/100); 
    if(currentAcceleration < +updateFromLocalAcceleration/-2) currentAcceleration + 2*(+updateFromLocalAcceleration/100); 
    } else {
      currentAcceleration = 0;  
    }
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsAcceleration.length >= 10) { //causes the graph to shift and only include 10 points
        dataPointsAcceleration.shift();
        accelerationData.labels.shift();
    }

    localStorage.setItem("Acceleration", (currentAcceleration).toFixed(2));
    document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
    dataPointsAcceleration.push(currentAcceleration);
    accelerationData.labels.push(currentTime);
    accelerationChart.update();
}
//end of graph acceleration

  //start of pod image distance calculation, this function calculates the distance remaining and finds that information as a percentage which is 
//stored to be used later in the CSS to ensure the pod is moving correctly on the bottom of the dashboard
function updatePodDistance () { 
let targetDistance = document.getElementById("tripDistance").innerHTML; 
let travelledDistance = document.getElementById('travelledDistance').innerHTML;
let podImageDistance = document.getElementById('pod-distance');
travelledPercentage = ((+travelledDistance)/(+targetDistance))*100
podImageDistance.style.setProperty('--pod-width',travelledPercentage + '%');
} 
//end of pod image distance calculation 

//start of graph acceleration
let accelerationCanvas = document.getElementById("accelerationGraph"); //graph is linked to html 
let dataPointsAcceleration = [];
let accelerationData = { //data is described
    labels: [],
    datasets: [{
        label: "Acceleration",
        data: dataPointsAcceleration,
        borderColor: "grey",
        pointRadius: 3
    }]
};

let chartOptionsAcceleration = { //chart options are selected
    maintainAspectRatio: false,
    responsive: false, 
    scales: {
      x: {
          ticks: {
              display: false
          }
      },
      y: {
        ticks: {
            display: false
        }
    }
  }
};

let accelerationChart = new Chart(accelerationCanvas, { //graph is defined
    type: 'line',
    data: accelerationData,
    options: chartOptionsAcceleration,
});

let currentAcceleration = +(localStorage.getItem("Acceleration")); 
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();

function startupAcceleration() { //function is created to enable a default current acceleration 
currentAcceleration = +(localStorage.getItem("Acceleration"));
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();
dataPointsAcceleration.push(currentAcceleration);
accelerationData.labels.push(currentTime);
accelerationChart.update();
}

function addDataAcceleration() { //function that goes through and draws the graph based on prevous definitions
    let updateFromLocalAcceleration = localStorage.getItem("Acceleration"); 
    if(updateFromLocalAcceleration != 0) { //math here is done to replicate a semi-realistc acceleration (not constant)
    currentAcceleration += Math.random() * (2*(+updateFromLocalAcceleration/100)) - (+updateFromLocalAcceleration/100);
    if(currentAcceleration > +updateFromLocalAcceleration/2) currentAcceleration - 2*(+updateFromLocalAcceleration/100); 
    if(currentAcceleration < +updateFromLocalAcceleration/-2) currentAcceleration + 2*(+updateFromLocalAcceleration/100); 
    } else {
      currentAcceleration = 0;  
    }
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsAcceleration.length >= 10) { //causes the graph to shift and only include 10 points
        dataPointsAcceleration.shift();
        accelerationData.labels.shift();
    }

    localStorage.setItem("Acceleration", (currentAcceleration).toFixed(2));
    document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
    dataPointsAcceleration.push(currentAcceleration);
    accelerationData.labels.push(currentTime);
    accelerationChart.update();
}
//end of graph acceleration

  //start of graph creation temperature
let tempCanvas = document.getElementById("tempGraph"); //graph is linked to html canvas tag with id "tempgraph"
let dataPointsTemp = [];
let tempData = { //data is described 
    labels: [], 
    datasets: [{
        label: "Temperature",
        data: dataPointsTemp,
        borderColor: "rgba(238,188,49,255)",
        pointRadius: 3
    }]
};

let chartOptionsTemp = { //chart options are selected 
    maintainAspectRatio: false,
};

let tempChart = new Chart(tempCanvas, { //chart charadcteristics are defined 
    type: 'line',
    data: tempData,
    options: chartOptionsTemp
});

let currentTemp = +(localStorage.getItem("Motor Temperature")); 
if (currentTemp === "" || currentTemp === undefined || currentTemp === 0.0) currentTemp = 45;  
currentTime = new Date().toLocaleTimeString();

function startupTemp() { //default case
currentTemp = +(localStorage.getItem("Motor Temperature")); 
if (currentTemp === "" || currentTemp === undefined || currentTemp === 0.0) currentTemp = 45;  
let currentTime = new Date().toLocaleTimeString();
dataPointsTemp.push(currentTemp);
tempData.labels.push(currentTime);
tempChart.update();
}

function addDataTemp() { //function that prints the graph to the screen 
    let updateFromLocalTemp = localStorage.getItem("Motor Temperature"); 
    
    //math calculations generate random values within a set range that cannot be left 
    currentTemp += Math.random() * (2*(+updateFromLocalTemp/100)) - (+updateFromLocalTemp/100);
    if(currentTemp > +updateFromLocalTemp/2) currentTemp - 2*(+updateFromLocalTemp/100); 
    if(currentTemp < +updateFromLocalTemp/-2) currentTemp + 2*(+updateFromLocalTemp/100); 
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsTemp.length >= 10) { //only 10 data points remain on the screen 
        dataPointsTemp.shift();
        tempData.labels.shift();
    }

    localStorage.setItem("Motor Temperature", (currentTemp).toFixed(1));
    document.getElementById("motor").innerHTML = localStorage.getItem("Motor Temperature"); 
    dataPointsTemp.push(currentTemp);
    tempData.labels.push(currentTime);
    tempChart.update();
}
//end of graph creation temperature

//start of graph creation voltage
let voltageCanvas = document.getElementById("voltageGraph"); //graph is linked to html 
let dataPointsVoltage = [];
let voltageData = { //data is described 
    labels: [],
    datasets: [{
        label: "Voltage",
        data: dataPointsVoltage,
        borderColor: "rgba(238,188,49,255)",
        pointRadius: 3
    }]
};

let chartOptionsVoltage = { //settings are selected 
    maintainAspectRatio: false,
};

let voltageChart = new Chart(voltageCanvas, { //graph type is declared 
    type: 'line',
    data: voltageData,
    options: chartOptionsVoltage
});

let currentVoltage = +(localStorage.getItem("Main Battery Voltage"));
if (currentVoltage === "" || currentVoltage === undefined || currentVoltage === 0.0) currentVoltage = 48.1;  
currentTime = new Date().toLocaleTimeString();

function startupVoltage() {  //default case is provided
currentVoltage = +(localStorage.getItem("Main Battery Voltage"));
if (currentVoltage === "" || currentVoltage === undefined || currentVoltage === 0.0) currentVoltage = 48.1;  
let currentTime = new Date().toLocaleTimeString();
dataPointsVoltage.push(currentVoltage);
voltageData.labels.push(currentTime);
voltageChart.update();
}

function addDataVoltage() { //function that prints the graph and runs a singular cycle
    let updateFromLocalVoltage = localStorage.getItem("Main Battery Voltage");   
    currentVoltage += Math.random() * (2*(+updateFromLocalVoltage/100)) - (+updateFromLocalVoltage/100);
    if(currentVoltage > +updateFromLocalVoltage/2) currentVoltage - 2*(+updateFromLocalVoltage/100); 
    if(currentVoltage < +updateFromLocalVoltage/-2) currentVoltage + 2*(+updateFromLocalVoltage/100); 
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsVoltage.length >= 10) { //allows only 10 data points in the view 
        dataPointsVoltage.shift();
        voltageData.labels.shift();
    }

    localStorage.setItem("Main Battery Voltage", (currentVoltage).toFixed(1));
    document.getElementById("mainBatteryVoltage").innerHTML = localStorage.getItem("Main Battery Voltage"); 
    dataPointsVoltage.push(currentVoltage);
    voltageData.labels.push(currentTime);
    voltageChart.update();
}
// end of graph voltage
