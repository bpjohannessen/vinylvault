async function loadRecords() {
  const res = await fetch("data/collection.json");
  return await res.json();
}

function render(records) {
  const ul = document.getElementById("records");
  records.forEach(r => {
    const li = document.createElement("li");
    li.textContent = `${r.artist} – ${r.title}`;
    // Add more stuff
    ul.appendChild(li);
  });
}

loadRecords().then(render);
