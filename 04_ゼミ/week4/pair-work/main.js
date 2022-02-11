Vue.createApp({
  data() {
    return {
      balance: 0,
      inputMoney: 0,
      records: [],
      isSyukkin: false,
    }
  },
  methods: {
    nyuukin: function () {
      this.balance += Number(this.inputMoney)
      const now = new Date()
      this.records.push("日付: " + now)
      this.records.push("操作: 入金")
      this.records.push("金額: " + Number(this.inputMoney))
    },
    syukkin: function () {
      this.balance -= Number(this.inputMoney)
      const now = new Date()
      this.records.push("日付: " + now)
      this.records.push("操作: 出金")
      this.records.push("金額: " + Number(this.inputMoney))
    },
  },
  //   computed: {
  //       isDisabled: function(){
  //         return isSyukkin(this.balance < Number(this.inputMoney)
  //     },
  //   },
}).mount("#app")
