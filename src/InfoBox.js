import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';


function InfoBox(props) {
	return (
		
		  <Card className={`infoBox ${props.active && 'infoBox__selected'} ${props.isRed && "infoBox--red"}`} onClick={props.onClick}>
		    <CardContent>
		      <Typography color="textSecondary" className="infoBox__title">
		        {props.title}
		      </Typography>

		      <h2 className={`infoBox__cases ${!props.isRed && "infoBox__cases--green"}`}>{props.cases}</h2>

		      <Typography className="infoBox__total" color="textSecondary">
		        {props.total} Total
		      </Typography>
		    </CardContent>
		  </Card>

	
	)
}

export default InfoBox;