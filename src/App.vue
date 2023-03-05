<template>
  <div>
    <FormList />
  </div>
  <router-view/>
</template>

<script lang="ts" setup>
import FormList from "@/components/FormList";
</script>

<style>
body {
  background-color: #1b1b32;
  color:#f3f3f3;
}
</style>
