import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataProvider'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ItemCard from './ItemCard';


//declare datacontext types 
type Item = {
    images: "Laptop";
    _id: string,
    title: string,
    tags: Array<string>,
    department: string,
    search: string,
    image: string,
}





export default function Items() {
    const value = useContext(DataContext)
    const [itemsList] = value.itemsList
    const [filteredItems, setFilteredItems] = useState(itemsList)
    let { location } = useParams();



    // filter function that takes in filtered items and sets the state of filtered items to the filtered items
    const filter = (items: Item[], query: string) => {
        if (!query) {
            return items;
        }
        return items.filter((item) => {
            const itemTitle = getTags(item).join(' ');
            return itemTitle.includes(query);
        });
    };

    //function that runs trough each given item and returns each tag in the item
    const getTags = (item: Item) => {
        return item.tags.map((tag) => {
            return tag;
        });
    };


    // search function that takes in the event and sets the state of filtered items to the filtered items
    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        const filteredItems = filter(itemsList, query.toUpperCase());
        setFilteredItems(filteredItems);
    };


    return (
        <Container style={{ minWidth: "80%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }} >

            <Form.Floating style={{ width: "60%", margin: "30px" }}>
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Search for an item, department, tag, workstation etc."
                    onChange={search}
                />
                <label htmlFor="floatingInputCustom">Search for items, departments, tags, workstations etc.</label>
            </Form.Floating>
            <Row Row >
                {
                    filteredItems.map((product: Item) => (

                        <ItemCard key={product._id} title={product.title} department={product.department} image={product.images} tags={product.tags} _id={''} value={undefined}   />


                    ))}
            </Row>
        </Container>

    )
}
