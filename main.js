//tạo ra app
const app = Vue.createApp({
  template: `
    <h1>
      Hello from {{teamName}} and {{isHello ? firstName + ' ' + lastName : ''}}
    </h1>
    <button v-on:click="changeName">Change Name</button>
    <button @click="changeName">Change Name Shorter</button>
    <div class="modal" v-if="isShowModal">
      This is modal header
    </div>
  `,

  data() {
    return {
      teamName: "RHP team",
      firstName: "Duy",
      lastName: "Tran",
      isHello: true,
      isShowModal: false,
    };
  },

  methods: {
    changeName() {
      this.firstName = "AS";
      this.lastName = "Rome";
      this.isShowModal = !this.isShowModal;
    },
  },
});

app.mount("#contact"); //đưa app vào thẻ có id="contact"
