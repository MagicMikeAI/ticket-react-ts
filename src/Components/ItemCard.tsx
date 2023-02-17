import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link, useParams } from 'react-router-dom'
import Pictures from '../img/index';


type Item = {
    key: string,
    _id: string,
    title: string,
    tags: Array<string>,
    department: string,
    image: keyof typeof Pictures,
    value: any,
}

function ItemCard(params: Item) {
    let { location } = useParams();


    function getBadgeColor(department: string) {
        switch (department) {
            case 'IT':
                return 'primary';
            case 'MT':
                return 'warning';
            case 'HR':
                return 'success';
            case 'SEC':
                return 'danger';


        }
    }



    return (
        //in order to ensure all are centered and have same distance in between, for example row 1 has 6 cars and row 2 has 3, the 3 cars in row 2 will be centered and have the same distance in between as the 6 cars in row 1
        //to

        <Col style={{ marginBottom: "30px", justifyContent: "center", display: "left" }}>
            <Card style={{ width: '17rem' }}>
                <Card.Header >
                    <Row>
                        <Col md={9}>
                            <Card.Title>{params.title}</Card.Title>
                        </Col>
                        <Col md={3}>
                            <Badge style={{ justifyContent: "center", display: "flex" }} pill bg={getBadgeColor(params.department)} text="light"> {params.department} </Badge>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body style={{ padding: "20px", justifyContent: "center", display: "flex" }}>
                    <Card.Img variant="top " src={Pictures[params.image]} style={{ width: "100%", height: "100%" }} />
                </Card.Body>

                <Card.Footer style={{ padding: "10px", justifyContent: "center", display: "flex" }}>
                    <Link to={`/ticket/${location}/${params._id}`}>
                        <Button variant="primary">Create Ticket</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default ItemCard;