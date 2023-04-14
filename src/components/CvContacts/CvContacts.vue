
<template lang="pug">
.cvContacts
  h3.cvContacts__title CONTACT ME
  .cvContacts__container
    form.cvContacts__form(@submit.prevent="onSubmit")
      p.cvContacts__wrapper
        input.cvContacts__input(type='text'  id='name' placeholder='First Name' v-model='name')
        input.cvContacts__input(type='email'  id='email' placeholder='Email' v-model='email')
      p.cvContacts__wrapper
        input.cvContacts__input(type='text'  id='phone' placeholder='Phone' v-model='phone')
      p.cvContacts__wrapper
        textarea.cvContacts__addText( id='message' placeholder='Tell Me Something...'  v-model='message')
      button.cvContacts__submit(type='submit') SEND MESSAGE
    .cvContacts__contacts
      .cvContacts__name Harutyun Amirkhanyan
      span.cvContacts__proff Front-End Developer
      .cvContacts__block
        span.cvContacts__desc Tel:
        span.cvContacts__info +374 (77) 166 744
      .cvContacts__block
        span.cvContacts__desc Email:
        span.cvContacts__info har.amirkhanyan@gmail.com
      .cvContacts__contactsBlock
        a.cvContacts__contactsWrapper(v-for="item in contacts" :key="item.id" :title='item.title' :href='item.href' target='_blank') 
          img.cvContacts__img(:src='item.img'  loading='lazy' :alt='item.alt')
</template>

<script>
import { ref, computed } from 'vue';
import phoneLogo from '@/assets/img/phone.png';
import mailLogo from '@/assets/img/mail.png';
import telegramLogo from '@/assets/img/telegram.png';
import linkedinLogo from '@/assets/img/linkedin.png';
import githubLogo from '@/assets/img/gitHub.png';
import facebookLogo from '@/assets/img/facebook.png';

import { useSubmitForm } from '@/store/modules/submitForm';


export default {
  name: 'CvInfo',
  setup() {
    const {
      state,
      updateName,
      updateEmail,
      updatePhone,
      updateMessage,
      sendEmail,
    } = useSubmitForm();

    const contacts = ref([
           // {
      //   id: 1,
      //   img: phone,
      //   href: 'tel:+37477166744',
      //   title: '+374 77 166 744',
      //   alt: 'phone',
      // },
      // {
      //   id: 2,
      //   img: mail,
      //   href: 'mailto:har.amirkhanyan@gmail.com',
      //   title: 'har.amirkhanyan@gmail.com',
      //   alt: 'mail',
      // },
      {
        id: 3,
        img: telegramLogo,
        href: 'https://t.me/harutyun_a',
        title: 'Send message',
        alt: 'telegram',
      },
      {
        id: 4,
        img: linkedinLogo,
        href: 'https://www.linkedin.com/in/harut-amirkhanyan/',
        title: 'Linkedin page',
        alt: 'linkedin',
      },
      {
        id: 5,
        img: githubLogo,
        href: 'https://github.com/harutamirkhanyan',
        title: 'GitHub page',
        alt: 'github',
      },
      {
        id: 5,
        img: facebookLogo,
        href: 'https://www.facebook.com/amirkhanyan.harut',
        title: 'Facebook page',
        alt: 'facebook',
      },
    ]);

    const name = computed({
      get: () => state.name,
      set: (value) => updateName(value),
    });

    const email = computed({
      get: () => state.email,
      set: (value) => updateEmail(value),
    });

    const phone = computed({
      get: () => state.phone,
      set: (value) => updatePhone(value),
    });

    const message = computed({
      get: () => state.message,
      set: (value) => updateMessage(value),
    });

    const onSubmit = async () => {
      await sendEmail({
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      });
      
      // Очистить поля формы после отправки
      updateName('');
      updateEmail('');
      updatePhone('');
      updateMessage('');
    };

    return {
      contacts,
      phoneLogo,
      mailLogo,
      telegramLogo,
      linkedinLogo,
      githubLogo,
      facebookLogo,
      name,
      email,
      phone,
      message,
      onSubmit,
    };
  },
};
</script>
<style src="./_cvContacts.scss" lang="scss"></style>
