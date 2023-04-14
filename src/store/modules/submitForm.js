import { reactive, readonly } from 'vue';
import api from '@/api/submitForm';

const state = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const updateName = (name) => {
  state.name = name;
};

const updateEmail = (email) => {
  state.email = email;
};

const updatePhone = (phone) => {
  state.phone = phone;
};

const updateMessage = (message) => {
  state.message = message;
};

const sendEmail = async (form) => {
  try {
    const response = await api.sendEmail(form);
    state.name = '';
    state.email = '';
    state.phone = '';
    state.message = '';
    console.log('done');
    return response;
  } catch (error) {
    return error;
  }
};

const useSubmitForm = () => {
  return {
    state: readonly(state),
    updateName,
    updateEmail,
    updatePhone,
    updateMessage,
    sendEmail,
  };
};

export { useSubmitForm };
