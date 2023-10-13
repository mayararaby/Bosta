import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { packageStatus } from '../../constants';
import './detailsPackage.css';
import withLocalize from '../../hoc/withLocalize';
import { styled } from '@mui/material/styles';
import { columns } from '../../constants';



const DetailsPackage = ({ TransitEvents, t }) => {

  const createData = (branch, date, time, details) => {
    return { branch, date, time, details };
  };

  const createDataRow = TransitEvents.map((event) => {
    const date = new Date(event.timestamp);
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const formattedDate = date.toISOString().slice(0, 10);
    return createData(
      event.hub || t('NaserCity'),
      formattedDate,
      time,
      `${t(packageStatus[event.state])},${event.reason || ''}`
    );
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Cairo',
  }));


  return (
    <div className="detailsPackageContainer">
      <div className='packageInfoTitle'>
        تفاصيل الشحنه
      </div>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ backgroundColor: '#e30613' }}>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell key={column.id} align={column.align}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {createDataRow.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.id === 'details' ? (
                            <span className='detailsTable'>
                              {value.split(',').map((statement, index) => (
                                <div className={value.split(',').length - 1 === index ? 'cancelledPackage' : 'packageInfoTable'}>
                                  {statement}
                                </div>
                              ))}
                            </span>
                          ) : (
                            <div className='packageInfoTable'>{value}</div>
                          )}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default withLocalize(DetailsPackage);