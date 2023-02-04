import React, { useContext, useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../DataProvider'
import { Container, Card, Button, Form, Dropdown, Col } from 'react-bootstrap';



//tsx declaration
interface ItemDetailsProps {
    _id: string;
    issue: string;
    level: string;
    location: string;
    station: string;
    asset: string;
    request: string;
    value: Array < any > ;

}


 function RequestForm() {
    const { location } = useParams();
    const { asset_id } = useParams();

    const value = useContext(DataContext)
    const [itemsList] = value.itemsList

    // const [index, setIndex] = useState(0)

    const [level, setLevel] = useState('')
    const [locationArea, setLocationArea] = useState('')
    const [station, setStation] = useState('')
    const [assetType, setAssetType] = useState('')
    const [issue, setIssue] = useState('Select Issue / Request')
    const [request, setRequest] = useState('')




 //function details that retunrs only the array of the item that matches the asset_id
    const details = itemsList.filter((item: ItemDetailsProps) => {
        return item._id === asset_id
    })


    function generateTicketInfo(): void {
       console.log(details)
    }


    function handleSubmit(): void {
        // console.log("level: " + level);
        // console.log("location: " + locationArea);
        // console.log("station: " + station);
        // console.log("asset: " + assetType);
        // console.log("issue: " + issue);
        // console.log("request: " + request);
        generateTicketInfo();
    }

    function handleBack(): void {
        //use react router to go back to the previous page
    }

 

    return (
        <form>
            <Container style={{
                minWidth: "80%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "50px", maxHeight: "100%"
            }}>

                <Card>
                    <Card.Header>
                    {details[0].title}

                    </Card.Header>
                    <Card.Body style={{ marginLeft: "20px" }}>

                        <Card.Title>Please fill the following fields:</Card.Title>

                        <Form.Floating style={{ width: "90%", margin: "10px", marginTop: "30px" }}>
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder='Floor'
                                onChange={event => setLevel(
                                    //if the value is empty ( because was deleted by user ) then set it to empry string
                                    event.target.value === "" ? "" :
                                        //if the value is not empty then add the word "Floor" before the value
                                        "Floor " + event.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">Floor Level: </label>
                        </Form.Floating>

                        <Form.Floating style={{ width: "90%", margin: "10px", marginTop: "30px" }}>
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder='Location'
                                onChange={event => setLocationArea(
                                    //if the value is empty ( because was deleted by user ) then set it to empry string
                                    event.target.value === "" ? "" :
                                        //if the value is not empty then add the word "Floor" before the value
                                        "Location " + event.target.value.toUpperCase())}
                            />
                            <label htmlFor="floatingInputCustom">Location: (Office, Security, Room Number ...) </label>
                        </Form.Floating>


                        <Form.Floating style={{ width: "90%", margin: "10px", marginTop: "30px" }}>
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder='Station'
                                onChange={event => setStation(
                                    //if the value is empty ( because was deleted by user ) then set it to empry string
                                    event.target.value === "" ? "" :
                                        //if the value is not empty then add the word "Floor" before the value
                                        "Station " + event.target.value.toUpperCase())}
                            />
                            <label htmlFor="floatingInputCustom">Station Number:</label>
                        </Form.Floating>


                        <Form.Floating style={{ width: "90%", margin: "10px", marginTop: "30px" }}>
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder='AN/SN '
                                onChange={event => setAssetType(
                                    //if the value is empty ( because was deleted by user ) then set it to empry string
                                    event.target.value === "" ? "" :
                                        //if the value is not empty then add the word "Floor" before the value
                                        "AN/SN " + event.target.value)}
                            />
                            <label htmlFor="floatingInputCustom">Asset Number / Serial Number</label>
                        </Form.Floating>
                        <Dropdown >
                            <Dropdown.Toggle variant="info" id="dropdown-basic" style={{ width: "80%", marginLeft: "35px", marginTop: "30px" }}>
                                {issue}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: "75%", marginLeft: "10px" }}>
                                {details[0].commonIssues.map((item: Object) => (
                                    <Dropdown.Item onClick={event => setIssue(Object.values(item)[0])}>{Object.values(item)[0]}</Dropdown.Item>))}


                                <Form.Floating style={{ width: "90%", margin: "10px", }}>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder='Other'
                                        onChange={event => setIssue(event.target.value === "" ? "" : event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))}
                                        maxLength={35}
                                    />
                                    <label htmlFor="floatingInputCustom">Other</label>
                                </Form.Floating>
                            </Dropdown.Menu>

                        </Dropdown>




                        <Form.Group style={{ marginBottom: "30px", marginRight: "20px" }} controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ marginTop: "30px" }}>Please enter detalis about your issue/request bellow:</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={event => setRequest(event.target.value)} />
                        </Form.Group>


                        <Col style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "10px" }}
                        >
                            <Button variant="success" onClick={() => handleSubmit()}>Submit</Button>
                            <Button style={{ marginRight: "20px" }} variant="danger" onClick={() => handleBack()}>Back</Button>
                        </Col>
                    </Card.Body>
                </Card>




            </Container>
        </form>

    )
}

export default RequestForm

// {
//   "_id": "20",
//   "title": "WAT",
//   "department": "RME",
//   "CTI": [
//       {
//           "Category": "OpsTechIT"
//       },
//       {
//           "Type": "Client Devices"
//       },
//       {
//           "Item": "Dektop/Laptop (Windows)"
//       }
//   ],

//   //in order to get the Category : OpsTechIT  we need to do it as : details[0].CTI[0].Category
//   //in order to get the Type : Client Devices  we need to do it as : details[0].CTI[1].Type
//   //in order to get the Item : Dektop/Laptop (Windows)  we need to do it as : details[0].CTI[2].Item
//   "SNCTI": [
//       {
//           "SubCategory": "Laptop"
//       },
//       {
//           "SubType": "Laptop"
//       },
//       {
//           "SubItem": "Laptop"
//       }
//   ],
//   "images": [
//       "https://images.squarespace-cdn.com/content/v1/58136ff5d482e90149e4e93d/1497376105771-W4RXM4JNMS5E32FG9DLF/Better+Pack+555e+Gummed+Tape+Dispenser.jpg"
//   ],
//   "commonIssues": [
//       {
//           "1": "Broken Device"
//       },
//       {
//           "2": "Software Issue"
//       },
//       {
//           "3": "Request Equipment"
//       },
//       {
//           "4": "Missing / Lost"
//       }
//   ],
//   "usefullLinks": [
//       {
//           "1": "https://www.apple.com/uk/macbook-pro-13/specs/"
//       },
//       {
//           "2": "https://www.apple.com/uk/macbook-pro-13/specs/"
//       },
//       {
//           "3": "https://www.apple.com/uk/macbook-pro-13/specs/"
//       },
//       {
//           "4": "https://www.apple.com/uk/macbook-pro-13/specs/"
//       },
//       {
//           "5": "https://www.apple.com/uk/macbook-pro-13/specs/"
//       }
//   ],
//   "workStation": [
//       {
//           "1": "PackStation"
//       },
//       {
//           "2": "ProblemSolve"
//       },
//       {
//           "3": "SLAM"
//       }
//   ],
//   "tags": [
//       "wat",
//       "rme",
//       "packstation",
//       "problemsolve",
//       "slam"
//   ],
//   "requieredFields": [
//       {
//           "1": "Serial Number",
//           "type": "text"
//       },
//       {
//           "2": "Asset Tag",
//           "type": "text"
//       },
//       {
//           "3": "Location",
//           "type": "text"
//       },
//       {
//           "4": "User",
//           "type": "text"
//       },
//       {
//           "5": "Issue",
//           "type": "text"
//       },
//       {
//           "6": "Description",
//           "type": "text"
//       },
//       {
//           "7": "Workstation",
//           "type": "text"
//       },
//       {
//           "8": "Other",
//           "type": "text"
//       }
//   ],
//   "colors": [
//       "red",
//       "black",
//       "teal"
//   ],
//   "sizes": [
//       "XL",
//       "L",
//       "M",
//       "XM",
//       "LX"
//   ],
//   "price": 101,
//   "count": 1
// }