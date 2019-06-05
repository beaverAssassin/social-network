import React from "react";
import styles from "./users.module.css";
import { connect } from "react-redux";
import {
  getFilteredUsersReSelector,
  getSearchValue,
  getUsers,
  setFilter,
  setSex,
  statuses
} from "../../redux/usersReducer";

const Users = ({
                 users = [],
                 status,
                 getUsers,
                 onChangeSearchInput,
                 search,
                 setFilter,
                 setSex,
                 isMan,
                 totalUsersCount,
                 pageSize,
                 currentPage
               }) => {

  if (status === statuses.NOT_INITIALIZED) {
    getUsers();
    return <span>...</span>;
  }

  let _filterTimeOutId = null;

  let onChangeSearch = e => {
    let value = e.target.value;
    onChangeSearchInput(value);
    clearTimeout(_filterTimeOutId);

    _filterTimeOutId = setTimeout(() => {
      setFilter(value);
    }, 1000);
  };


  let pagesCount = totalUsersCount / pageSize;
  
  let pages =[];


  for(let i=1;i<pagesCount;i++){
    
     pages.push(i)
    
  }

  return (
    <>
      {!users.length && <span>users not found</span>}
      <input placeholder="search" value={search} onChange={onChangeSearch}/>
      <input
        type="checkbox"
        checked={isMan}
        onChange={e => setSex(e.target.checked)}
      />
      <div>
        {pages.map(p=>{

        return <span className={currentPage === p && styles.selectedPage}>{p}</span>
        })}



      </div>
      {users.map(u => (
        <div key={u.id} className={styles.user}>
          <div>
            <p>{u.name}</p>
            <img alt={u.name} src={u.photos.small}/>
            <p>status:{u.status}</p>
          </div>

        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  users: getFilteredUsersReSelector(state),
  status: getStatus(state),
  search: state.usersPage.search,
  filter: state.usersPage.filter,
  isMan: state.usersPage.isMan,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage:state.usersPage.currentPage
});

const mapDispatchToProps = dispatch => ({
  onChangeSearchInput: event => dispatch(getSearchValue(event)),
  getUsers: () => dispatch(getUsers()),
  setFilter: filter => dispatch(setFilter(filter)),
  setSex: isMan => dispatch(setSex(isMan))
});

const getStatus = state => state.usersPage.status;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
