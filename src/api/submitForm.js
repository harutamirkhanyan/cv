import emailjs from '@emailjs/browser';

const sendEmail = (form) => {
  return emailjs.send(
    'service_ydp2imy',
    'template_m7qyhgt',
    form,
    'EqfAb7ONTlBib2ewP'
  );
};

export default {
  sendEmail,
};