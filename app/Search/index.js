import React from 'react';
import Search from '../mag/Search'
import Browse from './Browse'
import { Stack } from "expo-router";
export default function Library() {
  return (
      <>
  
          <Search/>
          <Browse/>
      
      </>
  );
}