import React from 'react'

function Performance() {
    return (
        <div className="perfomance-table">
            <div className="perfomance-fields">
                <small>80%</small>
                <div className="progres" style={{height:'80%', backgroundColor:'#00FF00'}}></div>
                <small>presure</small>
            </div>
            <div className="perfomance-fields">
                <div className="percentage" >20</div>
                <div className="progres" style={{height:'20%', backgroundColor:'red'}}>

                </div>
                <small>presure</small>
            </div>
            <div className="perfomance-fields">
                <div className="percentage">60%</div>
                <div className="progres" style={{height:'60%', backgroundColor:'#00FF00'}}></div>
                <small>presure</small>
            </div>
            <div className="perfomance-fields">
                <div className="percentage">100</div>
                <div className="progres" style={{height:'100%', backgroundColor:'#00FF00'}}></div>
                <small>presure</small>
            </div>
        </div>
    )
}

export default Performance