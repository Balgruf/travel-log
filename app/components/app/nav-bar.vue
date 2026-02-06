<script lang="ts" setup>
// import env from '~/lib/env'
// eslint-disable-next-line node/no-process-env
const name = process.env.APP_NAME;
</script>

<template>
  <div class="navbar bg-secondary text-secondary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        {{ name }}
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <AuthGithubBtn />
    </div>
  </div>
</template>
