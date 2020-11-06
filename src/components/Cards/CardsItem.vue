<template>
  <div class="card-item">
    <div class="card-item__content">
      <div class="card-item__title">{{cardInfo.title + ' №' + cardInfo.id}}</div>
      <p class="card-item__text">
        {{cardInfo.text}}
      </p>
    </div>
    <div class="card-item__footer" v-if="cardInfo.tags.length > 0">
      <span class="card-item__tag" v-for="(tag, index) in cardInfo.tags" :key="index">{{tag}}</span>
    </div>
    <div class="card-item__footer" v-else></div>
  </div>
</template>

<script>
  export default {
    props: {
      cardInfo: {
        type: Object,
        default: () => {}
      }
    }
    
  }
</script>

<style lang="scss" scoped>

.card-item {
  margin: 0px 5px;
  transition: all .2s ease;
  width: 33.33%;
  cursor: pointer;
  @apply my-10 max-w-sm sm:sm:max-w-md rounded overflow-hidden shadow;


  &:hover {
    transition: all .2s ease;
    @apply shadow-2xl;
  }

  &__content {
    @apply px-6 py-4;
  };

  &__title {
    @apply font-bold text-xl mb-2;
  };

  &__text {
    @apply text-gray-700 text-base;
  };

  &__tag {
    @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2;
  };

  &__footer {
    @apply px-6 pt-4 pb-2;
  };
};

</style>