import React from 'react';
import '../App.css';

class ProjectCard extends React.Component {

    render() {
        return (
            <div className='exp_card'>

                <h2>{this.props.dataObject.project}</h2>
                <h3>{this.props.dataObject.company}</h3>
                <ul>
                    {this.props.dataObject.points.map((point, i) => <li key={i} >{point.text}</li>)}
                </ul>

                <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {this.props.dataObject.techStack.map((tech, i) =>
                        <span key={i} className='tag_class'> {' ' + tech} </span>)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;