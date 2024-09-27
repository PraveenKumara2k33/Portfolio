import { useNavigate } from 'react-router-dom';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import velamalIcon from '../assets/skills/velammal.svg';
import sencholaIcon from '../assets/skills/senchola.svg';
import CognizantIcon from '../assets/skills/cognizant.svg';
import InternPeIcon from '../assets/skills/Interpe.svg'; // Ensure the path is correct

const titleIconMapping = {
  'Cognizant Technology Solutions': <img src={CognizantIcon} alt="Cognizant" />,
  'Senchola Technology Solutions': <img src={sencholaIcon} alt="Senchola" />,
  'Velammal Institute of Technology': <img src={velamalIcon} alt="Velammal" />,
  'Internpe': <img src={InternPeIcon} alt="Internpe" />,
  'Ayyanar Matric Higher Secondary School': <SchoolIcon />
};

const typeIconMapping = {
  work: <WorkIcon />,
  education: <SchoolIcon />
};

const routeMapping = {
  'Cognizant Technology Solutions': '/cognizant',
  'Senchola Technology Solutions': '/senchola',
  'Velammal Institute of Technology': '/velammal',
  'Ayyanar Matric Higher Secondary School': '/ayyanar',
  'Internpe': '/internpe',
};

const TimelineItem = ({ type, date, title, subtitle, description }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    const path = routeMapping[title] || '/details';
    navigate(path, { state: { type, date, title, subtitle, description } });
  };

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={date}
      iconStyle={{ background: type === 'work' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
      icon={titleIconMapping[title] || typeIconMapping[type]}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p className="vertical-timeline-element-description"><CheckCircleIcon className='mr-2' />{description}</p>
      <button className="read-more-button flex" onClick={handleReadMore}>
        Read More
      </button>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
