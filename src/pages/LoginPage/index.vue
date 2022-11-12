<template>
  <div class="row mt-md-5">
    <div class="col-md-6 offset-md-3">
      <div class="card text-bg-light">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label
                for="inputEmail"
                class="form-label"
              >Email address</label>
              <input
                id="inputEmail"
                type="email"
                class="form-control"
              >
            </div>
            <div class="mb-3">
              <label
                for="inputPassword"
                class="form-label"
              >Password</label>
              <input
                id="inputPassword"
                type="password"
                class="form-control"
              >
            </div>
            <div class="mb-3 form-check">
              <input
                id="checkboxStayLoggedIn"
                type="checkbox"
                class="form-check-input"
              >
              <label
                class="form-check-label"
                for="checkboxStayLoggedIn"
              >Stay logged in</label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>

</style>