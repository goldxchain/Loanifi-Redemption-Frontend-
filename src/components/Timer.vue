<template>
  <span>USDX 25X bonus promotion on sacrifice started, will end in {{ formattedTime }}</span>
</template>

<script>

export default {
  props: {
    seconds: {
      type: Number,
      required: true
    }
  },
  computed: {
    formattedTime() {
      const hours = Math.floor(this.seconds / 3600);
      const minutes = Math.floor((this.seconds % 3600) / 60);
      const secs = this.seconds % 60;
      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
    }
  },
  methods: {
    pad(num) {
      return num < 10 ? "0" + num : num;
    }
  }
};
</script>
