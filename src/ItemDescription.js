import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ItemDescription extends Component {
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
        <Button className="detail-button" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <div>{this.props.description}</div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ItemDescription;
