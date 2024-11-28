export default class Describer {
    static describe(typeOfClass: any): Array<string> {
        let classType = new typeOfClass();
        return Object.getOwnPropertyNames(classType);
    }

    static rowType(row: any): any {
        let typeOf;
        if (typeof row.getMonth == 'function')
            typeOf = Date;
        else
        typeOf = typeof row;

        switch (typeOf) {
            case Date: {
                console.log(row);
                return new Date(row).toLocaleDateString('lt-LT');
                break;
            }
            default: {
                return row;
            }
        }
    }
}