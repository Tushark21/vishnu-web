import React from 'react';
import BlogCard from '../components/BlogCard';
import { Container, Row } from 'react-bootstrap';

class Me extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Container>
                <div className='me' style={{ marginTop: '15px', fontSize: '20px', backgroundImage: 'url(' + require('../assets/bg.png').default + ')' }}>
                    <Row className="row justify-content-md" >
                        <p>Hi! I am Vishnu Srivastava, a data ... from Delhi, India.</p>
                    </Row>
                    <Row className="row justify-content-md" >
                        <ul>
                            {this.props.dataList.profiles.map((data,i) => <a key={i} href={data.link} target='_blank' rel="noopener noreferrer">
                                <li style={{ listStyleType: 'none', fontSize: '16px', fontWeight: 'bold' }} className='ticket_class'>{data.text}</li>
                            </a>)}
                        </ul>
                    </Row>
                </div>
                <h2>My Pages & Activities</h2>
                <hr></hr>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {this.props.dataList.blogs.map((blog,i) => <BlogCard key={i} dataObject={blog} />)}
                </div>
            </Container >
        );
    }
}

export default Me;