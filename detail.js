async function loadRecords() {
  const res = await fetch("data/collection.json");
  return await res.json();
}

function getIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

console.log(getIdFromUrl());

loadRecords().then(records => {
  const id = getIdFromUrl();
  const record = records.find(r => String(r.id) === String(id));

  if (!record) {
    document.body.innerHTML = "<p>Plate ikke funnet</p>";
    return;
  }

  const header = `${record.artist} – ${record.title}`;
  document.getElementById("header").textContent = header;

  // Oppdater nettleserfanen (i stedet for ${album.title} i HTML)
  document.title = `Vinyl Vault: Details – ${header}`;

  const purchased = record.purchasedDate ? `Kjøpt ${record.purchasedDate}` : "";
  const price = record.priceNok ? `${record.priceNok} NOK` : "";
  const store = record.store || "";

  document.getElementById("meta").textContent =
    [purchased, price, store].filter(Boolean).join(" * ");

  document.getElementById("comment").textContent =
    record.comment || "";
});
