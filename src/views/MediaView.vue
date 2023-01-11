<template>
    <div>
        <Navbar></Navbar>
        <div class="relative">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="@/assets/media.jpg" alt="History of Country on the coast" />
        </div>
      </div>
      <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div class="lg:col-start-2 lg:pl-8">
          <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
          <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Media</h3>
            <p class="mt-8 text-lg text-gray-500">
              Roger Pecks Country music show
            </p>
            <a href="https://www.mixcloud.com/rogerpeck2/british-country-music-show-31-maar-2022-country-on-the-coast-preview/" class="text-cyan-800 :hover=text-cyan-400">Listen Again</a>

            <p class="mt-8 text-lg text-gray-500">
                DC Brown Live
            </p>
            <a href="https://fb.watch/cuo2ZyBuOK/" class="text-cyan-800 :hover=text-cyan-400">Highlights Video</a><br>
            <a href="https://www.youtube.com/c/DCBrownLiveUKCountry/videos" class="text-cyan-800 :hover=text-cyan-400">Country on the Coast Playlist</a>

            <p class="mt-8 text-lg text-gray-500">
                Spotify Playlist
            </p>
            <a href="https://open.spotify.com/playlist/0kP6zY6IIoF53iSYMW2qkz?si=b5d1871669224063" class="text-cyan-800 :hover=text-cyan-400">Listen Today</a>

            <p class="mt-8 text-lg text-gray-500">
                Live in the Living Room Playlist
            </p>
            <a href="https://youtube.com/playlist?list=PLhsGDXyLvLE5KHbEaEh3bWQvnfXkrBquO" class="text-cyan-800 :hover=text-cyan-400">Watch Today</a>

            <p class="mt-8 text-lg text-gray-500">
                Featured On
            </p>
            <ul>
                <li>Express FM</li>
                <li>BBC Radio</li>
                <li>Wave 105 FM</li>
                <li>UKCountryRadio.com</li>
                <li>Clews Country Radio</li>
                <li>Live in the Living Room</li>
            </ul>

            <p class="mt-8 text-lg text-gray-500">
                Photographer's
            </p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/countrylowdown" class="text-cyan-800 :hover=text-cyan-400">Colin Jones Country Lowdown</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dcbrownlive" class="text-cyan-800 :hover=text-cyan-400">DC Brown Live</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/seeninportsmouth" class="text-cyan-800 :hover=text-cyan-400">Steve Spurgin Seen in Portsmouth</a>
                </li>
            </ul>

            <p class="mt-8 text-lg text-gray-500">
                Podcasts
            </p>
            <a href="https://www.facebook.com/clewescountryuk" class="text-cyan-800 :hover=text-cyan-400">Matt Clewes</a>
          </div>
        </div>
      </div>
    </div>
        <footerBottomVue></footerBottomVue>
    </div>
</template>
<script setup>
import Navbar from '../components/navBar';
import footerBottomVue from '@/components/footerBottom.vue'
</script>