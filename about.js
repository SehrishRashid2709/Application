import ProgressBar from 'react-bootstrap/ProgressBar';

function about() {
  return (
    <div>
      <ProgressBar variant="success" now={100}/>
      <ProgressBar variant="info" now={20}/>
      <ProgressBar variant="warning" now={60}/>
      <ProgressBar variant="danger" now={80}/>
    </div>
  );
}

export default about;