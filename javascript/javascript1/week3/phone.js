//CactusIO-interactive (Smart phone usage app) optional
const activites = [];

function addActivities(date,activity,duration){
    const activityItems = {
        date,
        activity,
        duration,
    };
    activites.push(activityItems);
}
addActivities("23/7-18","youtube",30);
addActivities("24/6-18","facebook",40);
addActivities("25/6-18","instagram",20);
function showStatus(activites){
    if(activites.lenght === 0){
        console.log("add some activites before calling show status")
    }else{
        const limitUsage = 100;
        let totalTime = 0;
        activites.forEach(element => {
            totalTime = totalTime + element.duration;
            
        });
        if(totalTime>= limitUsage){
            console.log(" you have reached your limit ,no more phone for you");
        }else{
            console.log(`you added ${activites.lenght} activities. the amount to ${totalTime} minutes usage`);
        }
    }
}
showStatus(activites);