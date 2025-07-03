import Heading from "../components/Heading";

interface ErrorPageProps {
  code?: string;
  message?: string;
  title: string;
}

function ErrorPage({ code, title, message }: ErrorPageProps) {
  return (
    <div className="ErrorPage-container">
      <Heading
        title={code || title}
        subtitle={title}
      />

      {message && <p>{message}</p>}
    </div>
  );
}

export default ErrorPage;