export interface ContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactMessageResponse {
    data: {
        message: string
    }
}