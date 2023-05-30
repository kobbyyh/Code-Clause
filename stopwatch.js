function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Set the default tab to the first one
  document.getElementById("length").style.display = "block";
  document.getElementsByClassName("tablinks")[0].className += " active";
  
  
  let startBtn = document.getElementById('start');
  let stopBtn = document.getElementById('stop');
  let resetBtn = document.getElementById('reset');
  
  let hour = 00;
  let minute = 00;
  let second = 00;
  let count = 00;
  
  startBtn.addEventListener('click', function () {
      timer = true;
      stopWatch();
  });
  
  stopBtn.addEventListener('click', function () {
      timer = false;
  });
  
  resetBtn.addEventListener('click', function () {
      timer = false;
      hour = 0;
      minute = 0;
      second = 0;
      count = 0;
      document.getElementById('hr').innerHTML = "00";
      document.getElementById('min').innerHTML = "00";
      document.getElementById('sec').innerHTML = "00";
      document.getElementById('count').innerHTML = "00";
  });
  
  function stopWatch() {
      if (timer) {
          count++;
  
          if (count == 100) {
              second++;
              count = 0;
          }
  
          if (second == 60) {
              minute++;
              second = 0;
          }
  
          if (minute == 60) {
              hour++;
              minute = 0;
              second = 0;
          }
  
          let hrString = hour;
          let minString = minute;
          let secString = second;
          let countString = count;
  
          if (hour < 10) {
              hrString = "0" + hrString;
          }
  
          if (minute < 10) {
              minString = "0" + minString;
          }
  
          if (second < 10) {
              secString = "0" + secString;
          }
  
          if (count < 10) {
              countString = "0" + countString;
          }
  
          document.getElementById('hr').innerHTML = hrString;
          document.getElementById('min').innerHTML = minString;
          document.getElementById('sec').innerHTML = secString;
          document.getElementById('count').innerHTML = countString;
          setTimeout(stopWatch, 10);
      }
  }
    