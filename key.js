const insert = document.querySelector("#insert");

document.addEventListener("keydown", (e) => {
  insert.innerHTML = `<table>
  <tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
  </tr>
  <tr>
  <td>${e.key === " " ? "SPACE&nbsp;" : e.key.toUpperCase()}</td>
  <td>${e.keco}</td>
  <td>${e.code}</td>
  </tr>
  
  </table>`;
});
