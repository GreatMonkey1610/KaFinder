"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Placeholder questions with + or - keyed designation
const questions = [
  { id: 1, text: "Am the life of the party.", key: "+" }, // Extraversion
  { id: 2, text: "Feel little concern for others.", key: "-" }, // Agreeableness
  { id: 3, text: "Am always prepared.", key: "+" }, // Conscientiousness
  { id: 4, text: "Get stressed out easily.", key: "-" }, // Neuroticism
  { id: 5, text: "Have a rich vocabulary.", key: "+" }, // Openness
  // Add the rest of your 50 questions here...
];

const initialAnswers = Array(questions.length).fill(null);

const Question = ({ question, onAnswer }) => (
  <div className="flex flex-col items-center">
    <p className="text-lg text-gray-700 mb-8">{question.text}</p>
    <div className="flex flex-wrap justify-center space-x-2">
      {["Very Inaccurate", "Moderately Inaccurate", "Neither Inaccurate nor Accurate", "Moderately Accurate", "Very Accurate"].map((label, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index + 1)}
          className="bg-blue-500 text-white px-4 py-2 m-1 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-300 h-2 mx-4 rounded-full">
    <motion.div
      className="bg-blue-500 h-2 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

export default function TestAndResults() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      setIsTestCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(((currentQuestion - 1) / questions.length) * 100);
    }
  };

  const calculateResults = () => {
    const traitScores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    // Scoring logic based on the question key
    answers.forEach((answer, index) => {
      const question = questions[index];
      const score = question.key === "+" ? answer : 6 - answer; // Reverse scoring for negative keyed questions

      switch (index + 1) {
        case 1: // Extraversion
          traitScores.extraversion += score;
          break;
        case 2: // Agreeableness
          traitScores.agreeableness += score;
          break;
        case 3: // Conscientiousness
          traitScores.conscientiousness += score;
          break;
        case 4: // Neuroticism
          traitScores.neuroticism += score;
          break;
        case 5: // Openness
          traitScores.openness += score;
          break;
        // Add additional cases here for the rest of the questions
        default:
          break;
      }
    });

    // Normalize scores to percentage
    const maxScore = 5 * (questions.length / 5); // Assuming equal distribution of questions per trait
    return {
      openness: Math.round((traitScores.openness / maxScore) * 100),
      conscientiousness: Math.round((traitScores.conscientiousness / maxScore) * 100),
      extraversion: Math.round((traitScores.extraversion / maxScore) * 100),
      agreeableness: Math.round((traitScores.agreeableness / maxScore) * 100),
      neuroticism: Math.round((traitScores.neuroticism / maxScore) * 100),
    };
  };

  const results = calculateResults();

  const data = {
    labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
    datasets: [
      {
        label: "Your Big Five Traits",
        data: [
          results.openness,
          results.conscientiousness,
          results.extraversion,
          results.agreeableness,
          results.neuroticism,
        ],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(255, 159, 64, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderWidth: 1,
      },
    ],
  };

  const personalityDescription = {
    openness: "You have a rich imagination and enjoy exploring new ideas.",
    conscientiousness: "You are organized and dependable, often planning ahead.",
    extraversion: "You are outgoing and enjoy socializing with others.",
    agreeableness: "You are compassionate and empathetic, often considering others' needs.",
    neuroticism: "You tend to experience emotions intensely, but this also means you are highly self-aware.",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {!isTestCompleted ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <Question question={questions[currentQuestion]} onAnswer={handleAnswer} />
          <div className="flex justify-between items-center w-full mt-6">
            {currentQuestion > 0 && (
              <button onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all">
                Previous
              </button>
            )}
            <ProgressBar progress={progress} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Your Personality Traits</h1>
          <p className="text-lg text-gray-600 mb-8">Here is your breakdown of the Big Five traits:</p>
          <Bar data={data} options={{ responsive: true }} />
          <ul className="text-lg text-gray-700 mt-8">
            <li>Openness: {results.openness}% - {personalityDescription.openness}</li>
            <li>Conscientiousness: {results.conscientiousness}% - {personalityDescription.conscientiousness}</li>
            <li>Extraversion: {results.extraversion}% - {personalityDescription.extraversion}</li>
            <li>Agreeableness: {results.agreeableness}% - {personalityDescription.agreeableness}</li>
            <li>Neuroticism: {results.neuroticism}% - {personalityDescription.neuroticism}</li>
          </ul>
          <button onClick={() => window.location.reload()} className="bg-blue-500 text-white px-4 py-2 mt-8 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}