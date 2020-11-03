<template>
  <div class="mt-10 max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="">The Default Card</div>
      <p class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="card__footer">
      <span class="card__tag">#laravel-mix</span>
      <span class="card__tag">#tailwind</span>
      <span class="card__tag">#vue</span>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">

.card__title {
  @apply font-bold text-xl mb-2;
};

.card__text {
  @apply text-gray-700 text-base;
};

.card__tag {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2;
};

.card__footer {
  @apply px-6 pt-4 pb-2;
};
</style>