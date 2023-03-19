<template lang="pug">
navbar.cvNavbar
  .cvNavbar__imgWrapper
      img.cvNavbar__img(:src='logo'  loading='lazy' alt='logo')
  h2.cvNavbar__title {{aboutTitle}}
  p.cvNavbar__text {{aboutText}}
  h2.cvNavbar__title {{expTitle}}
  p.cvNavbar__text {{expText}}
  h2.cvNavbar__title {{contactsTitle}}
  .cvNavbar__contacts
    a.cvNavbar__contactsWrapper(v-for="item in contacts" :key="item.id" :title='item.title' :href='item.href' target='_blank') 
      img.cvNavbar__img(:src='item.img'  loading='lazy' :alt='item.alt')
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/img/Harut.jpg'
import phone from '@/assets/img/phone.png';
import mail from '@/assets/img/mail.png';
import telegram from '@/assets/img/telegram.png';
import linkedin from '@/assets/img/linkedin.png';
import github from '@/assets/img/gitHub.png';

export default {
  name: 'CvNavbar',
  setup() {
    const contacts = ref([
      {
        id: 1,
        img: phone,
        href: 'tel:+37477166744',
        title: '+374 77 166 744',
        alt: 'phone',
      },
      {
        id: 2,
        img: mail,
        href: 'mailto:har.amirkhanyan@gmail.com',
        title: 'har.amirkhanyan@gmail.com',
        alt: 'mail',
      },
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
    ]);

    const aboutTitle =ref(' About Me ')
    const aboutText =ref(' Front-End Developer with 1+ year  of experience . Skilled in  creating Websites, implementing new functionalities to add  widgets and templates via Vue.js. Team player with an eye for details. ')
    const expTitle=ref('Expectations')
    const expText=ref('I express my interest to work for a company with a pleasant atmosphere. In my long-lasting working path I am eager to use my skills for a company and other hand enrich my knowledge from the company experience. I am ready to gain a foothold in the direction of Front-End (Vue) development to expand in it to an expert level.')
    const contactsTitle=ref('Contacts')

    return {
      contacts,
      logo,
      phone,
      mail,
      telegram,
      linkedin,
      github,
      aboutTitle,
      aboutText,
      expTitle,
      expText,
      contactsTitle
    };
  },
};
</script>

<style src="./_cvNavbar.scss" lang="scss"></style>
