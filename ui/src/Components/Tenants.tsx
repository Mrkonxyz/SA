import { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";

import Box from "@material-ui/core/Box";

import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";

import TableCell from "@material-ui/core/TableCell";

import TableContainer from "@material-ui/core/TableContainer";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

import { UsersInterface } from "../models/ITenant";

import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { marginTop: theme.spacing(2) },

    table: { minWidth: 1000 },

    tableSpace: { marginTop: 30 },
  })
);

function Tenants() {
  const classes = useStyles();
  const [users, setUsers] = useState<UsersInterface[]>([]);
  const apiUrl = "http://localhost:8080";
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };
  const getUsers = async () => {
    fetch(`${apiUrl}/tenants`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setUsers(res.data);
        } else {
          console.log("else");
        }
      });
  };

  useEffect(() => {
    
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container className={classes.container}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              ???????????????????????????????????????
            </Typography>
          </Box>

          <Box>
            <Button
              component={RouterLink}
              to="/Create"
              variant="contained"
              color="primary"
            >
              ?????????????????????????????????????????????????????????
            </Button>
          </Box>
        </Box>

        <TableContainer component={Paper} className={classes.tableSpace}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" width="5%">
                  ID
                </TableCell>
                <TableCell align="center" width="8%">
                  ????????????????????????
                </TableCell>

                <TableCell align="center" width="20%">
                  ????????????-?????????????????????
                </TableCell>

                <TableCell align="center" width="5%">
                  ????????????
                </TableCell>
                <TableCell align="center" width="5%">
                  ?????????
                </TableCell>
                <TableCell align="center" width="10%">
                  ?????????????????????
                </TableCell>

                <TableCell align="center" width="10%">
                  ???????????????????????????????????????
                </TableCell>

                <TableCell align="center" width="10%">
                  ??????????????????????????????????????????????????????
                </TableCell>
                <TableCell align="center" width="5%">
                  ???????????????
                </TableCell>
                <TableCell align="center" width="20%">
                  ?????????????????????
                </TableCell>
                <TableCell align="center" width="20%">
                  Email
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user: UsersInterface) => (
                <TableRow key={user.ID}>
                  <TableCell align="right">{user.ID}</TableCell>

                  <TableCell align="left" size="medium">
                    {user.Prefix.Name}
                  </TableCell>

                  <TableCell align="left">{user.Name}</TableCell>

                  <TableCell align="left">{user.Age}</TableCell>

                  <TableCell align="left">{user.Gender.Name}</TableCell>

                  <TableCell align="center">
                    {moment(user.BirthDay).format("DD/MM/YYYY")}
                  </TableCell>

                  <TableCell align="left">{user.Tel}</TableCell>

                  <TableCell align="left">{user.Idcard}</TableCell>
                  <TableCell align="left">{user.Career.Name}</TableCell>
                  <TableCell align="left">
                    {user.Address} ???.{user.Village} ???.{user.Canton.Name} ???.
                    {user.Canton.Prefecture.Name} ???.
                    {user.Canton.Prefecture.Province.Name}
                  </TableCell>
                  <TableCell align="left">{user.Email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Tenants;
