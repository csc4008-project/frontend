<template>
  <div class="row mt-md-5">
    <div class="col-md-8 offset-md-2">
      <div class="card text-bg-light">
        <div class="card-header">
          Register
        </div>
        <div class="card-body">
          <div 
            v-if="message"
            class="alert alert-danger"
          >
            <strong>Error!</strong> {{ message }}
          </div>
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label
                for="inputFullName"
                class="form-label"
              >Full name</label>
              <input
                id="inputFullName"
                v-model="user.name"
                type="text"
                class="form-control"
                aria-describedby="fullNameHelp"
              >
              <div
                id="fullNameHelp"
                class="form-text"
              >
                The full name you would like to be referred to by.
              </div>
            </div>
            <div class="mb-3">
              <label
                for="inputEmail"
                class="form-label"
              >Email address</label>
              <input
                id="inputEmail"
                v-model="user.email"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
              >
              <div
                id="emailHelp"
                class="form-text"
              >
                Your company email address.
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label
                  for="inputPassword"
                  class="form-label"
                >Password</label>
                <input
                  id="inputPassword"
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  aria-describedby="passwordHelp"
                >
                <div
                  id="passwordHelp"
                  class="form-text"
                >
                  Choose a password for your account.
                </div>
              </div>
              <div class="col">
                <label
                  for="inputConfirmPassword"
                  class="form-label"
                >Confirm password</label>
                <input
                  id="inputConfirmPassword"
                  v-model="user.confirmPassword"
                  type="password"
                  class="form-control"
                  aria-describedby="confirmPasswordHelp"
                >
                <div
                  id="confirmPasswordHelp"
                  class="form-text"
                >
                  Please confirm the password you entered above.
                </div>
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                id="checkboxAcceptTerms"
                type="checkbox"
                class="form-check-input"
                required
              >
              <label
                class="form-check-label"
                for="checkboxAcceptTerms"
              >I accept the terms and conditions</label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
            >
              <span v-if="loading">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
                <span class="visually-hidden">Loading...</span>
              </span>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      message: '',
      successful: false,
      loading: false
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", this.user).then(
          () => {
            this.$router.push({ path: "/account", query: { accountCreated: true } });
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
    },
  },
}
</script>

<style scoped>

</style>