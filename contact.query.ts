import {Contact} from "../domains/contact.interface";

export default {
    getContacts(): Array<Contact> {
        const contacts = localStorage.getItem('contact') as string
        const parseContacts = JSON.parse(contacts);
        if(this.isContactListEmpty(parseContacts)) {
            return [] ;
        }
        return parseContacts;
    },

    isContactListEmpty(isContactList: number): boolean {
        if (isContactList){
            return false
        }
        return true;
    }
}