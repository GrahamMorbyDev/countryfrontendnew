<template>
    <div>
        <!-- Static sidebar for desktop -->
        <div class="flex w-64 flex-col fixed inset-y-0">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    <span class="text-xl truncate text-white font-bold">Country On The Coast</span>
                </div>
                <div class="mt-5 flex-1 flex flex-col">
                    <nav class="flex-1 px-2 pb-4 space-y-1">
                        <a v-for="item in navigation" 
                           :key="item.name" :href="item.href" 
                           :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
                           @click="clickNavOption(item.name)"
                        >
                            <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                            {{ item.name }}
                        </a>
                    </nav>
                </div>

                <div class="mt-5 flex-1 flex flex-col">
                    <nav class="flex-1 px-2 pb-4 space-y-1">
                        <a v-for="item in userNavigation" 
                           :key="item.name" :href="item.href" 
                           :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
                        >
                            <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                            {{ item.name }}
                        </a>
                    </nav>
                </div>
            </div>
        </div>

        <div class="pl-64 flex flex-col flex-1">
            <main>
                <div class="py-6 px-6">
                    <slot></slot>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, 
         TransitionRoot } from '@headlessui/vue';
import { ArrowLeftOnRectangleIcon, BuildingStorefrontIcon, HomeIcon, NewspaperIcon, UsersIcon } from '@heroicons/vue/24/outline';
import { getStorage } from "@/saveStorage";
export default {
    data() {
        return {
            navigation: [
                { name: 'Home',      href: '/admin/home',    icon: HomeIcon,                  current: false },
                { name: 'Users',     href: '/admin/users',   icon: UsersIcon,                 current: false },
                { name: 'Order',     href: '/admin/orders',  icon: BuildingStorefrontIcon,    current: false },
                { name: 'Blog',      href: '/admin/posts',   icon: NewspaperIcon,             current: false },
            ],
            userNavigation: [
                //{ name: 'Your Profile', href: '#' },
                //{ name: 'Settings', href: '#' },
                { name: 'Sign out',  href: '/admin/logout',  icon: ArrowLeftOnRectangleIcon,  current: false },
            ],
            sidebarOpen: false,
            active: false,
        }
    },

    components: {
        Dialog, DialogPanel, 
        TransitionChild, TransitionRoot, MenuButton, MenuItem, MenuItems, Menu
    },

    methods: {
        checkUser() {
            const token = getStorage('token')
            const admin = getStorage('isAdmin')

            if (token === 'false' && admin === '1') {
                this.$router.push({name: 'adminLogin'});
            }
        }
    },

    created() {
        this.checkUser();

        // Set nav menu selected
        this.navigation.map(function(i) { 
            i.current = false; 
            if (i.href == window.location.pathname) {
                i.current = true; 
            }
            return i;
        });
    }
}
</script>