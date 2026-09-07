import './StartProject.css';
import Reveal from '../Reveal';
import InlineEstimator from '../components/InlineEstimator';

function StartProject({ selectedType, onSelectType }) {
  return (
    <section className="start-project" id="estimator-section">
      <div className="start-project-glow" aria-hidden="true" />
      <Reveal className="start-project-content" style={{ width: '100%' }}>
        <InlineEstimator selectedType={selectedType} onSelectType={onSelectType} />
      </Reveal>
    </section>
  );
}

export default StartProject;
