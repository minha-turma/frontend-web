import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';

export class Subject extends Entity {

    id: number;
    name: String;

    constructor(data?) {
        super(data);
        this.name = getStringProperty('name', data);
    }

    validate(): boolean {
        return this.name.length > 3;
    }
}
