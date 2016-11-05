/**
 * A base class for all model
 * with a basic id generators because sometimes we need
 * a kind of unique 'id' to do manipulation on models 
 * before they get a 'real' id from the datasource 
 * 
 * @export
 * @abstract
 * @class BaseModel
 */
export abstract class BaseModel {
    public id: number;

    public constructor() {
        this.id = Math.floor(Math.random() * 999) + 1;
    }
}