
var medicamentos=[]

function addMed(){

let newMed = {
  "medName":document.getElementById('name').value,
  "medQtde":document.getElementById('qtde').value,
  "medClass":document.getElementById('class').value
}


if(newMed.medName==''||newMed.medQtde==''||newMed.medClass==''){
  alert('Preencha todos os campos.')
} else{
  medicamentos.push(newMed)
  renderTable()
  formReset()

}

}

function renderTable(){

  let tbody = document.getElementById('tbody')

  tbody.innerHTML = ''

  for(let i = 0; i < medicamentos.length; i++){

  tbody.innerHTML = tbody.innerHTML + '<tr><td>'+i +'</td><td>'+medicamentos[i].medName+'</td><td>'+medicamentos[i].medQtde+'</td><td>'+medicamentos[i].medClass+'</td><td><img src="./image/trash.svg" alt="" onclick="deleteMed('+i+')"></td></tr>'
  }

}


function formReset(){
  document.getElementById("name").value = "";
  document.getElementById("qtde").value = "";
  document.getElementById("class").value = "";
}

function deleteMed(index){
  medicamentos.splice(index,1);
  renderTable();
}