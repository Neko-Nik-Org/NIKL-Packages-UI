import {useState} from 'react';
import { TextField, Button, Box } from '@radix-ui/themes';


//defining the props for the SearchBar component
interface SearchBarProps {
  data: string[]; // Array of strings to search from
  placeholder?: string  // Optional placeholder text for the input
}

//creating the SearchBar component
export function SearchBar({data, placeholder = "Search..."}: SearchBarProps) {

  //state to hold the search term, first item is the state variable, second is the function to update it
  const [searchTerm, setSearchTerm] = useState('');

  //filter teh data based on the search term
  //this will filter the data array and return only the items that include the search term
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // If the search term is empty, we clear the filteredData array
  if(searchTerm === '') { filteredData.length = 0; }

  return (
    <Box>
      <TextField.Root
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        size="3"
      >
        <TextField.Slot side="right" px="1">
          <Button size="2">Send</Button>
        </TextField.Slot>
      </TextField.Root>




          <ul>
              {filteredData.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>


    </Box>
  )
}