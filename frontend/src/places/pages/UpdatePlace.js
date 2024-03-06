import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './PlaceForm.css';

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
        creator:'u2'
    },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
