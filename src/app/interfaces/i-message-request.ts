export interface IMessage {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    message: string;
}
export interface IMessageRequest extends IMessage {
}
