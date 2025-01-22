// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class TodoItem
{   
    id: string;
    name: string;
    description: string;
    // Duration: number;
    // StartDate: Date;
    // SetReminder: boolean;
    constructor(id: string, name: string, description: string
        
        // Duration: number, 
        // StartDate: Date, 
        // SetReminder: boolean
    )
    {
        this.id = id;
        this.name = name;
        this.description = description;
        // this.Duration = Duration;
        // this.StartDate = StartDate;
        // this.SetReminder = SetReminder;
    }
}