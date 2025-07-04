function AssetsUploadPage() {
  return (
    <section className="AssetsUploadPage-container">
      <h2>Upload Assets</h2>

      <form action="/api/v1/assets" encType="multipart/form-data" method="POST">
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