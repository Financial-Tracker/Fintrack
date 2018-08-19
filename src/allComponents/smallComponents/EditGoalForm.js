import React, { Component } from 'react'

export default class EditGoalForm extends Component {
  render() {
    return (
      <div className="panel panel-default">
      <div className="panel-heading main-color-bg">
  <h3 className="panel-title">Edit Page</h3>
  </div>
  <div className="panel-body">
  <form>
      <div className="form-group">
      <label>Page Title</label>
      <input type="text" className="form-control" placeholder="Page Title" value="About" />
      </div>
      <div className="form-group">
      <label>Page Body</label>
      <textarea name="editor1" className="form-control" placeholder="Page Body" value='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>
      </textarea>
      </div>
      <div className="checkbox">
      </div>
      <div className="form-group">
      <label>Meta Tags</label>
      <input type="text" className="form-control" placeholder="Add Some Tags..." value="tag1, tag2" />
      </div>
      <div className="form-group">
      <label>Meta Description</label>
      <input type="text" className="form-control" placeholder="Add Meta Description..." value="  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et "/>
      </div>
      <input type="submit" className="btn btn-default" value="Submit" />
  </form>
  </div>
  </div>
    )
  }
}
