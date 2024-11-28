// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class TodoItem
{   
    Id: string;
    Title: string;
    Duration: number;
    StartDate: Date;
    SetReminder: boolean;
    constructor(Id: string, Title: string, Duration: number, StartDate: Date, SetReminder: boolean)
    {
        this.Id = Id;
        this.Title = Title;
        this.Duration = Duration;
        this.StartDate = StartDate;
        this.SetReminder = SetReminder;
    }
}