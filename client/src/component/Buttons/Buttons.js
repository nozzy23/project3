import React from 'react';

function Buttons (){
    return (
        <div className="col-lg-12">
        <div className="buttons">
          
        <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-success btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Favorites
    </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="#">Favorite 1</a>
            <a className="dropdown-item" href="#">Favorite 2</a>
            <a className="dropdown-item" href="#">Favorite 3</a>
            </div>
            </div>
            <button id="sellStocks" type="button" className="btn btn-warning btn-lg">New Guest<i className="fas fa-hand-holding-usd"></i></button>
            </div>
        <br></br>
        <button id="reserve" type="button" className="btn btn-danger btn-lg btn-block">Reserve Spot</button>
        </div>

        );
    }
 export default Buttons;
    