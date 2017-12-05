
//Traer elementos del html al js
document.body.onload = addElement;

//Función para crear, definir atributos agregar elementos y posicionarlos al DOM
function addElement(){
  var section = document.createElement("SECTION");
  var form = document.createElement("FORM");
  var input = document.createElement("INPUT");
  var textArea = document.createElement("TEXTAREA");
  var btnSave = document.createElement("BUTTON");
  var btnX = document.createElement("BUTTON");

  section.id = "section-id";
  form.id = "form-id";
  input.id = "input-id";
  textArea.id = "textArea-id";
  textArea.style.display = 'none';
  btnSave.id = "btnSave-id";
  btnX.style.display = "none";
  btnX.id = "btnX-id";
  input.placeholder = "Añadir una tarea...";
  btnSave.textContent = "Guardar";
  btnSave.style.color = "white";
  btnX.textContent = "X";
  btnX.style.color = "white";


  document.body.appendChild(section);
  section.appendChild(form);
  form.appendChild(input);
  form.appendChild(textArea);
  form.appendChild(btnSave);
  form.appendChild(btnX);

  section.style.display = "inline-block";


  btnSave.onclick = functionClic;

}

//document.getElementById("btnSave-id").onclick = functionClic;

function functionClic(event){
    event.preventDefault();
    var h1 = document.createElement("H1");
    h1.textContent = document.getElementById("input-id").value;
    document.getElementById("form-id").replaceChild(h1, document.getElementById("input-id"));
    var btnAdd = document.getElementById("btnSave-id").id = "btn-add-id";
    btnAdd.textContent = "Añadir";



    addElement();


}

/*
function functionClic(){
  var h1 = document.createElement("H1");

  var parent = document.getElementById('form-id');
  //document.getElementById('form-id').appendChild(h1);
  console.log("entrando a functionClic...");

  var replaced = document.getElementById("input-id");
  //var textH1 = document.createTextNode(replaced.value);
  console.log("textH1: "+replaced.value);
  //h1.appendChild(textH1);
  h1.textContent = replaced.value;
  parent.replaceChild(h1, replaced);

}
*/
