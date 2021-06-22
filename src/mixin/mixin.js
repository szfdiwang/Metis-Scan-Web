const mixin = {
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  computed: {
    // eslint-disable-next-line space-before-function-paren
    lang: function () {
      return this.$i18n.locale
    }
  }
}
export default mixin
