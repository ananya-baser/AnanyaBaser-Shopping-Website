<template>
  <div class="category-wrapper">
    <div v-for="key in Object.keys(categoryOptions)" :key="key" class="option">
      <h5>{{key}}</h5>
      <div class="category-item" v-for="item in categoryOptions[key]" :key="item" @click="closeModal; submitSearchQuery(item.name)">
        <!-- <router-link :to="`/${category}/${item.path}`">{{item.name}}</router-link> -->
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { menCategoryOptions } from '../assets/fixtures/category/men/men-options';
import { womenCategoryOptions } from '../assets/fixtures/category/women/women-options';
// import { kidsCategoryOptions } from '../assets/fixtures/category/kids/kids-options';
import { mapMutations, mapGetters } from 'vuex';
// import SearchView from '@/views/SearchView.vue';
export default {
  name: 'CategoryChoices',
  data: () => {
    return {
      categoryOptionsMap: {
        'men': menCategoryOptions,
        'women': womenCategoryOptions,
        // 'kids': kidsCategoryOptions,
      }
    }
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    categoryOptions () {
      return this.categoryOptionsMap[this.category]
    }
  },
  methods: {
    ...mapMutations(['setSearchQuery']),
    ...mapGetters(['getSearchQuery']),
    submitSearchQuery(name) {
            // console.log(this.searchQuery); //works
        this.setSearchQuery((this.category + " " + name));
            // console.log(this.searchQuery);//works
            console.log(this.getSearchQuery());//works
        // this.$router.push(`/search`);
        // this.$router.addRoute({ name: `${name}`, path: `/${this.category}/${path}`, component: SearchView });
        // this.$router.addRoute({ name: `${name}`, path: `/${path}`, component: SearchView });
        // this.$router.push(`/${path}`);

        this.$router.replace({ name: "search", params: {id:name}, query: {searchString: name} })
    },
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style scoped>
.category-wrapper {
  padding: 10px 10px 20px 10px;
  display: flex;
  justify-content: space-between;
}
.option {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  /* z-index: 100; */
}
.option h5 {
  margin-bottom: 10px;
}
.option a {
  text-decoration: none;
  color: inherit;
}
.option div {
  font-size: 14px;
  padding: 5px 0;
  color: #717171;
}
.category-item:hover{
    cursor: pointer;
}
</style>