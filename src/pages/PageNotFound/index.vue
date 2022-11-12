<template>
  <div class="row mb-3">
    <div class="col">
      <div class="card border-danger">
        <div class="card-body text-danger">
          <h5 class="card-title">
            This page doesn't exist
          </h5>
          <p class="card-text">
            Sorry!  You've reached a page which doesn't exist.  It might have been deleted, moved or maybe it never existed at all?
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-3 offset-md-4">
      <img :src="require('@/assets/Compass.png')" class="img-fluid" alt="A road with barriers across the road with a sign that reads Road Closed">
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

</style>