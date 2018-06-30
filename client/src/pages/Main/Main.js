import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";

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
            <hr />

            <List>
              <ListItem>
                <strong>
                Trump chokes out Teen after Teen Bitch Slaps Him
                </strong>
                <SaveBtn/>
              </ListItem>
              <ListItem>
                <strong>
                Man Bitches out on Kiss Cam
                </strong>
                <SaveBtn/>
              </ListItem>
              <ListItem>
                <strong>
                The Pope says "That's Bitchin'"
                </strong>
                <SaveBtn/>
              </ListItem>
            </List>

            <hr />

            <List>
              <ListItem>
                <strong>
                  No Rest for the Bitches
                </strong>
                <DeleteBtn/>
              </ListItem>
              <ListItem>
                <strong>
                  Man Brutally Murdered after calling his Mom a Bitch
                </strong>
                <DeleteBtn/>
              </ListItem>
              <ListItem>
                <strong>
                  Jordan Peterson tells "Snowflake" to "Stop Bitchin'"
                </strong>
                <DeleteBtn/>
              </ListItem>
            </List>
            <br/><br/>
            <hr />



          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;