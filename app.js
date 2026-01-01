async function loadRecords() {
  const res = await fetch("data/collection.json");
  return await res.json();
}

function render(records) {
  const ul = document.getElementById("records");
  ul.innerHTML = "";

  records.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="detail.html?id=${encodeURIComponent(r.id)}">${r.artist} – ${r.title}</a>`;
    ul.appendChild(li);
  });
}

loadRecords().then(render);
