import React, { useEffect, useState } from 'react'

function Fetch1() {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData.message);
          // check the console to see that the message is the parameter from API
          // which is showing us the picture
          // it means picture is stored in data base under the message key
          console.log(apiData)
        });
        
    }, []);

    
    return (
      <div>
      <h1>Fecth Method 1</h1>
      <p>This Fetch method does not need to install anything else like npm modules</p>
        <img width={500} src={data} />
      </div>
    );
  }

export default Fetch1