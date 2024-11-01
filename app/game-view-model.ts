import { Observable } from '@nativescript/core';
import { CATEGORIES, LETTERS, Category } from './models/game.model';

export class GameViewModel extends Observable {
    private _currentLetter: string;
    private _categories: Category[];
    private _answers: { [key: string]: string };
    private _score: string;
    private _isSubmitted: boolean;

    constructor() {
        super();

        this._categories = CATEGORIES;
        this._answers = {};
        this._isSubmitted = false;
        this.initializeRound();
    }

    get currentLetter(): string {
        return this._currentLetter;
    }

    get categories(): Category[] {
        return this._categories;
    }

    get answers(): { [key: string]: string } {
        return this._answers;
    }

    get score(): string {
        return this._score;
    }

    get isSubmitted(): boolean {
        return this._isSubmitted;
    }

    private initializeRound() {
        this._currentLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        this._answers = {};
        this._categories.forEach(category => {
            this._answers[category.id] = '';
        });
        this._isSubmitted = false;
        this._score = '';

        this.notifyPropertyChange('currentLetter', this._currentLetter);
        this.notifyPropertyChange('answers', this._answers);
        this.notifyPropertyChange('isSubmitted', this._isSubmitted);
        this.notifyPropertyChange('score', this._score);
    }

    onSubmit() {
        let points = 0;
        this._categories.forEach(category => {
            const answer = this._answers[category.id].trim().toUpperCase();
            if (answer && answer.startsWith(this._currentLetter)) {
                points += 10;
            }
        });

        this._score = `Score: ${points} points`;
        this._isSubmitted = true;

        this.notifyPropertyChange('score', this._score);
        this.notifyPropertyChange('isSubmitted', this._isSubmitted);
    }

    onNextRound() {
        this.initializeRound();
    }
}