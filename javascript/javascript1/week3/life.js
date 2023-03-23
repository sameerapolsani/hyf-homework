//Series duration of my life
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  function logOutSeriesText() {
    const minutsInYear = 365*24*60;
    const minuts80Years = minutsInYear*80;
    let minutesSpentOntvseries = 0;
    for (i=0;i<seriesDurations.length;i++){
      const fullOftvSeriesinMinutes = seriesDurations[i].days *24 *60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
      
      minutesSpentOntvseries = minutesSpentOntvseries + fullOftvSeriesinMinutes;

      const persentageAveragelifespan = (minutesSpentOntvseries/minuts80Years) *100;

      console.log(`${seriesDurations[i].title} hve taken ${persentageAveragelifespan} % of my life`);

    }
    const totalPersentage = (minutesSpentOntvseries/minuts80Years)*100;
    console.log(`${totalPersentage} % of my life`);
     
  }
  logOutSeriesText(seriesDurations);
  
  logOutSeriesText(); // logs out the text found above