import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import BadgeVisibility from './Counter';

const FoodCard = (props) => {
  const [data, setData] = useState({ hints: [] });
  const [filteredData, setFilteredData] = useState({ hints: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser', {
          params: {
            'nutrition-type': 'cooking',
            'category[0]': 'generic-foods',
            'health[0]': 'alcohol-free',
            page: 1
          },
          headers: {
            'X-RapidAPI-Key': 'fcf5b65ab4mshbb0373fc8ebf3b1p174b61jsnbbd27222dbb5',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
          }
        });

        console.log(response.data);
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const newPage = page + 1;

    try {
      const response = await axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser', {
        params: {
          'nutrition-type': 'cooking',
          'category[0]': 'generic-foods',
          'health[0]': 'alcohol-free',
          page: newPage
        },
        headers: {
          'X-RapidAPI-Key': 'fcf5b65ab4mshbb0373fc8ebf3b1p174b61jsnbbd27222dbb5',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      });

      console.log(response.data);
      const newData = [...data.hints, ...response.data.hints];
      setData({ hints: newData });
      setFilteredData({ hints: newData });
      setPage(newPage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchMoreData();
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data.hints]);

  return (
    <>
      <button className='btn btn-outline-danger m-4'>Filter</button>
      <button className='btn btn-outline-danger m-4'>Price</button>
      <button className='btn btn-outline-danger m-4'>Veg</button>

      <h1 className='m-5'>{props.title}</h1>

      <div className='row'>
        {filteredData.hints.map((item, index) => (
          <div className='col-3 mb-4' key={index}>
            <div className="card m-5" style={{ width: '16rem' }}>
              <img src={item.food.image} className="card-img-top" alt="food1" />
              <strong style={{ textAlign: "center", color: "black" }}>{item.food.label}</strong>
              <b className='m-2' style={{ textAlign: "left", color: "green" }}>Price: {index * 20}/-</b>
              <div className="card-body">
                <h5 className="card-title">{item.food.category}</h5>
                <h6>{item.food.knownAs}</h6>
                <BadgeVisibility />
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.hints.length > 0 && data.hints.length === filteredData.hints.length && (
        <div className="text-center">Loding...</div>
      )}
    </>
  );
}

export default FoodCard;
