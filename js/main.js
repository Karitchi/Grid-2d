function makeGrid(form) {
  let table = document.getElementById("tbodyGrid");
  let rows = form.rows.value;
  let cols = form.cols.value;
  let constructionTable = "";

  console.log(table);
  console.log(rows);
  console.log(cols);

  for (let i = 0; i < rows; i++) {
    constructionTable += `<tr id="R${i}">`;
    for (let j = 0; j < cols; j++) {
      constructionTable += `<td id="R${i}C${j}"></td>`;
    }
    constructionTable += `</tr>`;
  }

  table.innerHTML = constructionTable;

  return false;
}