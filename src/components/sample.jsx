$(document).ready(function () {

  localStorage.setItem('price_table_json_BNB', price_table_json_BNB);
  localStorage.setItem('price_table_json_USDT', price_table_json_USDT);
  localStorage.setItem('price_table_json_ETH', price_table_json_ETH);

  

  localStorage.setItem('per', per);
  localStorage.setItem('check', 0);
  localStorage.setItem('conv_coin', 'BNB');
  localStorage.setItem('coin_dlr_price', price_table_json_BNB);
  localStorage.removeItem('conv_coin_price');
});

$("#conv-value").click(() => {
  $("#dd_ul").toggleClass("show , dd_position")
})

$(".conv-coin").click(function () {
  var this_id = $(this).attr('id');
  $(".conv-coin").children('a').removeClass('active');
  $(this).children('a').addClass('active');
  var conv_coin = this_id.replace("active-", "");
  $("#conv-value").html(conv_coin);
  localStorage.setItem('coin_dlr_price', localStorage.getItem('price_table_json_' + conv_coin));
  localStorage.setItem('conv_coin', conv_coin);
  $(".coin-two-price").keyup();
});

$(".coin-two-price").keyup(function () {
  var conv_coin = localStorage.getItem('conv_coin');
  if (!conv_coin) {
      swal("Error!", "Please select coin!", "error");
      return false;
  }
  var conv_coin_price = $(this).val();
  var coin_dlr_price = localStorage.getItem('coin_dlr_price');
  var coin_one_price = conv_coin_price * coin_dlr_price;
  coin_one_price = coin_one_price.toFixed(DECIMAL);
  var total_amt_conv_coin = (conv_coin_price / coin_dlr_price).toFixed(DECIMAL);
  $(".coin-one-price").val(total_amt_conv_coin); //shdvjhvsjljlhljhvljhvljhvljhvljhv
  localStorage.setItem('total_amt_conv_coin', total_amt_conv_coin);
  localStorage.setItem('conv_coin_price', conv_coin_price);
  localStorage.setItem('coin_one_price', total_amt_conv_coin);
  var per = localStorage.getItem('per');

  gettokens(conv_coin_price, per)
});

$("#flexCheckChecked").click(function () {
  var this_val = $(this).prop("checked");
  if (this_val == true) {
      localStorage.setItem('check', 1);
  } else {
      localStorage.setItem('check', 0);
  }
});

$("#submit-buytoken").click(function () {
  var auth_id = $.cookie("auth_id");
  if (!auth_id) {
      swal("Error!", "Please connect wallet!", "error");
  }
  var terms = localStorage.getItem('check');
  if (terms == false) {
      swal({
          title: "Warning!",
          text: "Please check terms and conditions!",
          icon: "error",
          button: "OK!",
      });
      return false;
  }


  var error = 0;
  var selected_coin = localStorage.getItem('conv_coin') || 0;
  var coin_dlr_price = localStorage.getItem('coin_dlr_price') || 0;
  var per = localStorage.getItem('per') || 0;
  var coin_one_price = localStorage.getItem('coin_one_price') || 0;

  var coin_two_price = localStorage.getItem('conv_coin_price') || 0;
  var tokens = localStorage.getItem('tokens') || 0;
  var bonus_tokens = localStorage.getItem('bonus_tokens') || 0;

  if (selected_coin <= 0 || coin_dlr_price <= 0) {
      var type = 'select';
      var type1 = 'coin';
      var error = 1;
  }

  if (coin_one_price <= 0 || coin_two_price <= 0 || tokens <= 0 || bonus_tokens <= 0) {
      var type = 'enter';
      var type1 = 'some amount';
      var error = 1;
  }

  if (error == 1) {
      swal({
          title: "Warning!",
          text: "Please " + type + " " + type1 + "!",
          icon: "error",
          button: "OK!",
      });
      return false;
  }
  buy();
});

function submit_token() {
  var selected_coin = localStorage.getItem('conv_coin') || 0;
  var coin_dlr_price = localStorage.getItem('coin_dlr_price') || 0;
  var per = localStorage.getItem('per') || 0;
  var coin_one_price = localStorage.getItem('coin_one_price') || 0;
  var coin_two_price = localStorage.getItem('conv_coin_price') || 0;
  var tokens = localStorage.getItem('tokens') || 0;
  var bonus_tokens = localStorage.getItem('bonus_tokens') || 0;

  $.ajax({
      url: buytoken_post,
      type: 'POST',
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      dataType: 'JSON',
      data: {
          selected_coin: selected_coin,
          coin_dlr_price: coin_dlr_price,
          per: per,
          coin_one_price: coin_one_price,
          coin_two_price: coin_two_price,
          tokens: tokens,
          bonus_tokens: bonus_tokens,
      },
      success: function (response) {
          if (response) {
              // DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE DONT REMOVE 
              // var coin_one_price = localStorage.getItem('coin_one_price') || 0;
              // buy(coin_one_price);
              // return false;
              swal({
                  title: "Success!",
                  text: "Your token is buy successfully",
                  icon: "success",
                  button: "OK!",
              }).then(function () {
                  location.reload();
              });
          }
      }
  });
}

function gettokens(amount, per) {
  if (amount >= 0) {
      $.ajax({
          url: route_gettokens,
          type: 'POST',
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          dataType: 'JSON',
          data: {
              amount: amount,
              per: per,
          },
          success: function (response) {
              var total_amount = (response.total_tokens + response.bonus_tokens).toFixed(DECIMAL);
              $(".tokens").html('Total Tokens = ' + response.total_tokens + ' + Bonus Tokens = ' +
                  response.bonus_tokens);
              $(".bonus-tokens").html(total_amount);
              localStorage.setItem('tokens', total_amount);
              localStorage.setItem('bonus_tokens', total_amount);
          }
      });
  }
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var upgradeTime = seconds_in_date;
var seconds = upgradeTime;

function timer() {
  var days = Math.floor(seconds / 24 / 60 / 60);
  var hoursLeft = Math.floor((seconds) - (days * 86400));
  var hours = Math.floor(hoursLeft / 3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
  var minutes = Math.floor(minutesLeft / 60);
  var remainingSeconds = seconds % 60;

  function pad(n) {
      return (n < 10 ? "0" + n : n);
  }
  document.getElementById('days').innerHTML = pad(days);
  document.getElementById('hours').innerHTML = pad(hours);
  document.getElementById('min').innerHTML = pad(minutes);
  document.getElementById('sec').innerHTML = pad(remainingSeconds);
  if (seconds == 0) {
      clearInterval(countdownTimer);
      document.getElementById('timer-div').innerHTML = '<p class="pt-2 pb-2 ps-2 text_light">Wait for next bonus</p>';
  } else {
      seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);