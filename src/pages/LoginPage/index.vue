<template>
  <div class="row mt-md-5">
    <div class="col-md-6 offset-md-3">
      <div class="card text-bg-light">
        <div class="card-header">
          Login
        </div>
        <div
          class="card-body"
        >
          <div
            v-if="message"
            class="alert alert-danger fade show"
            role="alert"
          >
            <strong>Error!</strong> {{ message }}
          </div>
          <form @submit.prevent="handleLogin">
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
              >
            </div>
            <div class="mb-3">
              <label
                for="inputPassword"
                class="form-label"
              >Password</label>
              <input
                id="inputPassword"
                v-model="user.password"
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
              <Transition>
                <span v-if="loading">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span class="visually-hidden">Loading...</span>
                </span>
              </Transition>
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
  name: "LoginPage",
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      message: '',
      loading: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/account");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;

      this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/account");
          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>