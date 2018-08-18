import React, { Component } from 'react'

export default class ModalsForm extends Component {
render() {
    return (
    <div>
    <div className="modal fade" id="addPage" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
        <form>
        <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add Page</h4>
        </div>
        <div className="modal-body">
        <div className="form-group">
            <label>Page Title</label>
            <input type="text" className="form-control" placeholder="Page Title" />
        </div>
        <div className="form-group">
            <label>Page Body</label>
            <textarea name="editor1" className="form-control" placeholder="Page Body" ></textarea>
        </div>
        <div className="checkbox">
            <label>
            <input type="checkbox" /> Published
            </label>
        </div>
        <div className="form-group">
            <label>Meta Tags</label>
            <input type="text" className="form-control" placeholder="Add Some Tags..." />
        </div>
        <div className="form-group">
            <label>Meta Description</label>
            <input type="text" className="form-control" placeholder="Add Meta Description..." />
        </div>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
    </form>
    </div>
    </div>
</div>
    </div>
    )
}
}
