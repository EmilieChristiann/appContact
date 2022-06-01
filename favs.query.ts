import {Contact} from "../domains/contact.interface";

export default {
    addFavs(): Array<Contact> {
        const contacts = localStorage.getItem('fav') as string
        const parseContacts = JSON.parse(contacts);
        if(this.isFavsListEmpty(parseContacts)) {
            return [] ;
        }
        return parseContacts;
    },

    isFavsListEmpty(isContactList: number): boolean {
        if (isContactList){
            return false
        }
        return true;
    }
}