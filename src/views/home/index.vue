<template>
  <div>
    <Breadcrumb />
    <div class="grid grid-cols-12 gap-5 mb-5">
      <div class="2xl:col-span-3 lg:col-span-4 col-span-12">
        <Card bodyClass="p-4">
          <div class="h-40"></div>
        </Card>
      </div>
      <div class="2xl:col-span-9 lg:col-span-8 col-span-12">
        <Card bodyClass="p-4"> </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumbs";
import window from "@/mixins/window";
export default {
  mixins: [window],
  components: {
    Card,
    Breadcrumb,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
