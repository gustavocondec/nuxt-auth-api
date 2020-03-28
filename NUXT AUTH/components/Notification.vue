<template>
  <div class="notification is-danger">
    {{ mensaje }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['mensaje']
}
</script>
