import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();
  const { type, title, subtitle, date, description } = location.state || {};

  return (
    <div className="detail-page">
      <h2>{type === 'work' ? 'Work Details' : 'Education Details'}</h2>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
    </div>
  );
};

export default DetailPage;
