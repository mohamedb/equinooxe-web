export class SimpleDeleteViewModel {
    /**
     * Delete a list of records
     */
    public ids: Array<number> = [];

    /**
     * We can simply choose to marke a record as "deleted" not completely removed
     */
    public hard: boolean = false;
}
