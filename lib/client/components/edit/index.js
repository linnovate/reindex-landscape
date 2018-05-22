/*
 * ChildrenData
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Designer, {Text, Rectangle} from 'react-designer';


export class EditComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { objects: [
      {type: "text", x: 10, y: 20, text: "Hello!", fill: "red"},
      {type: "rect", x: 50, y: 70, fill: "red"}
    ]
  };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectorFiles)
  {
      console.log('selectorFilesss ',selectorFiles);
  }

  render() {
    return (
      <div>Upload Image
      <input type="file" onChange={ (e) => this.handleChange(e.target.files) } />
      <Designer width={250} height={350}
        objectTypes={{
          'text': Text,
          'rect': Rect
        }}
        onUpdate={(objects) => this.setState({objects})}
        objects={this.state.objects} />
      </div>
    );
  }
}


EditComponent.propTypes = {
};

export function mapStateToProps(state) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);

