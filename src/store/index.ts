import Vuex from "vuex";
import FormModule from "@/store/modules/FormModule";
import ContactListModule from "@/store/modules/ContactListModule";

const store =new Vuex.Store({
  modules: {
    FormModule,
    ContactListModule
  },
});

export default store;