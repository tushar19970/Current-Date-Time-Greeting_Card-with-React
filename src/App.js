import React from "react";

function App() {
    const curDate = new Date().toLocaleDateString();
    const curTime = new Date().toLocaleTimeString();
    const links = "https://www.timeanddate.com/worldclock/india";

    let currentDate = new Date();
    currentDate = currentDate.getHours();
    let greeting = "";
    const cssStyle = { };

    if (currentDate >= 0 && currentDate < 12){
    greeting = "Good Morning";
    cssStyle.color = "green";
    } else if (currentDate >= 12 && currentDate < 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
    } else if (currentDate >= 16 && currentDate < 20){
    greeting = "Good Evening";
    cssStyle.color = "skyblue";
    } else {
    greeting = "Good Night";
    cssStyle.color = "black";
    }

    return (
      <>
        <div className="container" >
        <a href= {links} target="_tushar">
          <h2>Today's Date is = {curDate}</h2>
          <h2>Current Time is = {curTime}</h2>
        </a>
            <h1>Hello Sir/Mam, <span style = {cssStyle} > {greeting} </span> </h1>
        </div>
      </>
    )
}

export default App;