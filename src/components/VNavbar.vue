<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
    <div class="container">
      <router-link
        class="navbar-brand"
        to="/"
      >
        CSC4008 Project
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/bookings"
            >
              Bookings
            </router-link>
          </li>
        </ul>
        <div v-if="currentUser">
          <ul class="d-flex navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello {{ currentUser.name.replace(/ .*/,'') }}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item"
                    to="/account"
                  >
                    Account
                  </router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a
                    class="dropdown-item"
                    @click.prevent="logOut"
                  >Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div v-else>
          <router-link
            class="btn btn-primary me-2"
            to="/login"
            role="button"
          >
            Login
          </router-link>
          <router-link
            class="btn btn-primary"
            to="/register"
            role="button"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "VNavbar",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>