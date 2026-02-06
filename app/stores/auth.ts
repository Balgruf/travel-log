import { createAuthClient } from 'better-auth/vue';
import { navigateTo } from 'nuxt/app';

const authClient = createAuthClient();

export const useAuthStore = defineStore('useAuthStore', () => {
  const session = authClient.useSession();
  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  async function signIn() {
    loading.value = true;
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/dashboard',
      errorCallbackURL: '/error',
    });
    loading.value = false;
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo('/');
  }

  return {
    loading,
    signIn,
    signOut,
    user,
  };
});
