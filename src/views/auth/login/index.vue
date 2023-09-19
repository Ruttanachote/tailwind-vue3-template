<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/">
                <img
                  :src="logo"
                  alt=""
                  class="mx-auto"
                  v-if="!this.$store.themeSettingsStore.isDark"
                />
                <img :src="logoWhite" alt="" class="mx-auto" v-else />
              </router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-4">
              <h4 class="font-medium">Sign in</h4>
              <div class="text-slate-500 text-base">
                Sign in to your account to start using Docmanagement
              </div>
            </div>
            <Signin />
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm"
            >
              Don’t have an account? Sign up
              <router-link
                to="/register"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                Sign up
              </router-link>
            </div>
          </div>
          <div class="auth-footer text-center">
            COPYRIGHT 2023 Docmanagement, All rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Signin from "../common/Signin";
// Image Import
import logoWhite from "@/assets/images/logo/logo-white.svg";
import logo from "@/assets/images/logo/logo.svg";

export default {
  data() {
    return {
      logoWhite,
      logo,
    };
  },
  components: {
    Signin,
  },
};
</script>
<style lang="scss"></style>
