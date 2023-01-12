<script>
import { useRating } from '~~/composables/useRating';

const expected = useRating({
  counts: {
    5: 723,
    4: 24,
    3: 6,
    2: 4,
    1: 4,
  },
});

console.log(expected);
</script>

<template>
  <div></div>
</template>
