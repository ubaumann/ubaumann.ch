import './Experience.scss';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../Timeline/TimelineItem/TimelineItem';
import TimelineWorkDescription from '../Timeline/TimelineDescription/TimelineWorkDescription';
import { data } from '../../assets/data';

const Experience = (): JSX.Element => {
  return (
    <div className="Experience Tile">
      <div className="TileTitle">Experience</div>
      <Timeline>
        {data.experiences.map((e, i) => {
          return (
            <TimelineItem
              key={'AboutMe-' + i}
              period={e.period}
              title={e.title}
            >
              <TimelineWorkDescription
                employer={e.employer}
                employerLink={e.employerLink}
                employmentRate={e.employmentRate}
                paragraphs={e.paragraphs}
              />
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Experience;
