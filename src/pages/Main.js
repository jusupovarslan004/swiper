import React, {useState} from 'react';
import {Container, FilledInput} from "@mui/material";
import TabsComponent from "../components/Tabs";
import Two from "../components/two/Two";
import Three from "../components/three/Three";
import One from "../components/one/One";
import Four from "../components/four/Four";
import Five from "../components/five/Five";

const VALUES = {
    itemOne: 'one',
    itemTwo: 'two',
    itemThree: 'three',
    itemFour: 'four',
    itemFive: 'five'

}

const GetCategories = ({value}) => {

    const swiperImages = [
        { url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' },
        { url: 'https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?cs=srgb&dl=pexels-mo-eid-9454915.jpg&fm=jpg' },
        { url: 'https://i.pinimg.com/474x/6c/12/fd/6c12fdc402726c513901a61f512ba3c6.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg' },
        { url: 'https://i.pinimg.com/736x/58/bd/4f/58bd4fc9ebfccc1f2de419529bbf1a12.jpg'},
    ]

    switch (value) {
        case VALUES.itemOne: {
            return <One/>
        }
        case VALUES.itemTwo: {
            return <Two/>
        }
        case VALUES.itemThree: {
            return <Three/>
        }
        case VALUES.itemFour: {
            return <Four/>
        }
        case VALUES.itemFive: {
            return <Five/>
        }
        default: return <></>
    }
}

const Main = () => {

    const categoriesSelect = [
        {value: VALUES.itemOne, label:'One'},
        {value: VALUES.itemTwo, label:'Two'},
        {value: VALUES.itemThree, label:'Three'},
        {value: VALUES.itemFour, label:'Four'},
        {value: VALUES.itemFive, label:'Five'}
    ]

    const [value, setValue] = useState(categoriesSelect[0].value)



    return (
        <div>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
        </div>
    );
}

export default Main;