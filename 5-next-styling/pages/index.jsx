export default function Home() {
  return (
    <div className="d-flex flex-column gap-5">
      <h1>Bootstrap Styles</h1>

      <div>
        <h2>Buttons</h2>

        <div className="d-flex flex-row gap-3">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
      </div>

      <div>
        <h2>Typography</h2>

        <div>
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
        </div>
      </div>
    </div>
  );
}
