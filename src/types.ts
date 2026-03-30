export type QuestionType = 'multiple-choice' | 'short-answer' | 'true-false' | 'fill-in-the-blank';

export interface Question {
  id: number;
  type: QuestionType;
  level: 1 | 2 | 3 | 4; // 1: Dễ, 2: Trung bình, 3: Khó, 4: Rất khó
  content: string;
  options?: string[]; // For multiple-choice
  answer: string | boolean;
  explanation: string;
  hint?: string;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  lives: number;
  status: 'start' | 'playing' | 'feedback' | 'finished';
  lastAnswerCorrect: boolean | null;
}
