import React from 'react';

class MainApp extends React.Component {
    state = {
        data: []
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((elem) => (
                        <h2>{elem}</h2>
                    ))
                }
            </div>
        );
    }
}

export default MainApp;