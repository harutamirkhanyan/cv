<template lang='pug'>
.cvInfo 
  hr.cvInfo__line
  h2.cvInfo__title Work Experience 
  .cvInfo__infoWrapper
    .cvInfo__info(v-for='item in workPlace' :key='item.id')
      span.cvInfo__date {{item.date}}
      p.cvInfo__companyInfo
        a.cvInfo__companyName(:href='item.url' target='_blank') {{item.companyName}} 
        span.cvInfo__position {{item.position}}
      ul.cvInfo__skils(v-if='item.responsibility')
        li.cvInfo__responsibilityText(v-for='text in item.responsibility' :key='item.id') {{text.desc}}
  hr.cvInfo__line
  h2.cvInfo__title Education Background
  ul.cvInfo__skils
    li.cvInfo__skilItem(v-for='item in study' :key='item.id')
      span.cvInfo__text {{item.text}}
      a.cvInfo__text.cvInfo__text--darkBlue(v-if='item.url' :href='item.url' target='_blank') {{item.name}}
      a.cvInfo__text.cvInfo__text--darkBlue.cvInfo__text--margin(v-if='item.author' v-for='author in item.author' :key='item.id' :href='author.url' target='_blank') {{author.name}}
  hr.cvInfo__line
  ul.cvInfo__skils(v-for='item in skils' :key='item.id')
    h2.cvInfo__title {{item.title}}
    li.cvInfo__skilItem(v-for='item in item.skils' :key='item.id') {{item.skil}}

</template>

<script>
import { ref } from 'vue';
export default {
  name: 'CvInfo',
  setup() {
    const workPlace = ref([
      {
        id: 1,
        date: '2022 – 2023',
        companyName: 'CodeTime',
        position: 'Front-End  Vue.js Developer',
        url: 'https://www.facebook.com/codetimeyerevan/',
        responsibility: [
          {
            id: 1,
            desc: '• Development and Implementation of new modules, templates und widgets',
          },
          {
            id: 2,
            desc: '• Bug fixes/ Optimization',
          },
        ],
      },

      {
        id: 2,
        date: '2019 – 2022',
        companyName: 'INGO ARMENIA Insurance CJSC',
        position: 'Damage Assessment Specialist',
        url: 'https://ingoarmenia.am/?lang=en',
      },
      {
        id: 3,
        date: '2018 – 2019',
        companyName: 'INGO ARMENIA Insurance CJSC',
        position: 'Head of Arabkir Branch',
        url: 'https://ingoarmenia.am/?lang=en',
      },
      {
        id: 4,
        date: '2015 – 2017',
        companyName: 'INGO ARMENIA Insurance CJSC',
        position: 'Sales Manager',
        url: 'https://ingoarmenia.am/?lang=en',
      },
    ]);

    const study = ref([
      {
        id: 1,
        text: '• Bachelor in Insurance ',
        name: '- Armenian National Agrarian  University',
        url: 'https://anau.am/',
      },
      {
        id: 2,
        text: '• Vue.js video courses by ',
        author: [
          {
            id: 'Schwarzmuller',
            name: 'Maximilian Schwarzmuller,',
            url: 'https://pro.academind.com/p/vue-3-the-complete-guide',
          },
          {
            id: 'Minin',
            name: 'Vladilen Minin,',
            url: 'https://www.udemy.com/user/vladilen/',
          },
          {
            id: 'kocherin',
            name: 'Oleksandr Kocherhin',
            url: 'https://www.udemy.com/course/vue-and-vuex-writing-real-project-from-scratch/',
          },
        ],
      },
    ]);

    const skils = ref([
      {
        id: 1,
        title: 'Languages',
        skils: [
          { id: 'hy', skil: '• Armenian' },
          { id: 'ru', skil: '• Russian' },
          { id: 'eng', skil: '• English' },
          { id: 'de', skil: '• German / on going /' },
        ],
      },
      {
        id: 2,
        title: 'Hard Skils',
        skils: [
          {
            id: 'html',
            skil: '• HTML, PUG, CSS, SCSS, Bootstrap, PrimeFaces, yup',
          },
          {
            id: 'JS',
            skil: '• JavsScript/ES6+, VueJs',
          },
          {
            id: 'git',
            skil: '• Git, GitHub, Gulp,  BEM',
          },
        ],
      },
      {
        id: 3,
        title: 'Hard Skils',
        skils: [
          { id: 'Teamwork', skil: '• Teamwork' },
          { id: 'tm', skil: '• Time Management' },
          { id: 'cm', skil: '• Communication' },
          { id: 'ps', skil: '• Problem Solving' },
          { id: 'mt', skil: '• Multitasking, Ability to work in high pressure' },
          { id: 'ag', skil: '• Agile (Clickup, Asana, Jira)' },
        ],
      },
    ]);

    return {
      workPlace,
      study,
      skils,
    };
  },
};
</script>

<style src='./_cvInfo.scss' lang='scss'></style>
