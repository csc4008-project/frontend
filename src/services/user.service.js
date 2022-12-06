import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_ROOT_API;

class UserService {
    listBookings() {
        return axios.get(API_URL + 'listBookings', { headers: authHeader() });
    }

    listBuildings() {
        return axios.get(API_URL + 'findBuildings', { headers: authHeader() });
    }

    listEmployees() {
        return axios.get(API_URL + 'listEmployees', { headers: authHeader() });
    }

    listFloors(buildingId) {
        return axios.post(API_URL + 'findFloors', { 'building_id': buildingId }, { headers: authHeader() });
    }

    listRooms(floorId) {
        return axios.post(API_URL + 'listRooms', { 'floor_id': floorId }, { headers: authHeader() });
    }

    listSpaces(floorId) {
        return axios.post(API_URL + 'listSpaces', { 'floor_id': floorId }, { headers: authHeader() });
    }

    listDesks(spaceId) {
        return axios.post(API_URL + 'listDesks', { 'space_id': spaceId }, { headers: authHeader() });
    }

    createBooking(booking) {
        return axios.put(API_URL + 'createBooking', booking, { headers: authHeader() });
    }

    deleteBooking(bookingId) {
        return axios.post(API_URL + 'deleteBooking', { 'booking_id': parseInt(bookingId) }, { headers: authHeader() });
    }
}

export default new UserService();
