const showSixers = async () => {
    const sixersJSON = await getSixers();
    const sixersDiv = document.getElementById("sixers-div");
  
    if(sixersJSON == "") {
      console.log("JSON Could Not Be Loaded");
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
      section.append(seasons);
  
      const posit = document.createElement("p");
      posit.innerHTML = sixer.position;
      section.append(posit);

      const careerSummary = document.createElement("p");
      careerSummary.innerHTML = "Career Summary: " + sixer.careerSummary.join(", ");
      section.append(careerSummary);
  
      /*const summary = document.createElement("div");
      details.classList.add("sixer-summary");
      section.append(summary);
      
      bject.keys(sixer).forEach((key) => {
        if(key == "careerSummary") {
          let careerSummary = document.createElement("p");
          section.append(careerSummary);
      
          if(Array.isArray(sixer[key])) {
            careerSummary.append(sixer[key].join(", "));
          } else {
            careerSummary.append(sixer[key]);
          }
        }
      }); */
  
      const img = document.createElement("img");
      img.src = sixer.img;
      section.append(img);
    });
  }
  
  const getSixers = async () => {
    try {
        return (await fetch("/api/sixers")).json();
    } catch(error) {
        console.log("Error retrieving json");
        return "";
    }
  }
  
  window.onload = () => showSixers();