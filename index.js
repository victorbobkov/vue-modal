new Vue({
  el: '.app',
  data () {
    return {
      searchQuery: null,
      showCategoryPopup: false,
      categories: [
        {name: 'Нутра'},
        {name: 'Крипта'},
        {name: 'Товарка'},
        {name: 'Нутра 2'},
        {name: 'Крипта 2'},
        {name: 'Товарка 2'},
        {name: 'Нутра 3'},
        {name: 'Крипта 3'},
        {name: 'Товарка 3'},
        {name: 'Нутра 4'},
        {name: 'Крипта 4'},
        {name: 'Товарка 4'},
      ]
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.categories.filter((category) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every(char => category.name.toLowerCase().includes(char))
        })
      } else {
        return this.categories
      }
    }
  },
});