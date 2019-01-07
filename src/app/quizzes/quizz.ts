import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';

export class Quizz extends Entity {

    id: number;
    statement: String;
    alternatives: String[];
    correct: number;

    constructor(data?) {
        super(data);
        this.statement = getStringProperty('statement', data);
        this.alternatives = data['alternatives'];
        this.correct = data.correct;
    }

    validate(): boolean {
        return this.statement.length > 0 && this.correct >= 0 && this.alternatives.length > 0;
    }
}
