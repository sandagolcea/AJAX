function addUser(user) {
  $.get('https://api.github.com/users/' + user ,function(user){
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').append(newProfile);
  });
}


$(document).ready(function(){
  addUser('sandagolcea');
  $('#add_profile').on('submit', function(event){
    event.preventDefault();
    console.log('form submitted');
    addUser($('#username').val());
  })  
});