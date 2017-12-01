function createForm(target, propertyDefinitions, formElements){
  var container = document.createElement('div');

  for(var i = 0; i < propertyDefinitions.length; i++){
    var propertyDefinition = propertyDefinitions[i];

    for(var j = 0; j < formElements.length; j++){
      var formElement = formElements[j];

      if(formElement.type != propertyDefinition.type){
        continue;
      }

      container.appendChild(createFormElement(target, propertyDefinition, formElement));
    }
  }

  return container;
}

function createFormElement(target, propertyDefinition, formElement){
  return formElement.create(function(){ return target[propertyDefinition.key]; }, function(value){ target[propertyDefinition.key] = value; });
}