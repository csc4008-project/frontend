<template>
  <div class="card">
    <div class="card-header">
      <div class="row d-flex align-items-center">
        <div class="col">
          <h5 class="mb-0">
            New {{ bookingType !== null ? bookingType : "" }} booking
          </h5>
        </div>
        <div class="col">
          <button
            class="btn btn-danger float-end"
            role="button"
            :class="{ 'invisible' : bookingType === null }"
            @click.prevent="resetWindow()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div
        v-if="error"
        class="alert alert-danger d-flex align-items-center"
        role="alert"
      >
        <div>
          {{ error }}
        </div>
      </div>
      <div
        v-if="bookingType === null"
        class="row"
      >
        <div class="col">
          <div class="card text-bg-light">
            <div class="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20%"
                height="auto"
                fill="currentColor"
                class="bi bi-people-fill mx-auto d-block"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <h5 class="card-title">
                Room booking
              </h5>
              <p class="card-text">
                Create a new room booking for a meeting
              </p>
              <a
                href="#"
                class="btn btn-primary stretched-link"
                @click.prevent="setBookingType('room')"
              >Book room</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-bg-light">
            <div class="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20%"
                height="auto"
                fill="currentColor"
                class="bi bi-pc-display mx-auto d-block"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
              </svg>
              <h5 class="card-title">
                Desk booking
              </h5>
              <p class="card-text">
                Visiting the office soon?  Book a desk within an area of the office
              </p>
              <a
                href="#"
                class="btn btn-primary stretched-link"
                @click.prevent="setBookingType('desk')"
              >Book desk</a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="col"
      >
        <form
          v-if="!success"
          @submit.prevent="createBooking()"
        >
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label
                  class="form-label"
                  for="start_time"
                >Start time</label>
                <input
                  id="start_time"
                  v-model="booking.startTime"
                  class="form-control"
                  type="datetime-local"
                >
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label
                  class="form-label"
                  for="duration"
                >Duration (minutes)</label>
                <input
                  id="duration"
                  v-model="booking.duration"
                  class="form-control"
                  type="number"
                  step="15"
                >
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              class="form-label"
            >Building</label>
            <select
              v-model="booking.buildingId"
              class="form-select mb-3"
              @change="loadFloors()"
            >
              <option
                v-if="buildings.length === 0"
                selected
              >
                Loading...
              </option>
              <option
                v-for="(building, buildingId) in buildings"
                v-else
                :key="buildingId"
                :value="buildingId"
              >
                {{ building.buildingName }}
              </option>
            </select>
          </div>
          <Transition name="slide-fade">
            <div
              v-if="booking.buildingId !== null"
              class="alert alert-primary"
              role="alert"
            >
              <p class="mb-0">
                <strong>{{ buildings[booking.buildingId].buildingName }}</strong>
              </p>
              <p class="mb-0">
                {{ buildings[booking.buildingId].addressLine1 }}
              </p>
              <p class="mb-0">
                {{ buildings[booking.buildingId].addressLine2 }}
              </p>
              <p class="mb-0">
                {{ buildings[booking.buildingId].postcode }}
              </p>
              <p class="mb-0">
                {{ buildings[booking.buildingId].country }}
              </p>
            </div>
          </Transition>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              class="form-label"
            >Floor</label>
            <select
              v-model="booking.floorId"
              class="form-select mb-3"
              :disabled="floors.length === 0"
              @change="loadRoomsAndSpaces()"
            >
              <option
                v-if="floors.length === 0"
                selected
              >
                Select floor
              </option>
              <option
                v-for="(floor, floorId) in floors"
                v-else
                :key="floorId"
                :value="floorId"
              >
                Floor {{ floor.floorNumber }}
              </option>
            </select>
          </div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ 'active' : bookingType === 'room' }"
                href="#"
                @click.prevent="setBookingType('room')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people-fill mx-auto d-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
                Room booking
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ 'active' : bookingType === 'desk' }"
                href="#"
                @click.prevent="setBookingType('desk')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pc-display mx-auto d-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                </svg>
                Desk booking
              </a>
            </li>
          </ul>

          <!-- ROOM BOOKING -->
          <div
            v-if="bookingType === 'room'"
            class="card border-top-0 rounded-0 rounded-bottom mb-3"
          >
            <div class="card-body">
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                >Room</label>
                <select
                  v-model="booking.roomId"
                  class="form-select mb-3"
                  :disabled="rooms.length === 0"
                  @change="validate()"
                >
                  <option
                    v-if="rooms.length === 0"
                    selected
                  >
                    Select room
                  </option>
                  <option
                    v-for="(room, roomId) in rooms"
                    v-else
                    :key="roomId"
                    :value="roomId"
                  >
                    {{ room.roomNumber }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                >Attendees</label>
                <select
                  v-model="booking.attendees"
                  class="form-select mb-3"
                  :disabled="employees.length === 0"
                  multiple
                >
                  <option
                    v-if="employees.length === 0"
                    selected
                  >
                    Select attendees
                  </option>
                  <option
                    v-for="(employee, employeeId) in employees"
                    v-else
                    :key="employeeId"
                    :value="employeeId"
                  >
                    {{ employee.fullName }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- DESK BOOKING -->
          <div
            v-else
            class="card border-top-0 rounded-0 rounded-bottom mb-3"
          >
            <div class="card-body">
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                >Space</label>
                <select
                  v-model="booking.spaceId"
                  class="form-select mb-3"
                  :disabled="spaces.length === 0"
                  @change="loadDesks()"
                >
                  <option
                    v-if="spaces.length === 0"
                    selected
                  >
                    Select space
                  </option>
                  <option
                    v-for="(space, spaceId) in spaces"
                    v-else
                    :key="spaceId"
                    :value="spaceId"
                  >
                    {{ space.spaceName }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                >Desk</label>
                <select
                  v-model="booking.deskId"
                  class="form-select mb-3"
                  :disabled="desks.length === 0"
                  @change="validate()"
                >
                  <option
                    v-if="desks.length === 0"
                    selected
                  >
                    Select desk
                  </option>
                  <option
                    v-for="(desk, deskId) in desks"
                    v-else
                    :key="deskId"
                    :value="deskId"
                  >
                    {{ desk.deskName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="validated !== 1"
          >
            Create booking
          </button>
        </form>
        <div
          v-else
          class="alert alert-success"
          role="alert"
        >
          <h4 class="alert-heading mb-0">
            Success!
          </h4>
          <p>Your booking was successfully created!  See details of your booking below.</p>
          <hr>
          <p class="mb-0"><strong>Start:</strong> {{ booking.startTime }}</p>
          <p class="mb-0"><strong>Duration:</strong> {{ booking.duration }} minutes</p>
          <p class="mb-0"><strong>Type:</strong> {{ bookingType === 'room' ? "Room" : "Desk" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/user.service";
import moment from "moment";

function initialState (){
  return {
    error: null,
    bookingType: null,
    buildings: [],
    floors: [],
    rooms: [],
    employees: [],
    spaces: [],
    desks: [],
    validated: 0,
    success: false,
    booking: {
      startTime: null,
      duration: null,
      buildingId: null,
      floorId: null,
      roomId: null,
      attendees: [],
      spaceId: null,
      deskId: null
    }
  }
}

export default {
  name: "NewBookingPage",
  data() {
    return initialState()
  },
  created() {
    this.loadBuildings();
    this.loadEmployees();
  },
  methods: {
    setBookingType(type) {
      if (this.bookingType === null) {
        this.loadBuildings()
      }

      this.bookingType = type
    },
    loadBuildings() {
      this.buildings = []

      UserService.listBuildings().then(
          response => {
            this.buildings = response.data.buildings;
          },
          error => {
            this.error =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    },
    loadEmployees() {
      this.employees = [];

      UserService.listEmployees().then(
          response => {
            this.employees = response.data.employees;
          },
          error => {
            this.error =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    },
    loadFloors() {
      this.floors = [];

      UserService.listFloors(this.booking.buildingId).then(
          response => {
            this.floors = response.data.floors;
          },
          error => {
            this.error =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    },
    loadRoomsAndSpaces() {
      this.loadRooms();
      this.loadSpaces();
    },
    loadRooms() {
      this.rooms = [];

      UserService.listRooms(this.booking.floorId).then(
          response => {
            this.rooms = response.data.rooms;
          },
          error => {
            this.error =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    },
    loadSpaces() {
      this.rooms = [];

      UserService.listSpaces(this.booking.floorId).then(
          response => {
            this.spaces = response.data.spaces;
          },
          error => {
            this.error =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    },
    loadDesks() {
      this.rooms = [];

      UserService.listDesks(this.booking.spaceId).then(
          response => {
            this.desks = response.data.desks;
          },
          error => {
            this.error =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    },
    validate() {
      if (this.booking.startTime && this.booking.duration && this.booking.buildingId && this.booking.floorId) {
        if (this.bookingType === 'room') {
          if (this.booking.roomId) {
            this.validated = 1;
            return;
          }
        }
        if (this.bookingType === 'desk') {
          if (this.booking.deskId) {
            this.validated = 1;
            return;
          }
        }
      }

      this.validated = 0;
    },
    resetWindow() {
      Object.assign(this.$data, initialState());
    },
    createBooking() {
      var booking = {
        'start': moment(this.booking.startTime).format('YYYY-MM-DD HH:mm:ss.SSSSSSSSS'),
        'duration': this.booking.duration,
      }

      if (this.bookingType === 'room') {
        booking.room_id = this.booking.roomId;
        booking.attendees = this.booking.attendees;
      } else {
        booking.desk_id = this.booking.deskId
      }

      UserService.createBooking(booking).then(
          () => {
            this.success = true;
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
  },
}
</script>

<style scoped>

</style>