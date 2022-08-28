import React from "react";



const CardList = (props) => (
    <div>
        {props.APIdata.map(weatherCard => <DayCard {...weatherCard}/>)}
    </div>
)

class DayCard extends React.Component {
    render() {
        const weatherCard = this.props;
        return(
            <div>
                <h1>{weatherCard.temp}</h1>
            </div>
        );
    }
}