function buildProperty(instance, key){
  return {
    enumerable: true,
    get: function(){
      return instance[key];
    },
    set: function(value){
      instance[key] = value;
    }
  };
}

function buildModel(instance){
  var target = {};
  var properties = {};

  for(var key in instance){
    if(!instance.hasOwnProperty(key)){
      continue;
    }

    properties[key] = buildProperty(instance, key);
  }
  
  Object.defineProperties(target, properties);

  return target;
}