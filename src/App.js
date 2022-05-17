

import { Container, Grid, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPrizeWinnerData, onFilterApplied } from './actions/AppAction';
import './App.css';
import CustomCard from "./Components/Common/CustomCard";

function App() {
  const dispatch = useDispatch();

  const [filterYear, setFilterYear] = useState("Year");
  const [filterCategory, setFilterCategory] = useState("Category");

  const { prizes, years, categories } = useSelector(
    ({ AppReducer }) => ({
      prizes: AppReducer.prizeWinners,
      years: AppReducer.winneryears,
      categories: AppReducer.winnerCategories,
    })
  );

  useEffect(() => {
    dispatch(getPrizeWinnerData());
  }, []);

  const onFilterChange = (e, filterType) => {
    // dispatch Action on Filter Change,
    if(filterType === "year"){
      setFilterYear(e.target.value);
    }else{
      setFilterCategory(e.target.value)
    }
    dispatch(onFilterApplied(filterType, e.target.value));
  }

  return (
    <div className="App">

      <Container maxWidth="lg" className="main-container">
        <div className='filters-container'>
          <span>Filters:</span>
          <Select
            labelId="years-filter-label"
            id="years-filter-id"
            value={filterYear}
            label="Year"
            onChange={(e) => onFilterChange(e, "year")}
          >
            {
              years.map((yr) => {
                return (
                  <MenuItem value={yr}>{yr}</MenuItem>
                )
              })
            }
          </Select>
          <Select
            labelId="category-filter-label"
            id="category-filter-id"
            value={filterCategory}
            label="Year"
            onChange={(e) => onFilterChange(e, "category")}
          >
            {
              categories.map((category) => {
                return (
                  <MenuItem value={category}>{category}</MenuItem>
                )
              })
            }
          </Select>
        </div>
        <br/>
        <div className='card-container'>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {prizes.length>0 && prizes.map((winner, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <CustomCard firstName={winner?.category} 
                lastName={winner?.category} 
                categoryWon={winner.category} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
