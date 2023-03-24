//voice assistante
let nameOfperson;
let toDo = [];
function getReply(command) 
{
  let response;
  let textMessage;
  let task;
  command.toLowerCase();
  switch (command) {
    case "Hello my name is sameera":
      textMessage = command.split(" ");
      nameOfperson = textMessage[textMessage.length - 1];
      response = `nice to meet you ${nameOfperson}`;
      break;

    case "What is my name?":
      response = `your name is  ${nameOfperson}`;
      break;
    case "Add fishing to my todo":
      textMessage = command.split(" ");
      task = textMessage[1];
      toDo.push(task);
      response = ` ${task} added to your todo`;
      break;
    case "add singing in the shower to my todo":
      task = command.slice(4, 25);
      toDo.push(task);
      response = ` ${task} added to your todo`;
      break;
    case "what is on my todo":
      response = `${toDo.toString()} is on your list`;
      break;
    case "What day is it today?":
      const today = new Date();
      const style = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      response = today.toLocaleDateString('en-GB', style);
      break;

    case "what is 3 + 3":
      textMessage= command.slice(8);
      response = `answer is ${eval(textMessage)}`;
      break;

    case "set a timer for 4 minutes":
      textMessage = command.split(" ");
      let timer = textMessage[textMessage.length - 2];
      response = `Timer set for ${timer} minutes`;
      setTimeout(() => {
        console.log("Timer completed");
      }, timer * 1000);

      break;
    case "remove fishing from my todo":
      textMessage = command.split(" ");
      task = textMessage[1];
      if (toDo.includes(task)) {
        toDo.splice(toDo.indexOf("fishing"), 1);
        response = `${task} removed from todo`;
      } else {
        response = `${task} is not on your todo list`;
      }
      break;

    default:
      response = "Sorry, cannot help you.";
  }

  if (response) {
    return response;
  }
}

console.log(getReply("Hello my name is sameera"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("what is on my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("set a timer for 4 minutes"));
console.log(getReply("remove fishing from my todo"));