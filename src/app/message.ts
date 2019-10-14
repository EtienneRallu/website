export class Message {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public subject: string,
        public content: string
    ) { }
}
