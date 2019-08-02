import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './HistoryComponent.scss';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 650,
//   },
// }));


const historyComponent = props => {
    const liObj = props.histry.map((el, index) => {
        return (<TableRow key={index}>
            <TableCell align="center">{el.guss}</TableCell>
            <TableCell align="center" className="cowCount">{el.cowCount}</TableCell>
            <TableCell align="center" className="bullCount">{el.bullCount}</TableCell>
        </TableRow>);
    });

    return(
        <React.Fragment>
        <Paper className="root">
            <Table className="table">
                <TableHead>
                <TableRow>
                    <TableCell align="center"> Guss </TableCell>
                    <TableCell align="center">Cow Count</TableCell>
                    <TableCell align="center">Bull Count</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {liObj.reverse()}
                </TableBody>
            </Table>
        </Paper>
        </React.Fragment>
    );
}

export default historyComponent;