<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <h2>Contact Us</h2>
      <div class="form-group">
        <label for="name">Name*</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email*</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" v-model="form.phone">
      </div>
      <div class="form-group">
        <label for="message">Message*</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button  type="submit" class="form-submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { Actions } from '@/store/enums/storeEnums';
import {ref,computed} from 'vue';

const store = useStore();

const form = ref({
  name: '',
  email:'',
  phone:'',
  message:'',
})


const validName = computed(()=>{
  return /^[a-zA-Z ]{2,30}$/.test(form.value.name);
})
const validPhone = computed(()=>{
  return /^\d{10}$/.test(form.value.phone);

})
const validEmail = computed(()=>{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email);


})
const validMessage = computed(()=>{
  return form.value.message.length > 0;

})
const formIsValid = computed(()=>{
return (
  validName.value &&
      validEmail.value &&
      validPhone.value &&
      validMessage.value
)
})
const onSubmit = (()=>{
  if (!formIsValid.value) {
    alert('please fill all field')
  }
  else {
    store.dispatch(Actions.ADD_NEW_CONTACT,form.value);
    store.dispatch(Actions.DELETE_CUSTOM_CONTACT)

  }
})

</script>

<style scoped>
/* Form wrapper */
.form-wrapper {
  display: flex;
  justify-content: center;
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 30px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #f5f5f5;
}

/* Form title */
.form h2 {
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #333;
}

/* Form group */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Form label */
.form-group label {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

/* Form input field */
.form-group input,
.form-group textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
}

/* Form input field focus */
.form-group input:focus,
.form-group textarea:focus {
  border-color: #0085ff;
}

/* Form error message */
.form-error {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

/* Form submit button */
.form-submit {
  background-color: #0085ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
}

/* Form submit button hover */
.form-submit:hover {
  background-color: #0072d6;
}
</style>
