


var target = buildModel({
  name: 'Lorem ipsum'
});



var propertyDefinitions = [
  {
    key: 'name',
    name: 'Name',
    type: 'string'
  }
];



var formElements = [
  {
    type: 'string',
    create: function(get, set){
      var element = document.createElement('input');
      
      element.type = 'text';
      element.value = get();

      function update(){
        set(element.value);
      }

      element.addEventListener('change', update);
      element.addEventListener('keyup', update);

      return element;
    }
  }
];



var form = createForm(target, propertyDefinitions, formElements);

document.getElementById('my-form').appendChild(form);

setInterval(function(){
  document.getElementById('debug').value = JSON.stringify(target);
  document.getElementById('heading').innerText = target.name;
}, 100);