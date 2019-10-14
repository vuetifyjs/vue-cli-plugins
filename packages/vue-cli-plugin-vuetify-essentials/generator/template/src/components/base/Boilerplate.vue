<script>
  import { VSkeletonLoader } from 'vuetify/lib'

  export default {
    name: 'BaseBoilerplate',

    extends: VSkeletonLoader,

    props: {
      boilerplate: {
        type: Boolean,
        default: true,
      },
      elevation: {
        type: [Number, String],
        default: 2,
      },
    },
  }
</script>
