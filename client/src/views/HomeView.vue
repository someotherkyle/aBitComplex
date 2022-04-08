<template>
  <NavBar />
  <div class="bg-slate-300 ml-60 px-10 w-100 min-h-60">
    <svg class="">
      <use xlink:href="fa-brands.svg#facebook"></use>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomeView',
  components: { NavBar },
}
</script>
