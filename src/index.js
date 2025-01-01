//Crie um aplicativo react do zero.
//Deve exibir um título h1.
//Deve exibir uma lista não ordenada (marcadores).
//Deve conter 3 elementos de lista.
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>Title</h1>
    <ul>
      <li>Nome</li>
      <li>Telefone</li>
      <li>Casa</li>
      <li>Estado</li>
    </ul>
  </div>,
  document.getElementById("root")
);
