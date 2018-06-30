import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";

class Main extends Component {
  state= {
    topic: "",
    startYear: "",
    endYear: ""
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

            <Jumbotron>
              <h1>Read Some Articles Bitch</h1>
            </Jumbotron>

            <form>
              <Input
                value={this.state.title}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.endYear}
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
              >
                Search for Articles
              </FormBtn>
            </form>
            <br/><br/>
            <List>
              <ListItem>
                Article 1
              </ListItem>
              <ListItem>
                Article 2
              </ListItem>
              <ListItem>
                Article 3
              </ListItem>
            </List>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;