<template lang="pug">
.terminal(:style='myStyle')
  .terminal__letter(ref="terminal" :style='letterStyle')
  span.terminal__cursor(v-if="showCursor")
</template>

<script src="./_cvTerminal.js" lang="js"></script>
<style src="./_cvTerminal.scss" lang="scss"></style>
