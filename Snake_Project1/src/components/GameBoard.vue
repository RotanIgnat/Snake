

<template>
   <div class="game-board">
      <div class="board-row" v-for="(row, rowIdx) in Board" :key="rowIdx">
         <div class="board-cell" :class="{
            'grasss': cell == 0,
            'snake-head1': cell == 1,
            'snake-body': cell == 2,
            'target': cell == 3,
            'snake-head2': cell == 4,
            'snake-head3': cell == 5,
            'snake-head4': cell == 6
         }" v-for="(cell, cellIdx) in row" :key="cellIdx">
            &nbsp;
         </div>
      </div>
   </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue'

const emit = defineEmits(['score'])

var nCol = 40
var nRow = 20

const Board = reactive([])
const Snake = reactive([])

const dCol = ref(0)
const dRow = ref(-1)

var interval = 0
const SnakeHead = ref(1)

onBeforeMount(() =>
{
   InitBoard()
   Board[2][5] = 3
   InitSnake()
   window.addEventListener('keydown', onKeyDown)
})

onMounted(() =>
{
   interval = setInterval(() => RenderSnake(), 150)
})

function onKeyDown(evt)
{
   switch (evt.key)
   {
      case 'ArrowUp':
         if (dRow.value != 1)
         {
            dRow.value = -1
            dCol.value = 0
            SnakeHead.value = 1
         }
         break
      case 'ArrowDown':
         if (dRow.value != -1)
         {
            dRow.value = 1
            dCol.value = 0
            SnakeHead.value = 5
         }
         break
      case 'ArrowLeft':
         if (dCol.value != 1)
         {
            dRow.value = 0
            dCol.value = -1
            SnakeHead.value = 4
         }
         break
      case 'ArrowRight':
         if (dCol.value != -1)
         {
            dRow.value = 0
            dCol.value = 1
            SnakeHead.value = 6
         }
         break
   }
}

function InitBoard()
{
   for (let y = 0; y < nRow; y++)
   {
      let row = []
      for (let x = 0; x < nCol; x++)
      {
         row.push(0)
      }
      Board.push(row)
   }
}

function InitSnake()
{
   for (let i = 0; i < 5; i++)
   {
      Snake.push({
         col: 12,
         row: 12 + i,
         seg: i == 0 ? 1 : 2
      })
   }
}

function RenderSnake()
{
   // Движение головы
   // let Head = Object.copy(Snake[0])

   let Head = JSON.stringify(Snake[0])
   Head = JSON.parse(Head)

   Head.col = Head.col + dCol.value
   Head.row = Head.row + dRow.value

   let h = Head.col + dCol.value
   let c = Head.row + dRow.value

   Head.seg = SnakeHead.value

   console.log(Head.row, ' ', Head.col)

   if (h < -1 || (h > nCol) || (c < -1) || (c > nRow)) {
      GameOver()
      return 0;
   }
   Snake[0].seg = 2

   if (Snake.filter((item) => item.row == Head.row && item.col == Head.col).length != 0)
   {
      GameOver()
   }

   // Snake.unshift(Head)

   // Хвост

   if (Board[Head.row][Head.col] == 3)
   {
      let B = NewTarget()
      Board[B.row][B.col] = 3
      Snake.unshift(Head)
      emit('score')
      console.log("Take target")
   } else
   {
      Snake.unshift(Head)
      let Tail = Snake.pop()

      Snake.forEach((cell) => Board[cell.row][cell.col] = cell.seg)
      Board[Tail.row][Tail.col] = 0
   }
}

function NewTarget()
{
   let col = Math.floor(Math.random() * 20)
   let row = Math.floor(Math.random() * 24)

   let a = Snake.filter((item) =>
   {
      if ((item.col == col) && (item.row == row))
      {
         return true
      } else
      {
         return false
      }
   })

   if (a.length != 0)
   {
      return NewTarget()
   } else
   {
      return { col: col, row: row }
   }
}

function GameOver()
{
   clearInterval(interval)
   console.log("Game Over")
}
</script>

<style>
.board-cell {
   width: 24px;
   height: 24px;
   display: inline-block;
   border: 1px dotted #000000;
}

.grasss{
   background-image: url("./src/grass.png");
}

/*switch (SnakeHead.value)
   {
      case 1:
         background-image: url("./src/Head_Snake1.png");
         break
      case 2:
         background-image: url("./src/Head_Snake2.png");
         break
      case 3:
         background-image: url("./src/Head_Snake3.png");
         break
      case 4:
         background-image: url("./src/Head_Snake4.png");
         break
   }*/
.snake-head1 {
   background-image: url("./src/Head_Snake1.png");
}
.snake-head2 {
   background-image: url("./src/Head_Snake2.png");
}
.snake-head3 {
   background-image: url("./src/Head_Snake3.png");
}
.snake-head4 {
   background-image: url("./src/Head_Snake4.png");
}


.snake-body {
   background-image: url("./src/Snake_Body1.png");
}

.target {
   background-image: url("./src/Apple.png");
}
</style>