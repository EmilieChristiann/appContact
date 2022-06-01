import contactQuery from "@/query/contact.query";
import {Contact} from "../domains/contact.interface";

export default {
    createContact(contact: Contact): void {
        try {
            const contacts: Array<Contact> = contactQuery.getContacts();
            contacts.push(contact);
            localStorage.setItem('contact', JSON.stringify(contacts))
        }
        catch(e) {
            throw new TypeError(`An error happpened during to save ${e}`);
        }
    },

    deleteContact(index: number): void {
        try {
            const contacts: Array<Contact> = contactQuery.getContacts();
            contacts.splice(index,1);
            localStorage.setItem('contact', JSON.stringify(contacts))
        }    
        catch (e) {
            throw new TypeError(`An error happpened during the save of the contact`);
        }
    }
}