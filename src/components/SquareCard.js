import React from 'react';

class SquareCard extends React.Component {
    render() {
        return (
            <div className='square_class' style={{width: '120px', height: '120px'}}>
                <div className=''>
                    <p className='beat_class' style={{ textAlign: 'center',fontSize: '22px', lineHeight: '120px'}}>{' ' + this.props.skillObject.text}</p>
                </div>
            </div>
        );
    }
}

export default SquareCard;