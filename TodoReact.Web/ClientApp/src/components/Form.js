import { useEffect, useState } from 'react';


const Form = () => {

    const date = Date.now("YYYY-MM-DD");

    return (
        <form>
            <div className="row mt-5">
                <div className="col-9">
                    <label htmlFor="inputTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="inputTitle" placeholder="Enter your title here!" name="title"  />
                </div>
                <div className="col-3">
                    <label htmlFor="inputDate" className="form-label">Date</label>
                    <input type="date" className="form-control" id="inputDate" placeholder="Start Date!" name="enteredDate" />
                </div>
            </div>

            <div className="mb-3 mt-3">
                <label htmlFor="inputDescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="inputDescription" placeholder="Enter your description!" name="description" />
            </div>

            <div className="row">
                <div className="col mt-3">
                    <button type="button" className="btn btn-success mb-3">SAVE</button>
                </div>
                <div className="col mt-3 text-end">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sortRadio" id="sortRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="sortRadio1">OPEN</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sortRadio" id="sortRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="sortRadio2">COMPLETED</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sortRadio" id="sortRadio3" value="option3" />
                        <label className="form-check-label" htmlFor="sortRadio3">ALL</label>
                    </div>
                </div>
            </div>
            <hr />
        </form>   
    );
}


export default Form;