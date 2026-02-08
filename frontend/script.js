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
