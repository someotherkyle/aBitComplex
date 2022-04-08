<template>
  <ul class="relative px-1">
    <li class="relative" id="sidenavSecEx2">
      <a
        @click="toggleCollapse"
        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
      >
        <svg class="w-3 h-3 mr-3">
          <use xlink:href="../assets/fontawesome/svgs/solid/house.svg"></use>
        </svg>
        <span>{{ heading }}</span>
        <svg
          class="w-3 h-3 ml-auto hover:text-green-600 duration-200"
          :class="{ '-rotate-90': collapsed }"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          ></path>
        </svg>
      </a>
      <ul v-if="!collapsed" class="relative accordion-collapse collapse">
        <li class="relative" v-for="(link, key) in links" :key="key">
          <a
            href="links[key].href"
            class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-green-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            >{{ link.name }}</a
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CollapsibleList',
  props: {
    heading: {
      type: String,
      required: true,
    },
    headingSvg: {
      type: Element,
      required: false,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
  },
}
</script>
