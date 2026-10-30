import React, { useState } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl bg-white border border-[#e7e3da] shadow-2xl p-6 relative">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#e7e3da]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#9e472a]" />
            <h3 className="text-sm font-semibold text-stone-900 font-sans">
              Python Quiz Game — Interactive Demo
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Body */}
        {!quizFinished ? (
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-2.5">
              <span>Question {currentIdx + 1} of {SAMPLE_QUIZ_QUESTIONS.length}</span>
              <span>Score: {score}</span>
            </div>

            {/* Question Text */}
            <div className="p-4 rounded-lg bg-[#faf8f5] border border-[#eeebe3] mb-4">
              <p className="text-sm font-medium text-stone-900 font-serif">
                {currentQ.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2 mb-5">
              {currentQ.options.map((opt, optIdx) => {
                let btnStyle = "bg-white border-[#eeebe3] text-stone-700 hover:border-stone-400";

                if (isAnswered) {
                  if (optIdx === currentQ.correct) {
                    btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold";
                  } else if (optIdx === selectedOption) {
                    btnStyle = "bg-rose-50 border-rose-300 text-rose-900";
                  } else {
                    btnStyle = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered}
                    className={`w-full p-3 rounded-lg border text-left text-xs sm:text-sm font-sans transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && optIdx === currentQ.correct && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                    {isAnswered && optIdx === selectedOption && optIdx !== currentQ.correct && (
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when answered */}
            {isAnswered && (
              <div className="p-3 rounded-lg bg-[#faf8f5] border border-[#eeebe3] text-xs text-stone-700 mb-4 font-sans">
                <span className="font-semibold text-stone-900">Explanation: </span>
                {currentQ.explanation}
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors"
              >
                {currentIdx + 1 < SAMPLE_QUIZ_QUESTIONS.length ? 'Next Question' : 'View Results'}
              </button>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center py-6">
            <h4 className="font-serif text-xl text-stone-900 mb-2">Quiz Completed</h4>
            <p className="text-sm text-stone-600 mb-6 font-sans">
              You scored <span className="text-stone-900 font-bold">{score}</span> out of{' '}
              <span className="text-stone-900 font-bold">{SAMPLE_QUIZ_QUESTIONS.length}</span>.
            </p>
            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium border border-stone-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium"
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
