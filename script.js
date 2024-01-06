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
