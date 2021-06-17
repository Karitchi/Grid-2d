function makeGrid(form) {
  document.getElementById("mainGrid").innerHTML =
    `<table id="tableGrid">
      <tbody id="tbodyGrid"></tbody>
    </table>`;

  let table = document.getElementById("tbodyGrid");
  let rows = form.rows.value;
  let cols = form.cols.value;
  let constructionTable = "";


  for (let i = 0; i < rows; i++) {
    constructionTable += `<tr id="R${i}">`;
    for (let j = 0; j < cols; j++) {
      constructionTable += `<td id="R${i}C${j}"></td>`;
    }
    constructionTable += `</tr>`;
  }

  table.innerHTML = constructionTable;
  console.log("salut")

  return false;
}
