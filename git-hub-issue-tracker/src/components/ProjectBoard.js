import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectTaskItem from "./ProjectTask/ProjectTaskItem";

class ProjectBoard extends Component {
 
  render() {

    return (
      <div className="container">
        { <Link to="/addProjectTask" className="btn btn-primary mb-3">
          <h8 class="fas fa-plus-circle"> Create Issue</h8>
        </Link> }
        <br />
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-secondary text-white">
                  <h3>To Do</h3>
                </div>
              </div>
              {
                
              }{" "}
              
              <ProjectTaskItem/>
              {
                
              }{" "}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white">
                  <h3>In Progress</h3>
                </div>
              </div>
              {
               
              }
              <ProjectTaskItem/>
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Done</h3>
                </div>
              </div>
              {
                
              }
              <ProjectTaskItem/>
            </div>
          </div>
        </div>
        {
          
        }{" "}
      </div>
    );
  }
}

export default ProjectBoard;
