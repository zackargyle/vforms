var VForms = (function () {
  return {
    getObject: function (formID, clear) {

      event.preventDefault();

      if (typeof formID !== "string") {
        console.log("First param must be a string for form id");
        return;
      }

      var form = document.getElementById(formID);

      if (!form) {
        console.log("Invalid form id");
        return;
      }

      var formElements = form.elements,
        elemTags = ["INPUT", "TEXTFIELD", "SELECT"],
        ignoreTypes = ["button", "file", "hidden", "image", "reset", "submit"],
        formData = {};

      for (var i = 0; i < formElements.length; i++) {

        var elem = formElements[i];

        if (elemTags.indexOf(elem.tagName) !== -1 &&
            ignoreTypes.indexOf(elem.type) === -1 &&
            elem.hasOwnProperty("value")) {

          if (!elem.getAttribute("key")) {
            console.log("Must define 'key' attributes for " + elem);
          } else {
            if (elem.type !== "radio" || elem.checked) {
              formData[elem.getAttribute("key")] = elem.value;
            }
          }
        }
      }

      if (clear && typeof clear === "boolean") {
        form.reset();
      }

      return formData;

    },
    fillForm: function(formID, formObject) {

  	  if (typeof formID !== "string") {
        console.log("First param must be a string for form id");
        return;
      }
      if (typeof formObject !== "object") {
    	console.log("Second param must be an object");
    	return;
      }

      var form = document.getElementById(formID);

      if (!form) {
        console.log("Invalid form id");
        return;
      }

      var formElements = form.elements;
  
  	  for (var i = 0; i < formElements.length; i++) {
      
        var elem = formElements[i],
          key = elem.getAttribute("key");

        if (formObject.hasOwnProperty(key)) {
          if (elem.type === "radio") {
            if (elem.value === formObject[key]) {
            	elem.checked = true;
            }
          }
          else {
          	elem.value = formObject[key];
          }
        }
      }
    }
  };

}());

// var testObject = {
// 	"street": "98 W 880 N",
// 	"city": "Provo",
// 	"state": "UT",
// 	"country": "Canada",
// 	"zip_code": "84606"
// }

// VForms.fillForm("test-form", testObject);

// var run = function () {
//   var data = Forms.getObject("test-form", false);
//   console.log(data);
// };