import { User } from '../users/user';
import { Lecture } from '../lectures/lecture';
import { Entity } from '../commons/model/Entity';
import { SchoolClass } from '../classes/school-class';

export class Message extends Entity {

    id: number;
    subject: String;
    content: String;
    owner: User;
    schoolClass: SchoolClass;

    constructor(data?) {
        super(data);
        this.subject = data ? data.subject : undefined;
        this.content = data ? data.content : undefined;
        this.owner = data ? data.owner : undefined;
        this.schoolClass = data ? data.schoolClass : undefined;
    }

    validate(): boolean {
        return this.subject !== undefined && this.content !== undefined;
    }
}
