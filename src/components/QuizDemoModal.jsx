import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, RotateCcw, Terminal } from 'lucide-react';
import { SAMPLE_QUIZ_QUESTIONS } from '../data/portfolioData';

export default function QuizDemoModal({ isOpen, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = SAMPLE_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < SAMPLE_QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl p-6 relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-zinc-400" />
            <h3 className="text-sm font-semibold text-white">
              Python Quiz Game — Live Demo
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Body */}
        {!quizFinished ? (
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2.5">
              <span>Question {currentIdx + 1} of {SAMPLE_QUIZ_QUESTIONS.length}</span>
              <span>Score: {score}</span>
            </div>

            {/* Question Text */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 mb-4">
              <p className="text-sm font-medium text-zinc-100">
                {currentQ.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2 mb-5">
              {currentQ.options.map((opt, optIdx) => {
                let btnStyle = "bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700";

                if (isAnswered) {
                  if (optIdx === currentQ.correct) {
                    btnStyle = "bg-emerald-950/80 border-emerald-700 text-emerald-300";
                  } else if (optIdx === selectedOption) {
                    btnStyle = "bg-rose-950/80 border-rose-700 text-rose-300";
                  } else {
                    btnStyle = "bg-zinc-950 border-zinc-900 text-zinc-600 opacity-60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered}
                    className={`w-full p-3 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && optIdx === currentQ.correct && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    {isAnswered && optIdx === selectedOption && optIdx !== currentQ.correct && (
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when answered */}
            {isAnswered && (
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 mb-4">
                <span className="font-semibold text-zinc-100">Explanation: </span>
                {currentQ.explanation}
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
              >
                {currentIdx + 1 < SAMPLE_QUIZ_QUESTIONS.length ? 'Next Question' : 'View Results'}
              </button>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center py-6">
            <h4 className="text-lg font-bold text-white mb-2">Quiz Completed</h4>
            <p className="text-sm text-zinc-400 mb-6">
              You scored <span className="text-white font-bold">{score}</span> out of{' '}
              <span className="text-white font-bold">{SAMPLE_QUIZ_QUESTIONS.length}</span>.
            </p>
            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
