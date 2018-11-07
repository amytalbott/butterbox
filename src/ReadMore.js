import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ReadMore extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const BlogContent = (props) => {
    return (
      <div>
        {props.posts.map( (post, index) =>
              <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
            )
        }
      </div>
    )
    }
    return (
      <div>
        <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>Read more</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              {BlogContent}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ReadMore;
