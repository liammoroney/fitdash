import React, { useState } from 'react';

import ColorPicker from 'material-ui-color-picker'
import ConfigureContainer from './ConfigureContainer'

const SimpleText = props => {

    const [colour, setColour] = useState('#000000');

    const configView = () => (
        <>
            <p>Text colour:</p>
            <ColorPicker
                name='color'
                defaultValue='#000000'
                onChange={c => c && setColour(c)}
            />
        </>
    )

    const configureClicked = () => props.showConfigureDialog(configView());

    return (
        <>
            <ConfigureContainer {...props} configureClicked={configureClicked} configView={configView} />
            <div style={{ color: colour }}>
                {props.text}
            </div>
        </>
    )
}

export default SimpleText;