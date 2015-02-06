function addUser(user) {
  $.get('https://api.github.com/users/' + user + '?access_token=5880f9e03c22d35482a61a9053bd9308cd600752',function(user){
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