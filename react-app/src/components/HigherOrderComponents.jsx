import { Component } from "react";

export default class HigherOrderComponents extends Component{

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ],
            filteredData : [],
            filteredWithName : [],
            filteredWithAge : [],
            total : 0 
        }
        console.log(this.state.userData)

        var filteredData = this.state.userData.filter((element)=>{
            return element.user_type === "Designer"
        })

        console.log(filteredData)

        var filteredDataWithName = this.state.userData.filter((element)=>{
            return element.name[0] == "J"
        })

        console.log(filteredDataWithName)

        var filteredWithAge = this.state.userData.filter((element)=>{
            return element.age > 28 && element.age <= 50
        })

        console.log(filteredWithAge)

        var sum = this.state.userData.reduce ((acc,element)=>{
            if(element.user_type == "Designer"){
                acc += element.years
            }
            return acc
        },0)

        console.log(sum)

        this.state.filteredData = filteredData
        this.state.filteredWithAge = filteredWithAge
        this.state.filteredWithName = filteredDataWithName
        this.state.total = sum

    }



    render(){
        return(
            <>
                <h1>Display All Items</h1>
                {this.state.userData.map((element)=>(
                    <div key={element.id}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Display dataType "Designer"</h1>
                {this.state.filteredData.map((element)=>(
                    <div key={element.id}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Display User's name starting with J</h1>
                {this.state.filteredWithName.map((element)=>(
                    <div key={element.id}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Display User's age more than 28 and less than equal to 50</h1>
                {this.state.filteredWithAge.map((element)=>(
                    <div key={element.id}>
                        <ul>
                            <li>ID : {element.id} Name : {element.name} Type : {element.user_type}</li>
                        </ul>
                    </div>
                ))}

                <h1>Total years of Deigners</h1>
                <ul>
                    <li><h2>{this.state.total}</h2></li>
                </ul>
            </>
        )
    }
}