const showSixers = async () => {
    const sixersJSON = await getSixers();
    const sixersDiv = document.getElementById("sixers-div");
  
    if(jetsJSON == "") {
      console.log("Invalid load of JSON");
      return;
    }
  
    sixersJSON.forEach((sixer) => {
      const section = document.createElement("section");
      sixersDiv.append(section);
  
      const h2 = document.createElement("h2");
      h2.innerHTML = sixer.player;
      section.append(h2);
  
      const height = document.createElement("p");
      height.innerHTML = sixer.height;
      section.append(height);
  
      const seasons = document.createElement("p");
      seasons.innerHTML = sixer.NBASeasons;
      section.append(NBASeasons);
  
      const posit = document.createElement("p");
      posit.innerHTML = jet.position;
      section.append(posit);
  
      let summary = document.createElement("div");
      details.classList.add("sixer-summary");
      section.append(summary);
      
      Object.keys(jet).forEach((key) => {
        if(key == "careerSummary") {
          let careerSummary = document.createElement("p");
          section.append(careerSummary);
      
          if(Array.isArray(sixer[key])) {
            careerSummary.append(sixer[key].join(", "));
          } else {
            careerSummary.append(sixer[key]);
          }
        }
      });
  
      const img = document.createElement("img");
      img.src = sixer.img;
      section.append(img);
    });
  }
  
  const getSixers = async () => {
    try {
        return (await fetch("http://localhost:3000/api/sixers")).json();
    } catch(error) {
        console.log("error retrieving json");
        return "";
    }
  }
  
  window.onload = () => showSixers();