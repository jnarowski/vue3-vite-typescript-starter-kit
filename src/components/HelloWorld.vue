<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <h1
      class="text-3xl text-blue-500 font-bold fwwe ewf ewf wef ewf ew f fw ewf wef ew fwe fwef ewf ewf"
    >
      {{ msg }}
    </h1>
    <FormKit
      type="text"
      label="Your username"
      value="calypso"
      help="Pick a username people will remember!"
    />
  </div>
</template>

<style scoped></style>
