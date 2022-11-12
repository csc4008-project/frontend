<template>
  <div class="card">
    <div class="card-header">
      Bookings
    </div>
    <div class="card-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              #
            </th>
            <th scope="col">
              Type
            </th>
            <th scope="col">
              Location
            </th>
            <th scope="col">
              Start
            </th>
            <th scope="col">
              End
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(value, key) in bookings"
            :key="key"
          >
            <th scope="row">
              {{ key }}
            </th>
            <td v-if="value.type === 'Room'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
              </svg>
            </td>
            <td v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
              </svg>
            </td>
            <td>{{ value.location }}</td>
            <td>{{ value.startTime }}</td>
            <td>{{ value.endTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: "AboutPage",
  data(){
    return{
      bookings: {
        100: {
          location: "BEL.01.46",
          startTime: format(new Date(2014, 1, 11), 'PPpp'),
          endTime: format(new Date(2014, 1, 11), 'PPpp'),
          type: "Room",
          attendees: [ "John Doe", "Mary Smith" ],
        },
        101: {
          location: "BEL.04.26",
          startTime: format(new Date(2014, 1, 11), 'PPpp'),
          endTime: format(new Date(2014, 1, 11), 'PPpp'),
          type: "Desk",
        },
        102: {
          location: "BEL.03.19",
          startTime: format(new Date(2014, 1, 11), 'PPpp'),
          endTime: format(new Date(2014, 1, 11), 'PPpp'),
          type: "Room",
          attendees: [ "Phillip McLoughlin", "Mary Smith" ],
        },
      }
    }
  }
}
</script>

<style scoped>

</style>