google.charts.load('current', {
  'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);


function drawChart() {
  var data = google.visualization.arrayToDataTable([
      ["datatime", "media"],
      ["2022-01-01", 2.903124988079071],
      ["2022-01-02", 2.767391287762186],
      ["2022-01-03", 2.6520833174387612],
      ["2022-01-04", 2.6520833174387612],
      ["2022-01-05", 2.6520833174387612],
      ["2022-01-06", 2.6520833174387612],
      ["2022-01-07", 2.767391287762186],
      ["2022-01-08", 2.6520833174387612],
      ["2022-01-09", 2.6520833174387612],
      ["2022-01-10", 2.6520833174387612],
      ["2022-01-11", 2.6520833174387612],
      ["2022-01-12", 2.767391287762186],
      ["2022-01-13", 2.6520833174387612],
      ["2022-01-14", 2.6520833174387612],
      ["2022-01-15", 2.6520833174387612],
      ["2022-01-16", 2.6520833174387612],
      ["2022-01-17", 2.767391287762186],
      ["2022-01-18", 2.6520833174387612],
      ["2022-01-19", 2.6520833174387612],
      ["2022-01-20", 2.6520833174387612],
      ["2022-01-21", 2.767391287762186],
      ["2022-01-22", 2.767391287762186],
      ["2022-01-23", 2.6520833174387612],
      ["2022-01-24", 2.6520833174387612],
      ["2022-01-25", 2.6520833174387612],
      ["2022-01-26", 2.767391287762186],
      ["2022-01-27", 2.767391287762186],
      ["2022-01-28", 2.6107142766316733],
      ["2022-01-29", 2.6520833174387612],
      ["2022-01-30", 2.6520833174387612],
      ["2022-01-31", 2.767391287762186],
      ["2022-02-01", 2.6520833174387612],
      ["2022-02-02", 2.6520833174387612],
      ["2022-02-03", 2.6520833174387612],
      ["2022-02-04", 2.6520833174387612],
      ["2022-02-05", 2.767391287762186],
      ["2022-02-06", 2.6520833174387612],
      ["2022-02-07", 2.6520833174387612],
      ["2022-02-08", 2.6520833174387612],
      ["2022-02-09", 2.767391287762186],
      ["2022-02-10", 2.767391287762186],
      ["2022-02-11", 2.767391287762186],
      ["2022-02-12", 2.6520833174387612],
      ["2022-02-13", 2.580555544959174],
      ["2022-02-14", 2.903124988079071],
      ["2022-04-05", 2.903124988079071],
      ["2022-04-06", 2.6520833174387612],
      ["2022-04-07", 2.767391287762186],
      ["2022-04-08", 2.767391287762186],
      ["2022-04-09", 2.6520833174387612],
      ["2022-04-10", 2.6520833174387612],
      ["2022-04-11", 2.6520833174387612],
      ["2022-04-12", 2.6520833174387612],
      ["2022-04-13", 2.6520833174387612],
      ["2022-04-14", 2.767391287762186],
      ["2022-04-15", 2.6520833174387612],
      ["2022-04-16", 2.6520833174387612],
      ["2022-04-17", 2.6520833174387612],
      ["2022-04-18", 2.6520833174387612],
      ["2022-04-19", 2.6520833174387612],
      ["2022-04-20", 2.767391287762186],
      ["2022-04-21", 2.6520833174387612],
      ["2022-04-22", 2.6520833174387612],
      ["2022-04-23", 2.6520833174387612],
      ["2022-04-24", 2.6520833174387612],
      ["2022-04-25", 2.6520833174387612],
      ["2022-04-26", 2.6520833174387612],
      ["2022-04-27", 2.767391287762186],
      ["2022-04-28", 2.6520833174387612],
      ["2022-04-29", 2.6520833174387612],
      ["2022-04-30", 2.5863636190241035],
      ["2022-05-01", 2.6520833174387612],
      ["2022-05-02", 2.6520833174387612],
      ["2022-05-03", 2.767391287762186],
      ["2022-05-04", 2.767391287762186],
      ["2022-05-05", 2.6520833174387612],
      ["2022-05-06", 2.8020833134651184],
      ["2022-05-07", 2.6520833174387612],
      ["2022-05-08", 2.6520833174387612],
      ["2022-05-09", 2.6520833174387612],
      ["2022-05-10", 2.767391287762186],
      ["2022-05-11", 2.5812499821186066],
      ["2022-05-12", 2.6520833174387612],
      ["2022-05-13", 2.6520833174387612],
      ["2022-05-14", 2.6520833174387612],
      ["2022-05-15", 2.6520833174387612],
      ["2022-05-16", 2.767391287762186],
      ["2022-05-17", 2.767391287762186],
      ["2022-05-18", 2.6520833174387612],
      ["2022-05-19", 2.9249999863760814],
  ]);

  var options = {
      title: 'Grafico valori sensore di tipo T',
      curveType: 'function',
      legend: {
          position: 'bottom',
          
         
      }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

function drawChart2() {
  var data2 = google.visualization.arrayToDataTable([
      ["datatime", "media"],
      ["2022-01-01",3.375], 
      ["2022-01-02",3.5760869565217392], 
      ["2022-01-03",3.625], 
      ["2022-01-04",3.625], 
      ["2022-01-05",3.625], 
      ["2022-01-06",3.625], 
      ["2022-01-07",3.5760869565217392], 
      ["2022-01-08",3.625], 
      ["2022-01-09",3.625], 
      ["2022-01-10",3.625], 
      ["2022-01-11",3.625], 
      ["2022-01-12",3.5760869565217392], 
      ["2022-01-13",3.625], 
      ["2022-01-14",3.625], 
      ["2022-01-15",3.625], 
      ["2022-01-16",3.625], 
      ["2022-01-17",3.5760869565217392], 
      ["2022-01-18",3.625], 
      ["2022-01-19",3.625], 
      ["2022-01-20",3.625], 
      ["2022-01-21",3.5760869565217392], 
      ["2022-01-22",3.5760869565217392], 
      ["2022-01-23",3.625], 
      ["2022-01-24",3.625], 
      ["2022-01-25",3.625], 
      ["2022-01-26",3.5760869565217392], 
      ["2022-01-27",3.5760869565217392], 
      ["2022-01-28",3.4404761904761907], 
      ["2022-01-29",3.625], 
      ["2022-01-30",3.625], 
      ["2022-01-31",3.5760869565217392], 
      ["2022-02-01",3.625], 
      ["2022-02-02",3.625], 
      ["2022-02-03",3.625], 
      ["2022-02-04",3.625], 
      ["2022-02-05",3.5760869565217392], 
      ["2022-02-06",3.625], 
      ["2022-02-07",3.625], 
      ["2022-02-08",3.625], 
      ["2022-02-09",3.5760869565217392], 
      ["2022-02-10",3.5760869565217392], 
      ["2022-02-11",3.5760869565217392], 
      ["2022-02-12",3.625], 
      ["2022-02-13",3.3472222222222223], 
      ["2022-02-14",3.375], 
      ["2022-04-05",3.375], 
      ["2022-04-06",3.625], 
      ["2022-04-07",3.5760869565217392], 
      ["2022-04-08",3.5760869565217392], 
      ["2022-04-09",3.625], 
      ["2022-04-10",3.625], 
      ["2022-04-11",3.625], 
      ["2022-04-12",3.625], 
      ["2022-04-13",3.625], 
      ["2022-04-14",3.5760869565217392], 
      ["2022-04-15",3.625], 
      ["2022-04-16",3.625], 
      ["2022-04-17",3.625], 
      ["2022-04-18",3.625], 
      ["2022-04-19",3.625], 
      ["2022-04-20",3.5760869565217392], 
      ["2022-04-21",3.625], 
      ["2022-04-22",3.625], 
      ["2022-04-23",3.625], 
      ["2022-04-24",3.625], 
      ["2022-04-25",3.625], 
      ["2022-04-26",3.625], 
      ["2022-04-27",3.5760869565217392], 
      ["2022-04-28",3.625], 
      ["2022-04-29",3.625], 
      ["2022-04-30",3.5], 
      ["2022-05-01",3.625], 
      ["2022-05-02",3.625], 
      ["2022-05-03",3.5760869565217392], 
      ["2022-05-04",3.5760869565217392], 
      ["2022-05-05",3.625], 
      ["2022-05-06",3.4583333333333335], 
      ["2022-05-07",3.625], 
      ["2022-05-08",3.625], 
      ["2022-05-09",3.625], 
      ["2022-05-10",3.5760869565217392], 
      ["2022-05-11",3.359375], 
      ["2022-05-12",3.625], 
      ["2022-05-13",3.625], 
      ["2022-05-14",3.625], 
      ["2022-05-15",3.625], 
      ["2022-05-16",3.5760869565217392], 
      ["2022-05-17",3.5760869565217392], 
      ["2022-05-18",3.625], 
      ["2022-05-19",3.392857142857143], 
  ])
  var options2 = {
    title: 'Grafico valori sensore di tipo PM10',
    curveType: 'function',
    legend: {
        position: 'bottom',
       
    }
};

var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart1'));

chart1.draw(data2, options2);
}

function drawChart3() {
  var data3 = google.visualization.arrayToDataTable([
      ["datatime", "media"],
      ["2022-01-01",3.125], 
      ["2022-01-02",2.989130434782609], 
      ["2022-01-03",3.0104166666666665], 
      ["2022-01-04",3.0104166666666665], 
      ["2022-01-05",3.0104166666666665], 
      ["2022-01-06",3.0104166666666665], 
      ["2022-01-07",2.989130434782609], 
      ["2022-01-08",3.0104166666666665], 
      ["2022-01-09",3.0104166666666665], 
      ["2022-01-10",3.0104166666666665], 
      ["2022-01-11",3.0104166666666665], 
      ["2022-01-12",2.989130434782609], 
      ["2022-01-13",3.0104166666666665], 
      ["2022-01-14",3.0104166666666665], 
      ["2022-01-15",3.0104166666666665], 
      ["2022-01-16",3.0104166666666665], 
      ["2022-01-17",2.989130434782609], 
      ["2022-01-18",3.0104166666666665], 
      ["2022-01-19",3.0104166666666665], 
      ["2022-01-20",3.0104166666666665], 
      ["2022-01-21",2.989130434782609], 
      ["2022-01-22",2.989130434782609], 
      ["2022-01-23",3.0104166666666665], 
      ["2022-01-24",3.0104166666666665], 
      ["2022-01-25",3.0104166666666665], 
      ["2022-01-26",2.989130434782609], 
      ["2022-01-27",2.989130434782609], 
      ["2022-01-28",2.892857142857143], 
      ["2022-01-29",3.0104166666666665], 
      ["2022-01-30",3.0104166666666665], 
      ["2022-01-31",2.989130434782609], 
      ["2022-02-01",3.0104166666666665], 
      ["2022-02-02",3.0104166666666665], 
      ["2022-02-03",3.0104166666666665], 
      ["2022-02-04",3.0104166666666665], 
      ["2022-02-05",2.989130434782609], 
      ["2022-02-06",3.0104166666666665], 
      ["2022-02-07",3.0104166666666665], 
      ["2022-02-08",3.0104166666666665], 
      ["2022-02-09",2.989130434782609], 
      ["2022-02-10",2.989130434782609], 
      ["2022-02-11",2.989130434782609], 
      ["2022-02-12",3.0104166666666665], 
      ["2022-02-13",2.8333333333333335], 
      ["2022-02-14",3.125], 
      ["2022-04-05",3.125], 
      ["2022-04-06",3.0104166666666665], 
      ["2022-04-07",2.989130434782609], 
      ["2022-04-08",2.989130434782609], 
      ["2022-04-09",3.0104166666666665], 
      ["2022-04-10",3.0104166666666665], 
      ["2022-04-11",3.0104166666666665], 
      ["2022-04-12",3.0104166666666665], 
      ["2022-04-13",3.0104166666666665], 
      ["2022-04-14",2.989130434782609], 
      ["2022-04-15",3.0104166666666665], 
      ["2022-04-16",3.0104166666666665], 
      ["2022-04-17",3.0104166666666665], 
      ["2022-04-18",3.0104166666666665], 
      ["2022-04-19",3.0104166666666665], 
      ["2022-04-20",2.989130434782609], 
      ["2022-04-21",3.0104166666666665], 
      ["2022-04-22",3.0104166666666665], 
      ["2022-04-23",3.0104166666666665], 
      ["2022-04-24",3.0104166666666665], 
      ["2022-04-25",3.0104166666666665], 
      ["2022-04-26",3.0104166666666665], 
      ["2022-04-27",2.989130434782609], 
      ["2022-04-28",3.0104166666666665], 
      ["2022-04-29",3.0104166666666665], 
      ["2022-04-30",2.9318181818181817], 
      ["2022-05-01",3.0104166666666665], 
      ["2022-05-02",3.0104166666666665], 
      ["2022-05-03",2.989130434782609], 
      ["2022-05-04",2.989130434782609], 
      ["2022-05-05",3.0104166666666665], 
      ["2022-05-06",2.6875], 
      ["2022-05-07",3.0104166666666665], 
      ["2022-05-08",3.0104166666666665], 
      ["2022-05-09",3.0104166666666665], 
      ["2022-05-10",2.989130434782609], 
      ["2022-05-11",2.828125], 
      ["2022-05-12",3.0104166666666665], 
      ["2022-05-13",3.0104166666666665], 
      ["2022-05-14",3.0104166666666665], 
      ["2022-05-15",3.0104166666666665], 
      ["2022-05-16",2.989130434782609], 
      ["2022-05-17",2.989130434782609], 
      ["2022-05-18",3.0104166666666665], 
      ["2022-05-19",3.2142857142857144], 
     
  ])
  var options3 = {
    title: 'Grafico valori sensore di tipo PM2.5',
    curveType: 'function',
    legend: {
        position: 'bottom',
       
    }
};

var chart3 = new google.visualization.LineChart(document.getElementById('curve_chart3'));

chart3.draw(data3, options3);
}
function drawChart4() {
  var data4 = google.visualization.arrayToDataTable([
      ["datatime", "media"],
      ["2022-01-01",24.975000381469727], 
      ["2022-01-02",23.885869896930195], 
      ["2022-01-03",24.971875349680584], 
      ["2022-01-04",24.971875349680584], 
      ["2022-01-05",24.971875349680584], 
      ["2022-01-06",24.971875349680584], 
      ["2022-01-07",23.885869896930195], 
      ["2022-01-08",24.971875349680584], 
      ["2022-01-09",24.971875349680584], 
      ["2022-01-10",24.971875349680584], 
      ["2022-01-11",24.971875349680584], 
      ["2022-01-12",23.885869896930195], 
      ["2022-01-13",24.971875349680584], 
      ["2022-01-14",24.971875349680584], 
      ["2022-01-15",24.971875349680584], 
      ["2022-01-16",24.971875349680584], 
      ["2022-01-17",23.885869896930195], 
      ["2022-01-18",24.971875349680584], 
      ["2022-01-19",24.971875349680584], 
      ["2022-01-20",24.971875349680584], 
      ["2022-01-21",23.885869896930195], 
      ["2022-01-22",23.885869896930195], 
      ["2022-01-23",24.971875349680584], 
      ["2022-01-24",24.971875349680584], 
      ["2022-01-25",24.971875349680584], 
      ["2022-01-26",23.885869896930195], 
      ["2022-01-27",23.885869896930195], 
      ["2022-01-28",24.97142891656785], 
      ["2022-01-29",24.971875349680584], 
      ["2022-01-30",24.971875349680584], 
      ["2022-01-31",23.885869896930195], 
      ["2022-02-01",24.971875349680584], 
      ["2022-02-02",24.971875349680584], 
      ["2022-02-03",24.971875349680584], 
      ["2022-02-04",24.971875349680584], 
      ["2022-02-05",23.885869896930195], 
      ["2022-02-06",24.971875349680584], 
      ["2022-02-07",24.971875349680584], 
      ["2022-02-08",24.971875349680584], 
      ["2022-02-09",23.885869896930195], 
      ["2022-02-10",23.885869896930195], 
      ["2022-02-11",23.885869896930195], 
      ["2022-02-12",24.971875349680584], 
      ["2022-02-13",24.970833672417534], 
      ["2022-02-14",24.975000381469727], 
      ["2022-04-05",24.975000381469727], 
      ["2022-04-06",24.971875349680584], 
      ["2022-04-07",23.885869896930195], 
      ["2022-04-08",23.885869896930195], 
      ["2022-04-09",24.971875349680584], 
      ["2022-04-10",24.971875349680584], 
      ["2022-04-11",24.971875349680584], 
      ["2022-04-12",24.971875349680584], 
      ["2022-04-13",24.971875349680584], 
      ["2022-04-14",23.885869896930195], 
      ["2022-04-15",24.971875349680584], 
      ["2022-04-16",24.971875349680584], 
      ["2022-04-17",24.971875349680584], 
      ["2022-04-18",24.971875349680584], 
      ["2022-04-19",24.971875349680584], 
      ["2022-04-20",23.885869896930195], 
      ["2022-04-21",24.971875349680584], 
      ["2022-04-22",24.971875349680584], 
      ["2022-04-23",24.971875349680584], 
      ["2022-04-24",24.971875349680584], 
      ["2022-04-25",24.971875349680584], 
      ["2022-04-26",24.971875349680584], 
      ["2022-04-27",23.885869896930195], 
      ["2022-04-28",24.971875349680584], 
      ["2022-04-29",24.971875349680584], 
      ["2022-04-30",24.968182130293414], 
      ["2022-05-01",24.971875349680584], 
      ["2022-05-02",24.971875349680584], 
      ["2022-05-03",23.885869896930195], 
      ["2022-05-04",23.885869896930195], 
      ["2022-05-05",24.971875349680584], 
      ["2022-05-06",24.968750317891438], 
      ["2022-05-07",24.971875349680584], 
      ["2022-05-08",24.971875349680584], 
      ["2022-05-09",24.971875349680584], 
      ["2022-05-10",23.885869896930195], 
      ["2022-05-11",24.97031283378601], 
      ["2022-05-12",24.971875349680584], 
      ["2022-05-13",24.971875349680584], 
      ["2022-05-14",24.971875349680584], 
      ["2022-05-15",24.971875349680584], 
      ["2022-05-16",23.885869896930195], 
      ["2022-05-17",23.885869896930195], 
      ["2022-05-18",24.971875349680584], 
      ["2022-05-19",24.975000381469727], 
      
    
      
  ])
  var options4 = {
    title: 'Grafico valori sensore di tipo RH',
    curveType: 'function',
    legend: {
        position: 'bottom',
       
    }
};

var chart4 = new google.visualization.LineChart(document.getElementById('curve_chart4'));

chart4.draw(data4, options4);
}
