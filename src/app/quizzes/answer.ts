import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';
import { Quizz } from './quizz';
import { User } from '../users/user';

export class Answer extends Entity {

    id: number;
    quiz: Quizz;
    student: User;
    choice: number;

    constructor(data?) {
        super(data);
        this.quiz = data ? data.quiz : undefined;
        this.student = data ? data.student : undefined;
        this.choice = data ? data.choice : -1;
    }

    validate(): boolean {
        return this.quiz !== undefined && this.student !== undefined;
    }
}
