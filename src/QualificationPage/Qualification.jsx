import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from './TimelineItem';
import './Qualification.css';

const educationData = [
  {
    type: 'education',
    date: 'May 2016 - April 2017',
    title: 'Ayyanar Matric Higher Secondary School',
    subtitle: 'SSLC (10th)',
    description: 'Percentage: 87.2%',
    extraDescription: 'Additional details about SSLC.',
    path: '/details'
  },
  {
    type: 'education',
    date: 'May 2017 - April 2018',
    title: 'Ayyanar Matric Higher Secondary School',
    subtitle: 'HSC (11th)',
    description: 'Percentage: 70%',
    extraDescription: 'Additional details about HSC 11th.',
    path: '/details'
  },
  {
    type: 'education',
    date: 'May 2018 - March 2019',
    title: 'Ayyanar Matric Higher Secondary School',
    subtitle: 'HSC (12th)',
    description: 'Percentage: 74.5%',
    extraDescription: 'Additional details about HSC 12th.',
    path: '/details'
  },
  {
    type: 'education',
    date: 'August 2019 - May 2023',
    title: 'Velammal Institute of Technology',
    subtitle: 'B.Tech in IT',
    description: 'Percentage: 85.6%',
    extraDescription: 'Additional details about B.Tech.',
    path: '/details'
  },
];

const workData = [
  {
    type: 'work',
    date: 'August 2023 - September 2023',
    title: 'Internpe',
    subtitle: 'Web Developer Intern',
    description: 'Pioneering a Frontend Web Developer internship, elevating skills in HTML, CSS, and JavaScript.',
    extraDescription: 'Additional details about the Web Developer Internship.',
    path: '/details'
  },
  {
    type: 'work',
    date: 'September 2023 - December 2023',
    title: 'Senchola Technology Solutions',
    subtitle: 'WordPress Developer Intern',
    description: 'Underwent comprehensive training, mastering key concepts and completing assigned tasks.',
    extraDescription: 'Additional details about the WordPress Developer Internship.',
    path: '/details'
  },
  {
    type: 'work',
    date: 'December 2023 - May 2024',
    title: 'Senchola Technology Solutions',
    subtitle: 'Frontend Developer Intern',
    description: 'Completed an intensive training program focusing on HTML, CSS, JavaScript, and React.js.',
    extraDescription: 'Additional details about the Frontend Developer Internship.',
    path: '/details'
  },
  {
    type: 'work',
    date: 'June 2024 - July 2024',
    title: 'Cognizant Technology Solutions',
    subtitle: 'Continuous Skill Development',
    description: 'Trained extensively in web development and advanced Java technologies.',
    extraDescription: 'Additional details about the Java Trainee position.',
    path: '/details'
  },
];

const parseDate = (date) => {
  const [month, year] = date.split(' - ').map(part => part.trim());
  const [startMonth, startYear] = month.split(' ').reverse();
  return new Date(`${startYear}-${startMonth.padStart(2, '0')}-01`);
};

const sortTimelineItems = (items) => {
  return items.sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

const sortedEducationData = sortTimelineItems(educationData);
const sortedWorkData = sortTimelineItems(workData);

function Qualification() {
  return (
    <>
      <h1 className='font-serif text-5xl my-10 Qualification' id='Qualification'>Qualification</h1>
      <VerticalTimeline>
        {sortedWorkData.map(item => (
          <TimelineItem
            key={item.date + item.title}
            type={item.type}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            extraDescription={item.extraDescription}
          />
        ))}
        {sortedEducationData.map(item => (
          <TimelineItem
            key={item.date + item.title}
            type={item.type}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            extraDescription={item.extraDescription}
          />
        ))}
      </VerticalTimeline>
    </>
  );
}

export default Qualification;
