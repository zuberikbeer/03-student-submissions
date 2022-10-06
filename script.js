"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };

  array.push(studentInfo);
};

addSubmission(submissions, "James", 100, "2022-10-05");
addSubmission(submissions, "Andrea", 60, "2022-10-05");

console.log(submissions);

//3.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

//deleteSubmissionByIndex(submissions, 3);

console.log(submissions);

//4.

const deleteSubmissionByName = (array, name) => {
  const ToFindIndex = array.findIndex((submissions) => {
    return submissions.name === name;
  });
  array.splice(ToFindIndex, 1);
};
//deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

//5.

//we dont do .notation on arrays but only on objects.
const editSubmission = (array, index, newScore) => {
  array[index].score = newScore;
  let newPassed = true;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  array[index].passed = newPassed;
};
//pluging in info only when you call a function//
editSubmission(submissions, 1, 50);

console.log(submissions);
