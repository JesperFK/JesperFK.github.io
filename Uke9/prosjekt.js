// HTML-elementer
cons† main = document.querySelector("main");

// Database
const db = firebase.database();
const prosjekter = db.ref("prosjekter");

function visProsjekt(snap) {
   const key = snap.key;
   const prosjekt = snap.val();

   main.innerHTML +=
   <article>
      <h1>${prosjekt.tittel}</h1>
      <p>${prosjekt.beskrivelse}</p>
      <a href= "prosjekt.html?pid=$(key)">Les mer</a>
   </article>
}

// Even listener
prosjekter.on("child_added, visProsjekt");
