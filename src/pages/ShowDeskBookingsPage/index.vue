<template>
  <div>
    <div
      v-if="inspectBookingId !== null"
      class="row mb-3"
    >
      <div class="col">
        <button
          type="button"
          class="btn btn-primary"
          @click="inspectBookingId = null"
        >
          Back
        </button>
      </div>
    </div>
    <div class="card">
      <div
        v-if="inspectBookingId === null"
        class="card-header"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pc-display"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
        </svg>
        Desk bookings
      </div>
      <div
        v-else
        class="card-header"
      >
        Booking #{{ inspectBookingId }}
      </div>
      <div class="card-body">
        <div
          v-if="message"
          class="alert alert-success"
          role="alert"
        >
          {{ message }}
        </div>
        <div
          v-if="error"
          class="alert alert-danger"
          role="alert"
        >
          {{ error }}
        </div>
        <table
          v-if="inspectBookingId === null"
          class="table table-hover"
        >
          <thead>
            <tr>
              <th scope="col">
                #
              </th>
              <th scope="col">
                Desk
              </th>
              <th scope="col">
                Start
              </th>
              <th
                scope="col"
                colspan="2"
              >
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="fetching">
              <td colspan="6">
                <div class="d-flex justify-content-center">
                  <div
                    class="spinner-border"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr
              v-for="(booking, bookingId) in bookings"
              v-else
              :key="bookingId"
              class="align-middle"
            >
              <th scope="row">
                {{ bookingId }}
              </th>
              <td>{{ booking.room !== null ? booking.room.roomNumber : booking.desk.deskName }}</td>
              <td>{{ moment(booking.start_time).fromNow() }}</td>
              <td>{{ booking.duration }} minutes</td>
              <td>
                <button
                  type="button"
                  class="btn btn-info me-2"
                  @click="inspectBookingId = bookingId"
                >
                  Info
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deleteBooking(bookingId)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <div class="row">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              Room booking
            </p>
          </div>
          <div class="row">
            <div class="col">
              <p class="mb-0">
                <strong>Starts</strong>
              </p>
              <p>
                {{ moment(bookings[inspectBookingId].start_time).format("dddd, MMMM Do YYYY, h:mm:ss a") }} ({{ moment(bookings[inspectBookingId].start_time).fromNow() }})
              </p>
            </div>
            <div class="col">
              <p class="mb-0">
                <strong>Ends</strong>
              </p>
              <p>
                {{ moment(bookings[inspectBookingId].start_time).add(bookings[inspectBookingId].duration, 'minutes').format("dddd, MMMM Do YYYY, h:mm:ss a") }} ({{ bookings[inspectBookingId].duration }} minutes)
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="mb-0">
                <strong>Desk</strong>
              </p>
              <p>{{ bookings[inspectBookingId].desk.deskName }}</p>
            </div>
            <div class="col">
              <p class="mb-0">
                <strong>Space</strong>
              </p>
              <p>Floor {{ bookings[inspectBookingId].desk.space.spaceName }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="mb-0">
                <strong>Floor</strong>
              </p>
              <p>Floor {{ bookings[inspectBookingId].desk.space.floor.floorNumber }}</p>
            </div>
            <div class="col">
              <p class="mb-0">
                <strong>Building</strong>
              </p>
              <p class="mb-0">
                {{ bookings[inspectBookingId].desk.space.floor.building.buildingName }}
              </p>
              <p class="mb-0">
                {{ bookings[inspectBookingId].desk.space.floor.building.addressLine1 }}
              </p>
              <p class="mb-0">
                {{ bookings[inspectBookingId].desk.space.floor.building.addressLine2 }}
              </p>
              <p class="mb-0">
                {{ bookings[inspectBookingId].desk.space.floor.building.postcode }}
              </p>
              <p>{{ bookings[inspectBookingId].desk.space.floor.building.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/user.service";
import moment from "moment";

export default {
  name: "ShowDeskBookingsPage",
  data() {
    return {
      bookings: null,
      fetching: false,
      inspectBookingId: null,
      message: null,
      error: null,
      moment
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  async mounted() {
    await this.loadBookings()
  },
  methods: {
    async loadBookings() {
      this.fetching = true

      UserService.listBookings().then(
          response => {
            this.bookings = {}
            for (var bookingId in response.data.booking) {
              if (Object.prototype.hasOwnProperty.call(response.data.booking, bookingId)) {
                if (response.data.booking[bookingId].desk !== null)
                  this.bookings[bookingId] = response.data.booking[bookingId]
              }
            }
          },
          error => {
            this.content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );

      var that = this;

      setTimeout(function () {
        that.fetching = false
      }, 1000)
    },
    deleteBooking(bookingId) {
      UserService.deleteBooking(bookingId).then(
          () => {
            this.message = "Delete booking #" + bookingId;
            this.loadBookings();
          },
          error => {
            this.error =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    }
  }
}
</script>

<style scoped>

</style>