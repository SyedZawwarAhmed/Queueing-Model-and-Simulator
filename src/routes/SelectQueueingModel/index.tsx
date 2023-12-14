import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Model } from '../../constants/enums'
import Title from '../../components/Title'

function SelectQueueingModel() {
    return (
        <div className="container">
            <Title>Select Queueing Model</Title>
            <div className="flex">
                <Link to="/queueing-model" state={{ model: Model.MMN }}>
                    <Button title={"M/M/N"} />
                </Link>
                <Link to="/queueing-model" state={{ model: Model.MGN }}>
                    <Button title={"M/G/N"} />
                </Link>
                <Link to="/queueing-model" state={{ model: Model.GGN }}>
                    <Button title={"G/G/N"} />
                </Link>
            </div>
        </div>
    )
}

export default SelectQueueingModel