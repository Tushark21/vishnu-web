import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import LinkIcon from '@material-ui/icons/Link';

class ProjectCard extends React.Component {

    render() {
        return (
            <div className='exp_card'>

                <h2>{this.props.dataObject.project}</h2>

                <ul>
                    {this.props.dataObject.points.map((point, i) => <li key={i} >{point.text}</li>)}
                </ul>

                <div>
                    {this.props.dataObject.techStack.map((tech, i) =>
                        <span key={i} className='ticket_class'> {' ' + tech} </span>)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;