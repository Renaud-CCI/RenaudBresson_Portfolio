<template>
  <div
    class="profile-img"
    :style="{ 
      borderRadius: '50%', 
      border: '2px solid ' + borderColor, 
      backgroundImage: `url(${image})`,
      boxShadow: `0 0 5px 0 ${borderColor}`
    }"
  >
  </div>
</template>

<script>
export default {
  name: 'PhotoProfile',
  props: {
    image: {
      type: String,
      required: false
    },
    borderColor: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.profile-img {
  width: 75px;
  height: 75px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5px;
  box-shadow: 0 0 0 0.16em $borderColor;
}
</style>
