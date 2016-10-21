if (Meteor.isClient){
  Template.pickup.events({
    'submit .form-horizontal'(event){
      event.preventDefault();
 
      const target = event.target;
      var fullName = target.inputFullName.value;
      var email = target.inputEmail.value;
      var address = target.inputStreetAddress.value;
      var city = target.inputCity.value;
      var state = target.inputState.value;
      var zipCode= target.inputZipCode.value;

      $('#submitBtn').prop('disable', true).addClass('disabled');
      mapSearchAddress(address + city + state + zipCode);
    } 
  });
  
}

function mapSearchAddress(address){
  return false;
}
