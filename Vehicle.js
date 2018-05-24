import React, { Component } from 'react';

import {
StyleSheet,
Text,
View,
TextInput
} from 'react-native';

class Vehicle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mpg : 0,
			tankSize : 0,
			currentGasonlineLeft : 0,
			lables: {
				instructions: 'Your Vehicle Information',
				mpg: "How many miles per gallon ?",
				tankSize: "How much is the Tank Size (gallons) ?",
				currentGasonlineLeft: "How much current gasoline or distance left ?"
			}
		}
	}

	render() {
		return (
			<View>
			<View style={styles.separator}>
			<Text style={styles.instructions}>
          		{this.state.lables.instructions}
    		</Text>
    		</View>
    		<View style={styles.separator}>
	    		<Text style={styles.labels}>{this.state.lables.mpg}</Text>
    			<TextInput
					style={styles.inputs}
					placeholder="mpg"
					keyboardType="numeric"
					onChangeText={(text) => this.setState( {...this.state, mpg: text})}
					/>
    		</View>
    		<View style={styles.separator}>
	    		<Text style={styles.labels}>{this.state.lables.tankSize}</Text>
    			<TextInput
					style={styles.inputs}
					placeholder="Tank Size"
					keyboardType="numeric"
					onChangeText={(text) => this.setState( {...this.state, tankSize: text})}
					/>
    		</View>
    		<View style={styles.separator}>
	    		<Text style={styles.labels}>{this.state.lables.currentGasonlineLeft}</Text>
    			<TextInput
					style={styles.inputs}
					placeholder="Gasoline or Miles"
					keyboardType="numeric"
					onChangeText={(text) => this.setState( {...this.state, tankSize: text})}
					/>
    		</View>			
			</View>
		);
	}
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10
  },
  inputs: {
  	height: 40,
  	marginLeft: 10,
  	marginRight: 10
  },
  labels: {  	
  	marginLeft: 10,
  	marginRight: 10
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  }
});

export default Vehicle;