// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class TodoItem
{
    Title: string;
    Duration: number;
    StartDate: Date;
    SetReminder: boolean;
    constructor(Title: string, Duration: number, StartDate: Date, SetReminder: boolean)
    {
        this.Title = Title;
        this.Duration = Duration;
        this.StartDate = StartDate;
        this.SetReminder = SetReminder;
    }
}