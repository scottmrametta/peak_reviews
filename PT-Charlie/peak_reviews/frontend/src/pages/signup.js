import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SignUp = () => {

  // retrieves search results from Discogs API
  const handleSearch = async (event) => {
    event.preventDefault()
    let artist = event.target.artist.value;
    let album = event.target.album.value;

  }

  return (
    <Form onSubmit={handleSearch}>
    <Form.Group className="mb-3" controlId="Artist">
        <Form.Label>Create Username:</Form.Label>
        <Form.Control type="text" placeholder="Username" name="artist"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="album">
        <Form.Label>Create Password:</Form.Label>
        <Form.Control type="text" placeholder="Password" name="album"/>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
  )
}

export default SignUp;