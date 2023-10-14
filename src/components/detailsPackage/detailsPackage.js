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
import { useSelector } from 'react-redux';

const DetailsPackage = ({ TransitEvents, t }) => {

  // return rows
  const createData = (branch, date, time, details) => {
    return { branch, date, time, details };
  };

  //Table data rows from TransitEvents
  const createDataRow = TransitEvents.map((event) => {
    // get date and time separated from timestamp
    const date = new Date(event.timestamp);
    const time = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const formattedDate = date.toISOString().slice(0, 10);
    return createData(
      event.hub || 'Naser City',
      formattedDate,
      time,
      `${t(packageStatus[event.state])},${event.reason || ''}`
    );
  });

  // custom font family style
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontFamily: 'Cairo',
  }));

  const selectedLanguage = useSelector(state => state.local)

  return (
    <div className="detailsPackageContainer detailsPackageContainerTables">
      <div className='packageInfoTitle'>
        {t('packageDetails')}
      </div>
      <div className='tableContainer'>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ backgroundColor: '#f4f2f2' }}>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell key={column.id} align={`${selectedLanguage === 'ar' ? column.align : 'left'}`} sx={{ fontWeight: 'bold', color: '#9e9c9c' , backgroundColor: '#f4f2f2'}}>
                      {t(column.label)}
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
                          <StyledTableCell key={column.id} align={`${selectedLanguage === 'ar' ? column.align : 'left'}`}>
                            {column.id === 'details' ? (
                              <span className='detailsTable'>
                                {value.split(',').map((statement, index) => (
                                  <div className={value.split(',').length - 1 === index ? 'cancelledPackage' : 'packageInfoTable'}>
                                    {statement}
                                  </div>
                                ))}
                              </span>
                            ) : column.id === 'time'?value.split(' ').map((statement,index)=>(
                              <span className='packageInfoTableTime'>{(statement ==='AM' || statement ==='PM')?t(statement):statement}</span>
                            ))
                            : (
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
    </div>
  );
};

export default withLocalize(DetailsPackage);