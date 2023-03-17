// Item remove array



const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
 const index=names.indexOf(nameToRemove);

 if(index !== -1){
    names.splice(index,1);
 }

  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// time travel


  const travelInformation = {
    speed: 120,
    destinationDistance: 432,
  };

  function notThisFunctionName( travelInformation){
    const { speed, destinationDistance } = travelInformation;
  const totalMinutes = (destinationDistance / speed) * 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);

  return `${hours} hours and ${minutes} minutes`;
  }

  const travelTime = notThisFunctionName(travelInformation);
  console.log(travelTime); 


//   End of time travel


// Time spent on movies

const blue = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    }
  ];

  function timespent(blue,age){
    for(let i=0; i<blue.length; i++){
        let title=blue[i].title
        let daysToyear = blue[i].days/365;
        let hoursToYear= blue[i].hours/(24*365);
        let minutesToYear=blue[i].minutes/(60*24*365);
        }
        let total=(daysToyear + hoursToYear + minutesToYear).toFixed(3);
        let relevanttime=age*(total/100);

        console.log(`${title} tool ${relevanttime}% of my life`)
        
            
        }
       
   
     timespent(blue,30)










