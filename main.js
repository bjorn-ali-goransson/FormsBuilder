


var target = buildModel({
  name: 'Lorem ipsum'
});



var definitions = [
  {
    id: 'name',
    name: 'Name',
    type: 'string'
  }
];



var elements = [

];



var form = createForm(target, definitions, elements);

document.getElementById('my-form').appendChild(form);

setInterval(function(){
  document.getElementById('debug').value = JSON.stringify(target);
}, 100);