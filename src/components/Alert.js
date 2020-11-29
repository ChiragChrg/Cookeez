import React from 'react'
import style from './css/Alert.module.css';

const Alert = ({alert}) => {
    return (
        <div className={style.Alert}>
            <h3>{alert}</h3>
        </div>
    )
}

export default Alert
