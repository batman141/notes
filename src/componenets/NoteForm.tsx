import CreatableReactSelect from "react-select/creatable";
import { Col, Form, Row, Stack } from "react-bootstrap";

function NoteForm() {
  return (
    <div>
      {/* <form>
        <label id="hola">Hello</label>
        <input type="text" name="hola" id="hola" />
      </form> */}
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect isMulti />
              </Form.Group>
            </Col>
          </Row>
        </Stack>
      </Form>
    </div>
  );
}

export default NoteForm;
