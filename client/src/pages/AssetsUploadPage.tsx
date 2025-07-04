import { useNavigate } from "react-router-dom";

function AssetsUploadPage() {
  const navigate = useNavigate();

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const repsonse = await fetch('/api/v1/assets', {
      method: 'POST',
      body: new FormData(event.currentTarget)
    });

    if (!repsonse.ok) {
      throw new Error('Upload failed');
    }

    navigate('/assets');
  };

  return (
    <section className="AssetsUploadPage-container">
      <h2>Upload Assets</h2>

      <form encType="multipart/form-data" method="POST" onSubmit={handleOnSubmit}>
        <div className="input-item">
          <label htmlFor="file">File</label>

          <input name="file" type="file" />
        </div>

        <div className="button-row">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  )
}

export default AssetsUploadPage;