<template>
  <header id="header" class="bg-neutral-950">
    <nav class="container mx-auto flex flex-col sm:flex-row justify-between items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mb-4 sm:mb-0 sm:mr-auto"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Scratch Bank</router-link
      >

      <div class="flex flex-col sm:flex-row sm:items-center md:items-start">
        <!-- Primary Navigation -->
        <ul class="flex flex-col md:flex-row md:mt-0 mt-4 md:ml-auto">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white mb-2 sm:mb-0 sm:mr-4" :to="{ name: 'manage' }"
                >Manage</router-link
              >
            </li>
            <li>
              <a class="px-2 text-white mb-2 sm:mb-0 sm:mr-4" href="#" @click.prevent="signOut"
                >Logout</a
              >
            </li>
            <li>
              <router-link class="px-2 text-white mb-2 sm:mb-0" :to="{ name: 'about' }"
                >About</router-link
              >
            </li>
          </template>
        </ul>
        <ul>
          <li>
            <a class="px-2 text-green-500" href="#" @click.prevent="changeLocale">
              {{ currentLocale }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false
    }
  },

  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === 'nl' ? 'Dutch' : 'English'
    }
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
    signOut() {
      this.userStore.signOut()
      if (this.$router.meta.requires.Auth) {
        this.$router.push({ name: 'home' })
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'nl' ? 'en' : 'nl'
    }
  },
  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }
}
</script>
