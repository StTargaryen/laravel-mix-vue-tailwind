<template>
  <div class="card-list">
    <CardItem v-for="(card, index) in cards" :key="index" :cardInfo="card" />
  </div>
</template>

<script>
import CardItem from "./CardsItem";
export default {
  name: "card-list",
  data() {
    return {
      cards: [
        {
          title: "The Default Card",
          id: 1,
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatem id molestiae sapiente voluptate non laudantium natus nam iste incidunt?",
          tags: ["laravel-mix"],
        },
        {
          title: "The Default Card",
          id: 2,
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatem id molestiae sapiente voluptate non laudantium natus nam iste incidunt?",
          tags: ["laravel-mix","vue"],
        },
        {
          title: "The Default Card",
          id: 3,
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatem id molestiae sapiente voluptate non laudantium natus nam iste incidunt?",
          tags: ["laravel-mix", "tailwind", "vue"],
        },
        {
          title: "The Default Card",
          id: 4,
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatem id molestiae sapiente voluptate non laudantium natus nam iste incidunt?",
          tags: [],
        },
      ],
    };
  },
  components: {
    CardItem,
  },
};
</script>

<style lang="scss">
.card-list {
  display: flex;
}
</style>