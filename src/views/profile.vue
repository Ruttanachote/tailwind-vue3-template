<template>
  <div class="space-y-5 profile-page">
    <div
      class="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
    >
      <div
        class="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"
      ></div>
      <div class="profile-box flex-none md:text-start text-center">
        <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
          <div class="flex-none">
            <div
              class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
            >
              <img
                src="@/assets/images/users/user.jpg"
                alt=""
                class="w-full h-full object-cover rounded-full bg-black-500"
              />
              <router-link
                to="/app/profile-setting"
                class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                ><Icon icon="heroicons:pencil-square" />
              </router-link>
            </div>
          </div>
          <div class="flex-1">
            <div class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
              Ruttanachote Kaeyai
            </div>
            <div class="text-sm font-light text-slate-600 dark:text-slate-400">
              Software Engineer
            </div>
          </div>
        </div>
      </div>
      <!-- end profile box -->
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
export default {
  components: {
    Card,
    Icon,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
