<template lang="pug"> 
.cvContacts
  h3.cvContacts__title CONTACT ME
  .cvContacts__container
    form.cvContacts__form
      p.cvContacts__wrapper
        input.cvContacts__input(type='text'  id='name' placeholder='First Name')
        input.cvContacts__input(type='email'  id='email' placeholder='Email')
      p.cvContacts__wrapper
        input.cvContacts__input(type='text'  id='phone' placeholder='Phone')
      p.cvContacts__wrapper
        textarea.cvContacts__addText( id='message' placeholder='Tell Me Something...' )
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
import { ref } from 'vue';
import phone from '@/assets/img/phone.png';
import mail from '@/assets/img/mail.png';
import telegram from '@/assets/img/telegram.png';
import linkedin from '@/assets/img/linkedin.png';
import github from '@/assets/img/gitHub.png';
import facebook from '@/assets/img/facebook.png';
export default {
  name: 'CvInfo',
  setup() {
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
        img: telegram,
        href: 'https://t.me/harutyun_a',
        title: 'Send message',
        alt: 'telegram',
      },
      {
        id: 4,
        img: linkedin,
        href: 'https://www.linkedin.com/in/harut-amirkhanyan/',
        title: 'Linkedin page',
        alt: 'linkedin',
      },
      {
        id: 5,
        img: github,
        href: 'https://github.com/harutamirkhanyan',
        title: 'GitHub page',
        alt: 'github',
      },
      {
        id: 5,
        img: facebook,
        href: 'https://www.facebook.com/amirkhanyan.harut',
        title: 'Facebook page',
        alt: 'facebook',
      },
    ]);
    return {
      contacts,
      phone,
      mail,
      telegram,
      linkedin,
      github,
      facebook,
    };
  },
};
</script>

<style src="./_cvContacts.scss" lang="scss"></style>
