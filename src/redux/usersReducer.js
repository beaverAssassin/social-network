import axios from "../dal/axios-instance";
import { createSelector } from "reselect/lib/index";

const SET_USERS = "USERS/SET_USERS";
const SET_STATUS = "USERS/SET_STATUS";
const GET_VALUE = "USERS/GET_VALUE";
const SET_FILTER = "USERS/SET_FILTER";
const SET_SEX = "USERS/SET_SEX";

export const statuses = {
  NOT_INITIALIZED: "NOT_INITIALIZED",
  ERROR: "ERROR",
  INPROGRESS: "INPROGRESS",
  CAPTCHAREQUIRED: "CAPTCHAREQUIRED",
  SUCCES: "SUCCES"
};


let stateForUsers = {
  pageSize: 5,
  totalUsersCount: 20,
currentPage:1,
  filter: "",
  status: statuses.NOT_INITIALIZED,
  items: [],
  search: "",
  isMan: false,

};


export const setUsers = (users) => ({ type: SET_USERS, users });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getSearchValue = (sym) => ({ type: GET_VALUE, sym });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const setSex = (isMan) => ({ type: SET_SEX, isMan });


export const getUsers = (dispatch) => (dispatch) => {
  dispatch(setStatus(statuses.INPROGRESS));
  axios.get("users?count=40").then(r => {
    dispatch(setStatus(statuses.SUCCESS));
    dispatch(setUsers(r.data.items));
  });
};


const UsersReducer = (state = stateForUsers, action) => {
  switch (action.type) {
    case SET_STATUS: {

      return {
        ...state,
        status: action.status
      };

    }
    case SET_USERS: {

      return {
        ...state,
        items: action.users
      };
    }
    case GET_VALUE: {

      return {

        ...state,
        search: action.sym

      };


    }
    case SET_FILTER: {

      return {
        ...state,
        filter: action.filter

      };
    }
    case SET_SEX: {

      return {
        ...state,
        isMan: action.isMan

      };
    }
    default: {
      return state;
    }
  }
};
const getUserSelector = (state) => state.usersPage.items;
const getFilterSelector = (state) => state.usersPage.filter;

export const getFilteredUsersReSelector = createSelector(
  getUserSelector,
  getFilterSelector,
  (users, filter) => {

    let newFilteredUsers = users.filter(user => user.name.toUpperCase().indexOf(filter.toUpperCase()) > -1);

    return newFilteredUsers;
  }
);

export const getFilteredUsersSelector = (state) => {
  return state.usersPage.items;

};

export default UsersReducer;
