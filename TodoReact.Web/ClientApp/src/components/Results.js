import { useEffect, useState } from 'react';


const Results = ({ data }) => {

    const res = data.map(i => {
        return <div className="bg-light border p-2 rounded mb-2" key={i.id}>
                    <div className="fw-bold"><i className="fa-regular fa-bookmark"></i> {i.title}</div>
                    <div className="fst-italic">{i.description}</div>
                    <div className="row mt-1">
                        <div className="col-2 mt-2 fw-bold"><i className="fa-solid fa-calendar-days"></i> {i.startDate}</div>
                        <div className="col-1 mt-2 fw-bold text-center">|</div>
                        <div className="col-2 mt-2 fw-bold">{i.completedDate}</div>
                        <div className="col text-end">
                            <a className="btn btn-link"><i className="fa-solid fa-check"></i> COMPLETE</a>|
                            <a className="btn btn-link"><i className="fa-regular fa-trash-can"></i> DELETE</a>
                        </div>
                    </div>
               </div>
    });

    return (
            <div>
                {res}
            </div>        
    );
}


export default Results;