import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';
import { SchoolClass } from '../classes/school-class';

export class User extends Entity {

    id: number;
    name: String;
    username: String;
    password: String;
    schoolClass: SchoolClass;

    constructor(data?) {
        super(data);
        this.name = getStringProperty('name', data);
        this.username = getStringProperty('username', data);
        this.password = getStringProperty('password', data);
        this.schoolClass = data['schoolClass'];
    }

    validate(): boolean {
        return this.name.length > 0 && this.username.length >= 0 && this.password.length > 0;
    }
}
