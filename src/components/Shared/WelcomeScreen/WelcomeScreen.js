import React from 'react';

import PulseLoader from "react-spinners/PulseLoader"
import { css } from "@emotion/react";

const WelcomeScreen = ({loading}) => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        position: absolute;
        top: 50%;`;

    return (
        <div className='col-md-9 min-h-100 m-0 p-0 bg-1 min-h-92'>
            <div className="sweet-loading d-flex justify-content-center align-items-center min-h-92">
                <PulseLoader color={'#3b424b'} size={15} margin={2} css={override} loading={loading} />
            </div>
        </div>
    );
};

export default WelcomeScreen;