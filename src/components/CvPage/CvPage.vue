<template lang="pug">
.cvPage
  CvHeader
  CvAbout
  CvSkills
  CvSlider
  CvContacts
  .cvPage__content
</template>

<script lang="js">
import CvHeader from '@/components/CvHeader/CvHeader.vue';
import CvNavbar from '@/components/CvNavbar/CvNavbar.vue';
import CvAbout from '@/components/CvAbout/CvAbout.vue';
import CvSkills from '@/components/CvSkills/CvSkills.vue'
import CvSlider from '@/components/CvSlider/CvSlider.vue'
import CvContacts from '@/components/CvContacts/CvContacts.vue'

export default {
  name: 'CvPage',
  components: { CvNavbar, CvAbout, CvSkills,CvSlider, CvHeader, CvContacts },
};
</script>

<style src="./_cvPage.scss" lang="scss"></style>
