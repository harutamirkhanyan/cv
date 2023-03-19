<template lang="pug">
.cvSlider
  h2.cvSlider__title My portfolio
  Carousel.cvSlider__carousel(:items-to-show="1" :wrap-around="true" :touchDrag="false"  ref="myCarousel")
    Slide.cvSlider__slide(v-for="item in slideInfo" :key="item.id")
      h3.cvSlider__slide {{item.title}}
      a.cvSlider__imgWrapper(:href='item.url' target='_blank')
        img.cvSlider__img(:src='item.img' loading='lazy' alt='alt')
    template.cvSlider__btns(#addons)
      .cvSlider__btnsWrapper
        button.cvSlider__prev(@click="myCarousel.prev()")
        button.cvSlider__next(@click="myCarousel.next()")

</template>

<script>
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import conduit from '@/assets/img/conduit.png';
import onlineBank from '@/assets/img/onlineBank.png';
import hydra from '@/assets/img/hydra.png';
import visual from '@/assets/img/visual.png';

export default {
  name: 'CvNavbar',
  components: { Carousel, Slide },

  setup() {
    const myCarousel = ref(null);

    const slideInfo = ref([
      {
        id: 1,
        img: visual,
        title: 'Visual',
        url: 'https://harutamirkhanyan.github.io/Visual/',

      },
      {
        id: 2,
        img: onlineBank,
        description: 'Online bank',
        url: 'https://harutamirkhanyan.github.io/vue-online-bank/',
      },
      {
        id: 3,
        img: conduit,
        title: 'Medium clone of https://demo.realworld.io/#/',
        url: 'https://harutamirkhanyan.github.io/conduit/#/',
      },
      {
        id: 4,
        img: hydra,
        title: 'OUTDOOR',
        url: 'https://harutamirkhanyan.github.io/hydra/',
      },
    ]);
    return {
      slideInfo,
      conduit,
      myCarousel,
      onlineBank,
      hydra,
      visual,
    };
  },
};
</script>

<style src="./_cvSlider.scss" lang="scss"></style>
