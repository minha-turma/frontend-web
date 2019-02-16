import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';
import { Subject } from '../subjects/subject';
import { SchoolClass } from '../classes/school-class';

export class Lecture extends Entity {

    id: number;
    date: Date;
    subject: Subject;
    topic: string;
    schoolClass: SchoolClass;
    isOpen: boolean;

    constructor(data?) {
        super(data);
        this.date = data ? data.date : undefined;
        this.subject = data ? data.subject : undefined;
        this.schoolClass = data ? data.schoolClass : undefined;
        this.isOpen = data ? data.isOpen : false;
        this.topic = data ? data.topic : undefined;
    }

    validate(): boolean {
        return this.date !== undefined && this.subject !== undefined && this.schoolClass !== undefined;
    }
}
