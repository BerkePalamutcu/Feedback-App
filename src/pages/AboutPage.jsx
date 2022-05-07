import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
      <div className="about">About this project</div>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>
        <Link to="/">Back to homepage</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
