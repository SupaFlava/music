<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
    :id="`song-id-${song.docID}`"
  >
    <div>
      <router-link
        :to="{ name: 'song', params: { id: song.docID } }"
        class="font-bold block text-neutral-950"
        >{{ song.modified_name }}</router-link
      >
      <span class="text-neutral-900 text-sm">{{ song.display_name }}</span>
    </div>

    <div class="text-green-500 text-lg">
      <router-link
        :to="{ name: 'song', params: { id: song.docID }, hash: '#comments' }"
        v-slot="{ navigate }"
      >
        <span class="comments" @click="navigate">
          <i class="fa fa-comments text-green-500"></i>
          {{ song.comment_count }}
        </span>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SongItem',
  props: ['song']
}
</script>
