//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    var stateSelect = $('select[name="state"]');
    var idx;
    var state;
    var option;
    for(idx = 0; i < usStates.length; ++idx){
    	state = usStates[idx];
    	option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
    }

    //Make sure that address and zip code are both input
    $('.signup-form').submit(function(){
    	var signupForm = $(this);
    	var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
    	if(addr1Value.length > 0){
    		var zipInput = signupForm.find('input[name="zip"]');
    		var zipValue = zipInput.val();
    		if(zipValue.length == 0){
    			alert('Please provide a zip code.');
    			return false;
    		}
    	}
    }); //submit signup

    //Redirects to home page
    $('.cancel-signup').click(function(){
    	window.location = 'http://www.google.com';
	}); //cancel-signup click

}); //on document ready 

