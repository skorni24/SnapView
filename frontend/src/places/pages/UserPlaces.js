import React from "react";
import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Taj Mahal',
        description:'One of the most famous monuments in the world!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/375px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
        address:'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India',
        location: {
            lat:27.1751448,
            lng:78.0421422
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Charminar',
        description:'Historical place in Hyderabad, India!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Charminar_sumeet_photography_3.JPG/330px-Charminar_sumeet_photography_3.JPG',
        address:'Charminar, Hyderabad, Telangana 500002, India',
        location: {
            lat:17.3616,
            lng:78.4747
        },
        creator:'u1'
    },
]
const UserPlaces = () => {
        return <PlaceList items={DUMMY_PLACES} />; 
};

export default UserPlaces; 