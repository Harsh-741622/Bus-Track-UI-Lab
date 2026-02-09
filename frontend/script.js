const funFacts = [
  "Public buses reduce traffic congestion in cities.",
  "Using public transport helps reduce air pollution.",
  "One full bus can remove up to 30 cars from the road.",
  "Road safety rules save millions of lives every year."
];


function showFunFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  alert(funFacts[randomIndex]);
}
// News data (demo)
const newsData = [
  {
    title: "New Electric Buses Launched",
    description: "City introduces eco-friendly electric buses to reduce pollution.",
    date: "Feb 2026"
  },
  {
    title: "Student Bus Pass Update",
    description: "Discounted bus passes announced for college students.",
    date: "Jan 2026"
  },
  {
    title: "Route Optimization Program",
    description: "New routes added to improve connectivity in urban areas.",
    date: "Dec 2025"
  }
];

// Function to display news
function loadNews() {
  const container = document.getElementById("news-container");

  newsData.forEach(news => {
    const div = document.createElement("div");
    div.className = "news-card";

    div.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <small>${news.date}</small>
    `;

    container.appendChild(div);
  });
}

// Load news when page opens
loadNews();
// Initialize map
const map = L.map("map").setView([23.0225, 72.5714], 12); // Ahmedabad

// Add map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Add demo bus stops
L.marker([23.0300, 72.5800]).addTo(map).bindPopup("Bus Stop A");
L.marker([23.0150, 72.5650]).addTo(map).bindPopup("Bus Stop B");
