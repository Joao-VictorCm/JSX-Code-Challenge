# JSX-Code-Challenge
Created with CodeSandbox.

Este projeto é um exemplo básico de uma aplicação React criada do zero, que exibe um título e uma lista não ordenada.

## Funcionalidades

- Exibe um título `<h1>`.
- Renderiza uma lista não ordenada com 4 itens.

## Código

O código principal está estruturado da seguinte forma:

```javascript
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
