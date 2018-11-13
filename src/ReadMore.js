import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';

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
    return (
      <div>
        <Button className="read-more-button" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Read more</Button>
        <Collapse isOpen={this.state.collapse}>
          <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}/>
        </Collapse>
      </div>
    );
  }
}

export default ReadMore;
