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
