/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Heart, 
  Timer, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Play, 
  RotateCcw,
  Star,
  MapPin,
  Car
} from 'lucide-react';
import { questions } from './questions';
import { Question, GameState } from './types';

const SOUNDS = {
  correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  wrong: 'https://assets.mixkit.co/active_storage/sfx/2959/2959-preview.mp3',
  finish: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    lives: 3,
    status: 'start',
    lastAnswerCorrect: null,
  });

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (type: keyof typeof SOUNDS) => {
    if (audioRef.current) {
      audioRef.current.src = SOUNDS[type];
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    }
  };

  const currentQuestion = questions[gameState.currentQuestionIndex];

  const startGame = () => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      lives: 3,
      status: 'playing',
      lastAnswerCorrect: null,
    });
    setUserAnswer('');
    setFeedback(null);
  };

  const handleAnswer = (answer: string | boolean) => {
    if (gameState.status !== 'playing') return;

    const isCorrect = String(answer).toLowerCase().trim() === String(currentQuestion.answer).toLowerCase().trim();
    
    if (isCorrect) {
      playSound('correct');
      setGameState(prev => ({ ...prev, score: prev.score + (currentQuestion.level * 10) }));
    } else {
      playSound('wrong');
      setGameState(prev => ({ ...prev, lives: Math.max(0, prev.lives - 1) }));
    }

    setFeedback({
      isCorrect,
      message: isCorrect ? 'Chính xác! Bạn giỏi quá!' : 'Tiếc quá, sai rồi!'
    });
    setGameState(prev => ({ ...prev, status: 'feedback', lastAnswerCorrect: isCorrect }));
  };

  const nextQuestion = () => {
    if (gameState.lives <= 0 || gameState.currentQuestionIndex >= questions.length - 1) {
      setGameState(prev => ({ ...prev, status: 'finished' }));
      playSound('finish');
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        status: 'playing',
        lastAnswerCorrect: null
      }));
      setUserAnswer('');
      setFeedback(null);
    }
  };

  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {currentQuestion.options?.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option)}
                className="p-4 text-left rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-lg font-medium"
              >
                <span className="inline-block w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-center leading-8 mr-3 font-bold">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </motion.button>
            ))}
          </div>
        );
      case 'true-false':
        return (
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(true)}
              className="flex-1 p-6 rounded-xl bg-green-100 text-green-700 border-2 border-green-200 hover:bg-green-200 font-bold text-xl flex items-center justify-center gap-2"
            >
              <CheckCircle2 /> ĐÚNG
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(false)}
              className="flex-1 p-6 rounded-xl bg-red-100 text-red-700 border-2 border-red-200 hover:bg-red-200 font-bold text-xl flex items-center justify-center gap-2"
            >
              <XCircle /> SAI
            </motion.button>
          </div>
        );
      case 'short-answer':
      case 'fill-in-the-blank':
        return (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnswer(userAnswer)}
              placeholder="Nhập câu trả lời của bạn..."
              className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(userAnswer)}
              className="w-full p-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Gửi câu trả lời
            </motion.button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-slate-800 font-sans selection:bg-blue-100">
      <audio ref={audioRef} />
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">HÀNH TRÌNH CHUYỂN ĐỘNG ĐỀU</h1>
          </div>
          
          {gameState.status !== 'start' && (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <Trophy className="text-amber-500" size={20} />
                <span className="font-bold text-lg">{gameState.score}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    size={20} 
                    className={i < gameState.lives ? "text-red-500 fill-red-500" : "text-slate-300"} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <AnimatePresence mode="wait">
          {gameState.status === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12 space-y-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <img 
                    src="https://picsum.photos/seed/travel/800/400" 
                    alt="Hero" 
                    className="rounded-3xl shadow-2xl border-8 border-white w-full max-w-2xl mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-amber-400 p-4 rounded-2xl shadow-lg rotate-12 hidden md:block">
                  <Star className="text-white fill-white" size={32} />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Sẵn sàng cho <br />
                  <span className="text-blue-600">Hành trình Chuyển động?</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-lg mx-auto">
                  Chinh phục 30 thử thách về Vận tốc, Quãng đường và Thời gian để trở thành nhà thông thái toán học!
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startGame}
                className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-3 mx-auto"
              >
                <Play fill="currentColor" /> BẮT ĐẦU NGAY
              </motion.button>
            </motion.div>
          )}

          {(gameState.status === 'playing' || gameState.status === 'feedback') && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wider">
                  <span>Câu hỏi {gameState.currentQuestionIndex + 1} / {questions.length}</span>
                  <span>Mức độ {currentQuestion.level}</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((gameState.currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                    <MapPin size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                      {currentQuestion.content}
                    </h3>
                  </div>
                </div>

                {gameState.status === 'playing' ? (
                  renderQuestionInput()
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 p-6 rounded-2xl border-2 ${
                      feedback?.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {feedback?.isCorrect ? (
                        <CheckCircle2 className="text-green-600" />
                      ) : (
                        <XCircle className="text-red-600" />
                      )}
                      <span className={`text-xl font-bold ${feedback?.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {feedback?.message}
                      </span>
                    </div>
                    <p className="text-slate-700 text-lg mb-6">
                      {currentQuestion.explanation}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={nextQuestion}
                      className="flex items-center gap-2 text-blue-600 font-bold text-lg group"
                    >
                      Tiếp tục hành trình <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {gameState.status === 'finished' && (
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-8 bg-white rounded-3xl shadow-2xl p-10 border border-slate-100"
            >
              <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-amber-500" size={64} />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-4xl font-black text-slate-900">HOÀN THÀNH HÀNH TRÌNH!</h2>
                <p className="text-slate-500 text-xl">Bạn đã về đích an toàn và xuất sắc.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="text-slate-400 text-sm font-bold uppercase">Tổng điểm</div>
                  <div className="text-3xl font-black text-blue-600">{gameState.score}</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="text-slate-400 text-sm font-bold uppercase">Đúng</div>
                  <div className="text-3xl font-black text-green-600">
                    {Math.round((gameState.score / (questions.length * 40)) * questions.length)} / {questions.length}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startGame}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
                >
                  <RotateCcw size={20} /> CHƠI LẠI
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-100 text-slate-600 px-8 py-4 rounded-xl font-bold text-lg"
                >
                  CHIA SẺ KẾT QUẢ
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      {gameState.status === 'start' && (
        <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-300" />
          <motion.div
            animate={{ x: ['-10%', '110%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="absolute bottom-1"
          >
            <Car size={48} className="text-blue-600" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
