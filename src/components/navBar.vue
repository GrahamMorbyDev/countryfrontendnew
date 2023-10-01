<template>
  <Disclosure as="nav" class="bg-indigo-900" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img src="@/assets/logo.png" alt="Country on the coast" class="h-10">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink v-for="item in navigation" :key="item.name" :to="{ name: item.href}" :class="[this.state === item.name ? 'bg-pink-700 text-white' : 'text-gray-300 hover:bg-pink-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
            </div>
          </div>
         
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href="https://book.events/gaietybarsouthsea/2024-04-13/42919?fbclid=IwAR08JG7MWg4TO7bk1W81L1Q_UHivMsQz0WCOv-0J_LmMwqMoLMqMplTxUhU" target="_blank" class=" bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Tickets
          </a>
          <p class="text-white text-xs font-bold px-4">13/14 April 2024 <br> <span class="text-sm font-bold">Gaiety Southsea</span></p>
          
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
export default {
  components: {
    Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Bars3Icon, BellIcon, XMarkIcon
  },
  created() {
    this.state = this.$route.meta.state
  },
  data() {
    return {
      state: 1,
      navigation: [
        { name: 'Home', href: 'home', current: true },
        { name: 'About', href: 'about', current: false },
        { name: 'History', href: 'history', current: false },
        { name: '2024 Launch Party', href: 'artists', current: false },
        { name: 'News', href: 'blogs', current: false },
      ]
    };
  },
};

</script>