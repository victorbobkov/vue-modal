const clickaway = window.VueClickaway.mixin;

new Vue({
  el: '.app',
  mixins: [ clickaway ],
  data () {
    return {
      searchQuery: null,
      showCategoryPopup: false,
      categories: [
        { id: 1, name: 'Нутра', isSelected: false },
        { id: 2, name: 'Крипта', isSelected: false },
        { id: 3, name: 'Товарка', isSelected: false },
        { id: 4, name: 'Нутра 2', isSelected: false },
        { id: 5, name: 'Крипта 2', isSelected: false },
        { id: 6, name: 'Товарка 2', isSelected: false },
        { id: 7, name: 'Нутра 3', isSelected: false },
        { id: 8, name: 'Крипта 3', isSelected: false },
        { id: 9, name: 'Товарка 3', isSelected: false },
        { id: 10, name: 'Нутра 4', isSelected: false },
        { id: 11, name: 'Крипта 4', isSelected: false },
        { id: 12, name: 'Товарка 4', isSelected: false },
      ]
    };
  },
  methods: {
    openMenu: function() {
      this.showCategoryPopup = !this.showCategoryPopup;
    },
    away: function() {
      this.showCategoryPopup = !this.showCategoryPopup;
    },
    clear: function() {
      this.categories.forEach((category, index) => {
        this.categories[index].isSelected = false;
      });
      this.searchQuery = null;
    }
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
