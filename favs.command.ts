import { Contact } from '../domains/contact.interface';
import contactQuery from '@/query/contact.query';
import favQuery from '@/query/favs.query';
export default {
    addFavs(index: number): void {
        try {
            const contacts: Array<Contact> = contactQuery.getContacts();
            const favs: Array<Contact> = favQuery.addFavs();
            const contact = contacts[index];
            favs.push(contact);
            localStorage.setItem('fav', JSON.stringify(favs))
        }
        catch (e) {
            throw new TypeError('An error happened during the save of the favorite');
        }

    },
    deleteFav(index: number): void {
        try {
            const favs: Array<Contact> = favQuery.addFavs();
            favs.splice(index, 1);
            localStorage.setItem('fav', JSON.stringify(favs))
        }
        catch (e) {
            throw new TypeError('An error happened during the save of the contact');
        }
    }
}
