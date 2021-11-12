var survey_options = document.getElementById('survey_options');
	var add_more_fields = document.getElementById('add_more_fields');

	add_more_fields.onclick = function(){
		var newField = document.createElement('input');
		newField.setAttribute('type', 'text');
		newField.setAttribute('name', 'survey_options[]');
		newField.setAttribute('class', 'netEmp input-md form-control survey_options mt-1');
		newField.setAttribute('placeholder', 'Add Another Longitude');
		survey_options.appendChild(newField);
}
