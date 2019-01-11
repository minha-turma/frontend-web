import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';
import { User } from '../users/user';

export class SchoolClass extends Entity {

    id: number;
    name: string;
    users: User[];

    constructor(data?) {
        super(data);
        this.name = getStringProperty('name', data);
        this.users = data.users ? data.users : undefined;
    }

    validate(): boolean {
        return this.name.length > 0;
    }
}
