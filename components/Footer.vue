<script lang="ts" setup></script>

<template>
  <footer class="bg-slate-400 text-slate-900">
    <div class="wrapper grid grid-cols-6">
      <NavigationList isFooter?="true" />
      <div class="flex items-center col-span-2">
        <img
          class="max-w-full mix-blend-multiply p-4"
          alt="image de pochita"
          src="/img/logo.png"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>