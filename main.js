//tạo ra app
const app = Vue.createApp({
  data() {
    return {
      mouseMove: {
        x: 0,
        y: 0,
      },
      productList: [
        {
          _id: 1,
          class: "image-thumbnail",
          image: "https://gaxa.vn/wp-content/uploads/2022/06/modern-house.jpg",
          name: "House",
          price: 300000,
          isChosen: true,
        },
        {
          _id: 2,
          class: "image-thumbnail",
          image:
            "https://www.sanxehot.vn/files/1200x/audi-q3-2013-pics-301580-21WUQqav23.jpg",
          name: "Audi",
          price: 45000,
          isChosen: false,
        },
        {
          _id: 3,
          class: "image-thumbnail",
          image:
            "https://www.coffeebeancompany.co.uk/app/uploads/2017/04/Coffee-Shop-1024x765.jpg",
          name: "Shop",
          price: 200000,
          isChosen: false,
        },
        {
          _id: 4,
          class: "image-thumbnail",
          image: "https://i.ytimg.com/vi/nJNc4HjiVsg/maxresdefault.jpg",
          name: "Aqua Tank",
          price: 3000,
          isChosen: true,
        },
      ],
    };
  },

  methods: {
    onLogEvent(event) {
      console.log("trigger", event);
    },

    onMouseMoveEvent(event) {
      this.mouseMove.x = event.offsetX;
      this.mouseMove.y = event.offsetY;
    },

    onChosenItem(product) {
      product.isChosen = !product.isChosen;
    },
  },

  computed: {
    luxuryProductList() {
      return this.productList.filter(product => product.price > 100000);
    }
  }
});

app.mount("#contact"); //đưa app vào thẻ có id="contact"
