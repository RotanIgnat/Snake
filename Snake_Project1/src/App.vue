<template>
   <div class = "game">
   <h2 class = "Name">Змейка</h2>
   <div class = "Snake">
      <div>
         <GameBoard @score="onScore" />
      </div>
   </div>
   <h2 class = "Scoretext">Очки: {{ score }}</h2>
   </div>
</template>

<script setup>
import GameBoard from './components/GameBoard.vue'
import { ref } from 'vue'



const score = ref(0)

function onScore()
{
   score.value++
}
</script>
<style>
body{
   background-color: gray;
}
.Name {
   text-align: center
}
.Snake{
   text-align: center;
}
</style>