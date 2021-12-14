import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type TimelineItemProps = {
    period: string;
    title: string;
    children?: React.ReactNode;
}

const TimelineItem = (props: TimelineItemProps) => {
    const {period, title, children} = props;
    return (
        <div className='TimelineItem'>
            <div className="TimelineItem-Dot" />
            <div className="TimelineItem-Period">{period}</div>
            <div className="TimelineItem-Title">{title}</div>
            {children}
        </div>
    )
}

export default TimelineItem
