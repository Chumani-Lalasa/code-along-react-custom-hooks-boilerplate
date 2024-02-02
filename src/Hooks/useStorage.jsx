import React, { useState } from 'react';

const useStorage = (key,initialValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
    const setStorage = (data) => {
        localStorage.setItem(key,JSON.stringify(data))
        sessionStorage.setItem(key,JSON.stringify(data))
    }
  return [storedValue,setStorage];
}

export default useStorage;
