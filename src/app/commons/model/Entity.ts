export abstract class Entity {
    id?: number;

    constructor(data?: any) {
        this.id = data ? data.id : undefined;
    }

    equalsTo(e: Entity) {
        return e && this.id === e.id;
    }

    abstract validate(): boolean;
}
