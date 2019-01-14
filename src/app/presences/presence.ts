import { User } from '../users/user';
import { Lecture } from '../lectures/lecture';
import { Entity } from '../commons/model/Entity';

export class Presence extends Entity {

    id: number;
    student: User;
    lecture: Lecture;

    constructor(data?) {
        super(data);
        this.student = data ? data.student : undefined;
        this.lecture = data ? data.lecture : undefined;
    }

    validate(): boolean {
        return this.student !== undefined && this.lecture !== undefined;
    }
}
