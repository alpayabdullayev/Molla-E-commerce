import React from 'react'
import { useEffect } from 'react';

function useFetch(url,Calback) {


    useEffect(() => {
        try {
          fetch(url)
            .then((response) => response.json())
            .then((data) => Calback(data));
        } catch (error) {
          console.log('error', error);
        }
      }, [url]);
}


  return (
    <>
    

    

    </>
  )


export default useFetch