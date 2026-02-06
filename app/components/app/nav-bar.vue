<script lang="ts" setup>
</script>

<template>
  <div class="navbar bg-secondary text-secondary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        env. App Name
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <AuthGithubBtn />
    </div>
  </div>
</template>
