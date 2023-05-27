fetch(url) // GET simples

fetch(url, {
  method: "", // não preciso dizer o método se for GET
  header: {},
  body: {}
}) // POST, PUT, PATCH, DELETE, GETs complexos
