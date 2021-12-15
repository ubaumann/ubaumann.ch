import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TimelineWorkDescription.scss';

type TimelineWorkDescriptionProps = {
  employer: string;
  employerLink: string;
  employmentRate: string;
  description: string;
};

const TimelineWorkDescription = (
  props: TimelineWorkDescriptionProps,
): JSX.Element => {
  const { employer, employerLink, employmentRate, description } = props;

  return (
    <div className="TimelineWorkDescription">
      <div className="TimelineWorkDescription-Employer">
        <a href={employerLink} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon
            className="TimelineWorkDescription-EmployerIcon"
            icon={['fas', 'briefcase']}
          />
          {employer}
        </a>
      </div>
      <div className="TimelineWorkDescription-EmploymentRate">
        {employmentRate}
      </div>
      <div className="TimelineWorkDescription-Description">{description}</div>
    </div>
  );
};

export default TimelineWorkDescription;
