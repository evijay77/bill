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
      stocks: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Product Name"
        },
        {
          field: "description",
          label: "Description"
        },
        {
          field: "price",
          label: "Price"
        },
        {
          field: "quantity",
          label: "Quantity",
          centered: true
        },
        {
          field: "gst",
          label: "GST"
        },
        {
          field: "total",
          label: "Total"
        }
      ]
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
