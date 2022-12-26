<template>
    <Disclosure as="nav" class="bg-cyan-900" v-slot="{ open }">
        <div class="relative">
            <div class="absolute inset-x-0 bottom-0 h-1/2" />
            <div class="mx-auto">
                <div class="relative shadow-xl sm:overflow-hidden w-full">
                    <div class="absolute inset-0">
                        <img class="h-full w-full object-cover" src="@/assets/topbar.jpg" alt="" />
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-800 mix-blend-multiply" />
                    </div>
                <div class="relative px-4">
                    <div class="flex m-auto justify-center">
                        <div class="flex-none">
                            <img src="@/assets/logo.png" alt="Country on the coast" class="h-48 p-5">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

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

          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href"
              :class="[item.current ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-cyan-500 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" 
              :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'History', href: '/history', current: false },
  { name: 'Artists', href: '/artists', current: false },
  { name: 'Tickets', href: '#', current: false },
  { name: 'Store', href: '#', current: false },
  { name: 'Contact us', href: '#', current: false },
]
</script>