import { Notice } from "./Notice";


export class NotificationsManager {
    private maxNumber: number = 10;
    private notificationsList: Array<Notice> = [];

    public constructor(maxNumber: number) {
        this.maxNumber = maxNumber;
    }

    /**
     * AddNewNotice add a new notification to the list with event the specified string
     * If the number of notification exeeds the max number the oldest one is popped
     * @param event the string to store describing the event
     */
    public AddNewNotice(event: string) {
        let newNotice = new Notice(event);
        this.notificationsList.push(newNotice);
        if (this.notificationsList.length > this.maxNumber) {
            this.notificationsList.shift();
        }
    }

    /**
    * Getter for the full notification list
    */
    get NotificationsList(): Array<Notice> {
        return this.notificationsList;
    }
    /**
    * Getter for the number of stored notifications
    */
    get NotificationsNumber(): number {
        return this.notificationsList.length;
    }
}