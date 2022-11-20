<template>
  <div class="row mt-md-5">
    <div class="col-md-8 offset-md-2">
      <div
          v-if="accountUpdated"
          class="alert alert-success"
          role="alert"
      >
        <strong>Success!</strong> Your account was updated successfully.
      </div>
      <div
        v-if="accountCreated"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>Welcome!</strong> Your account was created successfully.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
      <div class="card text-bg-light">
        <div class="card-header">
          <div class="row d-flex align-items-center">
            <div class="col">
              <h5 class="mb-0">
                Profile
              </h5>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-primary float-end"
                @click="toggleEditing"
              >
                <span v-if="editing">
                  Cancel
                </span>
                <span v-else>
                  Edit
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateAccount">
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
                :disabled="!editing"
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
                :disabled="!editing"
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
                  :disabled="!editing"
                >
                <div
                  id="passwordHelp"
                  class="form-text"
                >
                  Leave this field blank to keep your current password.
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
                  :disabled="!editing"
                >
                <div
                  id="confirmPasswordHelp"
                  class="form-text"
                >
                  If you are changing your password, please confirm it.
                </div>
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                id="checkboxAcceptTerms"
                type="checkbox"
                class="form-check-input"
                checked
                disabled
              >
              <label
                class="form-check-label"
                for="checkboxAcceptTerms"
              >I accept the terms and conditions</label>
            </div>
            <button
                v-if="editing"
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountPage",
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      editing: false,
      message: '',
      loading: false,
      accountCreated: this.$route.query.accountCreated,
      accountUpdated: false
    }
  },
  created() {
    this.setCurrentVals();
  },
  methods: {
    setCurrentVals() {
      this.user.name = this.$store.state.auth.user.name
      this.user.email = this.$store.state.auth.user.email
    },
    toggleEditing() {
      this.setCurrentVals()
      this.editing = !this.editing
    },
    updateAccount() {
      this.loading = true;

      this.$store.dispatch("auth/updateAccount", this.user).then(
          () => {
            this.user.password = '';
            this.user.confirmPassword = '';

            this.loading = false;
            this.accountUpdated = true;
            this.editing = false;
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

</style>