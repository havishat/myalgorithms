// Quiz Scheduler:
// You are implementing a quiz scheduler that takes in an amount of time a learner has to study and returns how many of each quiz the learner can see.

// The types of quizzes available are:

//         easy -- 1 minute quiz
//         medium -- 3 minute quiz
//         hard -- 5 minute quiz

// Your scheduler should return how many easy/medium/hard quizzes the learner can complete. Prefer giving hard quizzes over medium quizzes, and medium over easy quizzes.

// Example input/outputs:

// 15 minutes ->> 3 hard, 0 medium, 0 easy
// 13 minutes ->> 2 hard, 1 medium, 0 easy
// 4 minutes  ->> 1 medium, 1 easy
 

// # availableTime -- how many minutes the learner is free
// #def scheduleQuizzes(availableTime)



function scheduleQuizzes(availableTime) {
    var dict = { easy: "1", medium: "3", hard: "5"}
    var easycount = 0 
    var mediumcount = 0
    var hardcount = 0
    var remainingTime = 0
    
// console.log(dict["easy"])
 //availableTime = 3   
hardcount =  Math.floor(availableTime/dict["hard"]);  // 0

remainingTime = (availableTime%5); //3
mediumcount = Math.floor(remainingTime/dict["medium"]) //
remainingTime = remainingTime%3
easycount = Math.floor(remainingTime/dict["easy"])


return hardcount + "hard" + easycount + "easy" + mediumcount + "medium"      
} 

console.log(scheduleQuizzes(15))