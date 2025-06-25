import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Fel inträffade...</h1>
      <p>{ error.statusText || "Något gick fel." }</p>
    </div>
  );
}

export default ErrorPage;