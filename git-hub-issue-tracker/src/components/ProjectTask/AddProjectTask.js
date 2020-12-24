import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddProjectTask extends Component {
  constructor(){
    super()
    this.state={
      summary:"",
      acceptanceCriteria:"",
      status:""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(props){
    this.setState({[props.target.name]:props.target.value})
  }
  onSubmit(props){
    props.preventDefault()
    const newProjectTask = {
      summary:this.state.summary,
      acceptanceCriteria:this.acceptanceCriteria,
      status:this.state.status

    }
  }
  render() {
    return (
      <div className="addProjectTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              { <Link to="/" className="btn btn-light">
                Back to Board
              </Link> }
              <h4 className="display-4 text-center">
                Add /Update Issue Task
              </h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="summary"
                    value={this.state.summary}
                    placeholder="Issue Task summary"
                    onChange={this.onChange}
                    
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">To Do</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProjectTask;
