import './Experience.scss';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../Timeline/TimelineItem/TimelineItem';
import TimelineWorkDescription from '../Timeline/TimelineDescription/TimelineWorkDescription';

const Experience = (): JSX.Element => {
  return (
    <div className="Experience Tile">
      <div className="TileTitle">Experience</div>
      <Timeline>
        <TimelineItem
          period="April 2021 - Present"
          title="Assistant, Software Engineer"
        >
          <TimelineWorkDescription
            employer="INS Institute for Networked Solutions"
            employerLink="https://www.ins.hsr.ch/"
            employmentRate="100%"
            description="Assistant to the professors in the field of computer networks and full-stack software engineer for network applications (mostly in Segment Routing in collaboration with Cisco Systems, Inc.)."
          />
        </TimelineItem>
        <TimelineItem period="April 2017 - Present" title="Web-Administrator">
          <TimelineWorkDescription
            employer="Verein GemeinsamStark"
            employerLink="https://gemeinsamstark.ch/"
            employmentRate="<5%"
            description="Administrator for Wordpress website www.gemeinsamstark.ch."
          />
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
