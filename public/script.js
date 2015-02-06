$(document).ready(function(){
  $.get('https://api.github.com/users/sandagolcea',function(user){
    
      var newProfile = Mustache.render($('#profile-template').html(), user);
      $('.profile-container').append(newProfile);
  });

  $.get('https://api.github.com/users/tansaku',function(user){
    
      var newProfile = Mustache.render($('#profile-template').html(), user);
      $('.profile-container').append(newProfile);
  });

  $.get('https://api.github.com/users/jaircazarin',function(user){
    
      var newProfile = Mustache.render($('#profile-template').html(), user);
      $('.profile-container').append(newProfile);
  });

});