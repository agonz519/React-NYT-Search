import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

class Main extends Component {
  state= {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ saved: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

            <Jumbotron>
              <h1>Read Some Articles Bitch</h1>
            </Jumbotron>

            <h2>Search for Articles</h2>
            <form>
              <Input
                // value={this.state.topic}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                // value={this.state.startYear}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                // value={this.state.endYear}
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
              >
                Search
              </FormBtn>
            </form>

            <br/><br/>
            <hr />

            <h2>Results</h2>
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

            <h2>Saved Articles</h2>
            {this.state.saved.length ? (
              <List>
                {this.state.saved.map(article => (
                  <ListItem key={article._id}>
                    <strong>
                      No Rest for the Bitches
                    </strong>
                    <DeleteBtn/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h4>No Saved Articles</h4>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;