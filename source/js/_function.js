//sidebar collapse
function sidebarCollapse() {
  $('#js-toggle-sidebar').on('click', function () {
    $('.js-sidebar-collapse').toggleClass('show');

    $('.overlay').fadeToggle('200');

    $('.overlay').on('click', function () {
      $('.js-sidebar-collapse').removeClass('show');
      $(this).fadeOut();
    });
  })
}

// draw doughnut chart
function drawDoughnutChart(_ele, _data) {
  new Chart(_ele, {
    type: 'doughnut',
    data: _data,
    options: {
      maintainAspectRatio: false,
      cutoutPercentage: 83,
      legend: {
        display: false
      },
      tooltips: {
        // callbacks: {
        //   title: function (tooltipItem, data) {
        //     return data['labels'][tooltipItem[0]['index']];
        //   },
        //   label: function (tooltipItem, data) {
        //     var dataset = data['datasets'][0];
        //     var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
        //     return percent + '%';
        //   },
        // },
        // displayColors: true,
        // backgroundColor: '#FFF',
        // titleFontSize: 14,
        // titleFontColor: '#000',
        // bodyFontColor: '#6e84a3',
        // bodyFontSize: 12,
        // borderColor: '#6e84a3',
        // borderWidth: 1,
        // xAlign: 'center',
        // yAlign: 'top'


        enabled: false,
        custom: function (r) {
          var a = $("#chart-tooltip");
          if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
            if (r.body) {
              var e = r.title || [],
                l = r.body.map(function (a) {
                  return a.lines
                }),
                n = "";
              n += '<div class="arrow"></div>', e.forEach(function (a) {
                n += '<h3 class="popover-header text-center" style="background-color: #fff; border-bottom: 0; margin-bottom: 0;">' + a + "</h3>"
              }), l.forEach(function (a, e) {
                var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '; width: 10px; height: 10px; border-radius: 50%; margin-right: 4px;"></span>';
                n += '<div class="popover-body d-flex justify-content-center align-items-center">' + t + a + "</div>"
              }), a.html(n)
            }

            var t = $(this._chart.canvas),
              o = (t.outerWidth(), t.outerHeight(), t.offset().top),
              s = t.offset().left,
              i = a.outerWidth(),
              c = a.outerHeight(),
              d = o + r.caretY - c - 16,
              u = s + r.caretX - i / 2;
            a.css({
              top: d + "px",
              left: u + "px",
              display: "block"
            })
          } else a.css("display", "none")
        },
        callbacks: {
          title: function (a, e) {
            return e.labels[a[0].index]
          },
          label: function (a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>"
          }
        }
      }
    }
  });
}
