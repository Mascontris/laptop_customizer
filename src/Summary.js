import React from 'react';

function MainSummary(props){
 return (
    <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {props.summary}
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.total) }
            </div>
        </div>
    </section>
 )
}

export default MainSummary