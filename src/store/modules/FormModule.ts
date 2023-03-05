import { createStore } from 'vuex'
import { Actions } from '@/store/enums/storeEnums';
export  interface ContactObject {
    name: string;
    email: string;
    phone: string;
    message: string;
}
interface FormState {
    contacts: Array<ContactObject>;
}
const state: FormState = {
    contacts: [],

};

export default createStore({
    state:state,
    getters: {

    },
    mutations: {
    },
    actions: {
        [Actions.ADD_NEW_CONTACT]:  function ({ commit }, contact) {
            state.contacts.push(contact);

        },
        [Actions.UPDATE_CUSTOM_CONTACT] :function({commit} ,contactId:number) {
            // if (contactId!==-1) {
            //     state.contacts.splice(contactId, 1);
            // }
        },
        [Actions.DELETE_CUSTOM_CONTACT] :function({commit} ,contactId:number) {
            if (contactId!==-1) {
                state.contacts.splice(contactId, 1);
            }
        }

    }

})
