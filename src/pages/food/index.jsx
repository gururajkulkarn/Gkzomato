import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BadgeVisibility from '../Counter';
import emailjs from 'emailjs-com'; // Import emailjs-com library

const Myfood = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]); // State to store selected items

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/food')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all the data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = data.filter((restaurant) =>
      restaurant.menu_items.some((item) =>
        item.item_name.toLowerCase().includes(searchTerm)
      )
    );
    setFilteredData(filtered);
  };

  // Function to handle item selection and update selectedItems state
  const handleAddItem = (item) => {
    setSelectedItems((prevSelected) => [...prevSelected, item]);
  };

  // Function to calculate total price of selected items
  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.item_price, 0);
  };

  // Function to generate the order table HTML
  const generateOrderTable = (items) => {
    let html = '<table className="table container"><thead><tr><th>Si No</th><th>Item Name</th><th>Price</th></tr></thead><tbody>';

    items.forEach((item, index) => {
      html += `
          <tbody>
        <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;${index + 1}</td>
                <td>${item.item_name}</td>
                <td>${item.item_price}/-</td>
              </tr>
           </tbody>
    
      `;
    });

    html += `
    </tbody className="table container"><tfoot><tr><td><b>Total Price:</b></td><td><b>${calculateTotalPrice()}/-</b></td></tr></tfoot></table>
    
    
    
    `;
    return html;
  };

  // Rest of the code remains the same...


  // Function to handle order submission
  const handleOrder = () => {
    alert("Your Order is Successfull")
    const orderDetails = generateOrderTable(selectedItems);

    // Replace 'YOUR_MAILJS_USER_ID', 'YOUR_MAILJS_TEMPLATE_ID', and 'YOUR_SERVICE_ID' with your actual MailJS credentials
    emailjs
      .send(
        'service_29qj1by', // Your service ID from email.js
        'template_igs91mr', // Your template ID from email.js
        {
          to_email: 'gururajkulkarni115@gmail.com', // Replace with the recipient email address
          order_details: orderDetails, // Pass the generated table as a template variable
          message: 'Thank you for your order', // You can provide a default message
        },

        '8YQbNe9rNDYM8hv8i' // Your user ID from email.js
      )
      .then(
        (response) => {
          console.log('Email sent:', response.text);
          // Show a success message to the user or perform other actions as needed
        },
        (error) => {
          console.error('Error sending email:', error);
          // Show an error message to the user or perform error handling as needed
        }
      );
  };


  return (
    <>
      <div className="container m-5">
        <input
          type="text"
          className="form-control ml-5"
          onChange={handleFilterChange}
          placeholder="Search Your Food"
          style={{border:"2px solid black"}}
        />
      </div>

      {filteredData.map((restaurant) => (
        <div key={restaurant.id}>
          {/* <h1>{restaurant.restaurant_name}</h1>
          <h1>{restaurant.restaurant_address}</h1>
          <h1>{restaurant.restaurant_phone}</h1> */}

          <div className="row">
            {restaurant.menu_items
              .filter((item) => item.item_name.toLowerCase().includes(searchTerm))
              .map((item, index) => (
                <div className="col-3 mb-4 m-3" key={index}>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={item.item_photo} className="card-img-top" alt="food1" width="100px" height="200px" />
                    <strong style={{ textAlign: 'center', color: 'black' }}>{item.item_name}</strong>
                    <b className="m-2" style={{ textAlign: 'left', color: 'green' }}>
                      Price: {item.item_price}/-
                    </b>
                    <div className="card-body">
                      <h5 className="card-title">{item.item_description}</h5>
                      <button
                        onClick={() => handleAddItem(item)}
                        style={{ border: '0px white', width: '0px', height: '0px' }}
                      >
                        <BadgeVisibility />
                      </button>
                      {/* Add button */}
                    </div>
                    <div>
                      <h6>Rating: {restaurant.ratings.average_rating}</h6>
                      <span>
                        <h6>Reviews: {restaurant.ratings.total_reviews}</h6>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Display selected items and total price in a new table */}
      <div>
        <h2>Selected Items:</h2>
        <table className="table container">
          <thead>
            <tr>
              <th>Si No</th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.item_name}</td>
                <td>{item.item_price}/-</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Price:</td>
              <td>{calculateTotalPrice()}/-</td>
              <td>
                <button onClick={handleOrder} className='btn btn-success'>Order</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Myfood;
