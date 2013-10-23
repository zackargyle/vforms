vforms
======

Manage forms through JSON objects

Using this basic ugly html form as an example. Specify a "key" attribute that will
be used for the key/value pair in your JSON object.

```
<form id="test-form" onsubmit="run()">
  	<label>Street</label>
	<input id="street" key="street" type="text"><br>
	<label>City</label>
	<input id="city" key="city" type="text"><br>
	<label>State</label>
	<select key="state">
		<option value="WA">WA</option>
		<option value="CA">CA</option>
		<option value="UT">UT</option>
	</select><br>
	<label>USA</label>
	<input name="country" key="country" type="radio" value="USA">
	<label>Canada</label>
	<input name="country" key="country" type="radio" value="Canada">
	<label>Mexico</label>
	<input name="country" key="country" type="radio" value="Mexico"><br>
	<label>Zip Code</label>
	<input id="zip" key="zip_code" type="text"><br>
	<input type="submit">
</form>
```

We can fill the form with JSON like this. The first parameter is the form id. Second parameter is an optional object to use.

```
var testObject = {
  "id": 34,
  "street": "98 W 880 N",
  "city": "Provo",
  "state": "UT",
  "country": "Canada",
  "zip_code": "84606"
}

VForms.fillForm("test-form", testObject);
```

And get a JSON object out like this. The second parameter specifies if the form should be cleared.

```
var run = function () {
  testObject = Forms.getObject("test-form", testObject);
  console.log(testObject)
};
```
