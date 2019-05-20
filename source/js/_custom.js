$(document).ready(function () {
  //sidebar: collapse all submenu inner
  $('.submenu').on('hidden.bs.collapse', function () {
    $(this).find('.collapse').collapse('hide');
  })

  // sidebar: keep open current submenu
  $('[data-parent="#sidebarAccordion"]').on('hide.bs.collapse', function (e) {
    if ($(this).find('.active').length > 0) {
      e.preventDefault();
    }
  });

  // sidebar collapse
  sidebarCollapse();

  // doughnut chart
  $(".js-doughnut-chart").each(function () {
    var _ele = $(this);
    var _devicesDataSet = $(this).data('setdata');
    drawDoughnutChart(_ele, _devicesDataSet);
  });
});
