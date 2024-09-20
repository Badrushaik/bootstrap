

$(document).ready(function () {
  
  $('#showJoinForm').click(function (e) {
      e.preventDefault();
      $('#joinClubFormContainer').toggle(); 
      $('#userDetails').hide(); 
  });

  
  $('#joinClubForm').on('submit', function (e) {
      e.preventDefault();
      
      
      var name = $('#name').val().trim();
      var email = $('#email').val().trim();
      var phone = $('#phone').val().trim();
      var club = $('#club').val();

      
      $('#userName').text(name);
      $('#userEmail').text(email);
      $('#userPhone').text(phone);
      $('#userClub').text(club);

      
      $('#userDetails').show();

    
      $('#joinClubFormContainer').hide();

     
      $('#joinClubForm')[0].reset();
  });
});