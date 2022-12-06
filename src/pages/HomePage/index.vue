<template>
  <div class="row mb-3">
    <div class="col-md mb-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            height="auto"
            fill="currentColor"
            class="bi bi-calendar-date mx-auto d-block"
            viewBox="0 0 16 16"
          >
            <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>

          <h5 class="card-title mt-3">
            Bookings
          </h5>
          <p class="card-text">
            Create a booking for a meeting room or a desk.  You can also modify your existing bookings.
          </p>
          <router-link
            to="/bookings/rooms"
            class="btn btn-primary me-2"
          >
            Room bookings
          </router-link>
          <router-link
            to="/bookings/desks"
            class="btn btn-primary"
          >
            Desk bookings
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-md mb-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            height="auto"
            fill="currentColor"
            class="bi bi-graph-up mx-auto d-block"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
            />
          </svg>
          <h5 class="card-title mt-3">
            Utilization
          </h5>
          <p class="card-text">
            See the current utilization of buildings.  Managers can also see trends over time.
          </p>
          <a
            href="#"
            class="btn btn-primary disabled"
            aria-disabled="true"
          >Coming soon...</a>
        </div>
      </div>
    </div>
    <div class="col-md mb-3">
      <div class="card text-bg-light">
        <div class="card-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            height="auto"
            fill="currentColor"
            class="bi bi-shield-shaded mx-auto d-block"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
            />
          </svg>
          <h5 class="card-title mt-3">
            Security
          </h5>
          <p class="card-text">
            View the CCTV of the building along side current bookings.
          </p>
          <a
            href="#"
            class="btn btn-primary disabled"
            aria-disabled="true"
          >Coming soon...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>