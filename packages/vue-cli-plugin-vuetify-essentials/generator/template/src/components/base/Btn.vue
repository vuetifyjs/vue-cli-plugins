<script>
  import { VBtn } from 'vuetify/lib'

  export default {
    name: 'BaseBtn',

    extends: VBtn,

    props: {
      color: {
        type: String,
        default: 'primary',
      },
    },
  }
</script>
