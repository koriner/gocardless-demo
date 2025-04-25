import reactLogo from '@assets/react.svg';
import viteLogo from '/vite.svg';
import ExampleComponent from '@components/ExampleComponent/ExampleComponent';
import '@styles/app.css';

function IndexPage() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-fancy">This font is nice.</h1>
      <h2 className="font-fancy">GoCardless!</h2>
      <div className="card">
        <p>
          Edit <span className="font-fixed">src/App.tsx</span> and save to test HMR
        </p>
        <p>
          Example ENV var is: <span className="font-fixed">{`${import.meta.env.VITE_EXAMPLE_ENV_VAR}`}</span>
        </p>
        {
          <ExampleComponent label="Test label" />
        }
      </div>
    </>
  )
}

export default IndexPage;
