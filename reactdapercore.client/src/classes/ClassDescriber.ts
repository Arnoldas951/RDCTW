export default class Describer
{
    static describe(typeOfClass:any): Array<string>
    {
        let classType = new typeOfClass();
        return Object.getOwnPropertyNames(classType);
    }
}