<template>
  <div class="home">
  
    {{ stocks }}
  </div>
</template>

<script>
import database from "../database";
export default {
  data() {
    return {
      stocks: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch: function() {
      database.serialize(function() {
        database.each("SELECT * FROM STOCKS", function(err, data) {
          if (err) console.log(err);
          else {
            this.stocks = data;
            console.log(this.stocks);
          }
        });
      });
      console.log(this.stocks);
    }
  }
};
</script>
