import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';
import { Subject } from '../subjects/subject';

export class Quizz extends Entity {

    id: number;
    statement: String;
    subject: Subject;
    topic: string;
    alternatives: String[];
    correct: number;
    isOpen: boolean;

    constructor(data?) {
        super(data);
        this.statement = getStringProperty('statement', data);
        this.alternatives = data['alternatives'];
        this.correct = data.correct;
        this.isOpen = data ? data.isOpen : false;
        this.subject = data ? data.subject : undefined;
        this.topic = data ? data.topic : undefined;

    }

    validate(): boolean {
        return this.statement.length > 0 && this.correct >= 0 && this.alternatives.length > 0 && this.subject !== undefined;
    }
}
