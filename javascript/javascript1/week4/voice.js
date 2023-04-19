//voice assistante
let nameOfperson;
let toDo = [];
function getReply(command) 
{
  let ouTput = null;
  let meSsage = command.toLowerCase();
  
  
  switch (command) 
  {
    case "hello my name is sameera":
      meSsage = command.split(" ");
      nameOfperson = meSsage[meSsage .length - 1];
      ouTput = `nice to meet you ${nameOfperson}`;
      break;

    case "what is my name?":
      ouTput =`your name is ${nameOfperson}`;
      break;
    case "add fishing to my todo":
      const firSttaSk = command.slice(4,11) ;
      toDo.push(firSttaSk);
      ouTput =`${firSttaSk} added to your todo`
      break;
    case "add singing in the shower to my todo ":
        const seCondtAsk = command.slice(4,25);
        toDo.push(seCondtAsk);
        ouTput = `${seCondtAsk} added to your todo`;
        break;
    case "remove fishing from my todo":
          const removeWord = command.slice(7,14);
          const  inDexofFishing = toDo.indexOf("fishing");
          toDo.splice(inDexofFishing,1)
          ouTput = `${removeWord} removed from your todo`;
          break;
    case "what is on my todo":
            ouTput = `${toDo.toString()} is in your todo`;
            break;
    case "what day is it today?":
              const toDay = new Date();
              const formateOfdate =
              {
                year: "numeric",
                month :"long",
                day :"numeric"
              }
           ouTput = toDay.toLocaleDateString("en-GB",formateOfdate);
           break;
           case "what is 4 + 3":
            const reSult =command.slice(8);
            ouTput = `${reSult} is eaqual to ${eval(reSult)}`;
            break;
            case "set a timer for 2 minutes":
              const tIme = command.slice(16,17);
              const timeInmiNutes =tIme * 60000;
              ouTput = `timer set to ${tIme} in minutes`;
              setTimeout(function () 
              {
                console.log("Timer done");
              }, timeInmiNutes);
              break;
              default:
                ouTput = "sorry can not help you";
            }
             if(ouTput)
             {
              console.log(ouTput);
             }
   
  }
(getReply("hello my name is sameera"));
(getReply("what is my name?"));
(getReply("add fishing to my todo"));
(getReply("add singing in the shower to my todo"));
(getReply("what is on my todo"));
(getReply("what day is it today?"));
(getReply("what is 4 + 3"));
(getReply("set a timer for 2 minutes"));
(getReply("remove fishing from my todo"));