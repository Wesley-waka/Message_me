// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

scroll_bottom = function () {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

submit_message = function () {
  $('#message_body').on('keydown', function (e) {
    if (e.keyCode == 13) {
      e.target.value = "";
      $('button').click();
      $('#messages').append('<li>' + message + '</li>');
    };
  });
};


$(document).on('turbolinks:load', function () {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function () {
    $(this).closest('.message').transition('fade');
  });
  submit_message();
  scroll_bottom();
})

// ne one
// $(document).ready(function () {
//   $("#message-form").submit(function (event) {
//     event.preventDefault();
//     var form = $(this);
//     var url = form.attr('action');
//     var data = form.serialize();
//     $.ajax({
//       url: url,
//       type: 'POST',
//       data: data,
//       success: function (response) {
//         $('#message-container').html(response);
//         $('#message-form')[0].reset();
//       }
//     });
//   });
// });