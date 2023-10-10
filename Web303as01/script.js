/*
	WEB 303 Assignment 1 - jQuery
	{Nishant Chodha
    W0830953}
*/
(function () {
    $(document).ready(function () {
      $(document).on("keyup", "#yearly-salary, #percent", function () {
        var salary = parseFloat($("#yearly-salary").val());
        var percent = parseFloat($("#percent").val());

        if (!isNaN(salary) && !isNaN(percent)) {
          var amount = (salary * (percent / 100)).toFixed(2);
          $("#amount").text("$" + amount);
        } else {
          $("#amount").text("");
        }
      });
    });
  })();
  