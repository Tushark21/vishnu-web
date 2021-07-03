import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

class BlogCard extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#ffffff88', width: '15rem', margin: '10px' }}>
                <a href={this.props.dataObject.link} target='_blank' rel="noopener noreferrer">
                <img style={{ width: '15rem', borderRadius: '5px'}} src={this.props.dataObject.src} />
                </a>
            </div>
        );
    }
}

export default BlogCard;