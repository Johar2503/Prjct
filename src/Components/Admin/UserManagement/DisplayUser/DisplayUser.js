import React from 'react'
import './DisplayUser.css'
import Header from '../../../Header/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
//import 'material-icons/iconfont/material-icons.css';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import AdminHeader from '../../Header/AdminHeader'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




function TablePaginationActions(props) {
  

  return (
   
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
       // onClick={handleFirstPageButtonClick}
        //disabled={page === 0}
        aria-label="first page"
      >
        {/*theme.direction === 'rtl' ? <span className="material-icons">last_page</span> : <span className="material-icons">first_page</span>*/}
      </IconButton>
      <IconButton
        //onClick={handleBackButtonClick}
       // disabled={page === 0}
        aria-label="previous page"
      >
        {/*theme.direction === 'rtl' ? <span className="material-icons">keyboard_arrow_right</span> : <span className="material-icons">keyboard_arrow_left</span>*/}
      </IconButton>
      <IconButton
        //onClick={handleNextButtonClick}
      //  disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {/*theme.direction === 'rtl' ? <span className="material-icons">keyboard_arrow_left</span> : <span className="material-icons">keyboard_arrow_right</span>*/}
      </IconButton>
      <IconButton
        //onClick={handleLastPageButtonClick}
        //disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {/*theme.direction === 'rtl' ? <span className="material-icons">first_page</span> : <span className="material-icons">last_page</span>*/}
      </IconButton>
    </Box>
    
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function DisplayUser() {
  
  const users = [
    {email: "user1@gmail.com", username: 'user1', mobileNumber: '0123456789'},
    {email: "user2@gmail.com", username: 'user2', mobileNumber: '0123456789'},
    {email: "user3@gmail.com", username: 'user3', mobileNumber: '0123456789'},
    {email: "user4@gmail.com", username: 'user4', mobileNumber: '0123456789'},
    {email: "user5@gmail.com", username: 'user5', mobileNumber: '0123456789'},
    {email: "user6@gmail.com", username: 'user6', mobileNumber: '0123456789'},
    {email: "user7@gmail.com", username: 'user7', mobileNumber: '0123456789'},
    {email: "user8@gmail.com", username: 'user8', mobileNumber: '0123456789'},
    {email: "user9@gmail.com", username: 'user9', mobileNumber: '0123456789'},
    {email: "user10@gmail.com", username: 'user10', mobileNumber: '0123456789'}
  ];//.sort((a,b) => a.email.split("@")[1].localeCompare(b.email.split("@")[1]));



  const breadcrumbs = [
    <Typography key="1" color="inherit">
      Admin
    </Typography>,
    <Typography key="2" color="text.primary">
      Users
    </Typography>
  ];


  return (
    <React.Fragment>
    <AdminHeader/>
      <div className="DisplayUser-Nav">
        <Avatar sx={{width: 30, height: 30, marginRight: '8px'}}>
          
        </Avatar>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <TableContainer className="DisplayUser-Table" component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell >Username</TableCell>
              <TableCell >Mobile Number</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delete</TableCell>
            </TableRow>
          </TableHead>
          {
              users.map((user,index)=>{
                return(
                  <TableBody>
                    <TableRow>
                      <TableCell scope='row'>
                        {user.email}
                      </TableCell>
                      <TableCell style={{ width: 160 }} >
                        {user.username}
                      </TableCell>
                      <TableCell style={{ width: 160 }} >
                        {user.mobileNumber}
                      </TableCell>
                      <TableCell style={{ width: 50 }}>
                        <IconButton aria-label="edit" href="/admin/edituser" >
                          <EditIcon sx={{fontSize: '20px'}} /> 
                          <span className="material-icons">edit</span>
                        </IconButton>
                      </TableCell>
                      <TableCell style={{ width: 50 }} >
                        <IconButton aria-label="delete" color="error">
                          <DeleteIcon sx={{fontSize: '20px'}}/> 
                          <span className="material-icons">delete</span>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              }
              )}
          {/*<TableBody>*/}
            
            {/*(rowsPerPage > 0
              ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : users
             ). map((row) => (
              <TableRow >
                <TableCell  scope="row">
                  {row.email}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.username}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.mobileNumber}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.userRole}
                </TableCell>
                <TableCell style={{ width: 50 }} align="right">
                  <IconButton aria-label="edit" >
                     <EditIcon sx={{fontSize: '20px'}} /> 
                    <span className="material-icons">edit</span>
                  </IconButton>
                </TableCell>
                <TableCell style={{ width: 50 }} align="right">
                  <IconButton aria-label="delete" color="error">
                     <DeleteIcon sx={{fontSize: '20px'}}/> 
                    <span className="material-icons">delete</span>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
             */}

            {/*emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )*/}
          {/*</TableBody>*/}
          <TableFooter>
            <TableRow>
              <TablePagination
               // rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={users.length}
               // rowsPerPage={rowsPerPage}
                //page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
               // onPageChange={handleChangePage}
               // onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>


      <Dialog
        //open={deleteModalOpen}
        //onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary">Yes</Button>
          <Button  color="success" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default DisplayUser