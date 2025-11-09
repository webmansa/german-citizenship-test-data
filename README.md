# German Citizenship Test Data

A comprehensive dataset of German citizenship test questions (Einbürgerungstest) in TypeScript format.

## Overview

This repository contains the official questions from the German citizenship test (Einbürgerungstest) that applicants for German citizenship must pass. The test assesses knowledge of German law, society, history, and culture.

## Structure

```
data/
├── questions.ts       # TypeScript file containing all test questions
└── assets/
    └── images/        # Supporting images for questions
```

## Data Format

The questions are provided as a TypeScript array with the following interface:

```typescript
interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  imageUrl?: string;
}
```

### Properties

- **id**: Unique identifier for each question
- **question**: The question text in German
- **answers**: Array of 4 possible answers
- **correctAnswer**: Index (0-3) of the correct answer
- **imageUrl**: Optional path to an associated image

## Usage

### Import in TypeScript/JavaScript

```typescript
import { questions, Question } from './data/questions';

// Access all questions
console.log(questions.length); // Total number of questions

// Access a specific question
const firstQuestion = questions[0];
console.log(firstQuestion.question);
console.log(firstQuestion.answers[firstQuestion.correctAnswer]); // Correct answer
```

### Example Question

```typescript
{
  id: 1,
  question: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
  answers: [
    "hier Religionsfreiheit gilt.",
    "die Menschen Steuern zahlen.",
    "die Menschen das Wahlrecht haben.",
    "hier Meinungsfreiheit gilt.",
  ],
  correctAnswer: 3,
}
```

## About the Test

The German citizenship test (Einbürgerungstest) consists of:
- 33 multiple-choice questions
- 4 possible answers per question (only one is correct)
- Questions covering topics such as:
  - German law and constitution
  - Rights and responsibilities
  - German history and culture
  - Democratic principles
  - Social structure

To pass the test, applicants must answer at least 17 out of 33 questions correctly.

## Contributing

Contributions are welcome! Please ensure that:
- Questions are accurate and sourced from official materials
- The data format is maintained
- All text is in German (as per the official test)

## License

This data is compiled from publicly available official German citizenship test materials.

## Resources

- [Official BAMF Information (Bundesamt für Migration und Flüchtlinge)](https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/Einbuergerungstest/einbuergerungstest-node.html)

## Please support me if you enjoy using this data

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-orange?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/webmansa)


## Disclaimer

This repository is for educational and informational purposes. Always refer to official sources for the most current test materials and requirements.
