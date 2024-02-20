(function () {
  /*
   * First requirement - From coursera 
   */
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    
    var firstLetter = names[i].charAt(0).toLowerCase();

    if(firstLetter == 'j') {
      byeSpeaker.speak(names[i])
    } else {
      helloSpeaker.speak(names[i])
    }
  }

  /*
   * Second requirement - print greetings via map function
   */

  console.log("-------------------------")

  // map function
  function mapNames(name) {
    var firstLetter = name.charAt(0).toLowerCase();
    
    if(firstLetter == 'j') {
      return byeSpeaker.speakSimple(name);
    } else {
      return helloSpeaker.speakSimple(name);
    }
  }

  // generate new array
  var mappedValues = names.map(mapNames);

  // console log the list
  for (var i = 0; i < mappedValues.length; i++) {
    console.log(mappedValues[i])
  }

  /*
   * Third optional requirement - use the reduce function to create 3 separate listings
   */

  console.log("-------------------------")

  const initialValue = {hello : [], bye: []}

  var reducedNames = names.reduce((accumulator, name) => {
    var firstLetter = name.charAt(0).toLowerCase();

    if(firstLetter == 'j') {
      accumulator['bye'].push(byeSpeaker.speakSimple(name))
    } else {
      accumulator['hello'].push(helloSpeaker.speakSimple(name))
    }

    return accumulator;

  }, initialValue);

  // print out names that produce hellos
  for(var i = 0; i < reducedNames['hello'].length; i++) {
    console.log(reducedNames['hello'][i])
  }

  // print out names that produce goodbyes
  for(var i = 0; i < reducedNames['bye'].length; i++) {
    console.log(reducedNames['bye'][i])
  }

})();
