import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddAlbumReview = () => {

  
  const handleSearch = async (event) => {
    event.preventDefault()
    let artist = event.target.artist.value;
    let album = event.target.album.value;

  }

  return (
    <Form onSubmit={handleSearch}>
    <Form.Group className="mb-3" controlId="Artist">
        <Form.Label>Artist:</Form.Label>
        <Form.Control type="text" placeholder="Artist / Band Name" name="artist"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="album">
        <Form.Label>Album:</Form.Label>
        <Form.Control type="text" placeholder="Album Title" name="album"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="album">
        <Form.Label>Album Review:</Form.Label>
        <Form.Control type="text" placeholder="Album Review" name="albumreview"/>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
  )
}

export default AddAlbumReview;