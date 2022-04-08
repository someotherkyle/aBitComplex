<template>
  <div class="w-60 h-full shadow-md bg-slate-900 absolute">
    <div class="pt-4 pb-2 px-6">
      <a href="#!">
        <div class="flex items-center">
          <div class="shrink-0">
            <img
              src="@/assets/profile.png"
              class="rounded-full w-10"
              alt="Avatar"
            />
          </div>
          <div class="grow ml-3">
            <p class="text-sm font-semibold text-green-600">Kyle Smith</p>
          </div>
        </div>
      </a>
    </div>
    <ul class="relative px-1">
      <li class="relative">
        <a
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-blue-50 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="primary"
        >
          <svg class="w-3 h-3 mr-3">
            <use xlink:href="fa-brands.svg#facebook"></use>
          </svg>
          <!-- <svg
            class="w-3 h-3 mr-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            ></path>
          </svg> -->
          <span>
            <router-link to="/">Home</router-link>
          </span>
        </a>
      </li>
    </ul>
    <CollapsibleNav heading="Assets" :links="links1" />
    <hr class="my-2 bg-green-600" />
    <div class="text-center bottom-0 absolute w-full">
      <hr class="m-0" />
      <p class="py-2 text-sm text-gray-200">Prestige World-Wide LLC.</p>
    </div>
  </div>
</template>

<script>
import CollapsibleNav from './CollapsibleNav.vue'
export default {
  name: 'NavBar',
  components: {
    CollapsibleNav,
  },
  data() {
    return {
      links1: [
        {
          name: 'USAA',
          href: '/usaa',
        },
      ],
    }
  },
}
</script>
