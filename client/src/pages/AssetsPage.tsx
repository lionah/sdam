import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

interface Asset {
  _id: String;
  filename: String;
  mimetype: String;
}

function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>([]);

  const fetchAssets = async () => {
    const response = await fetch('/api/v1/assets');

    console.log(response)

    if (!response.ok) {
      throw new Error('Failed to fetch assets');
    }

    const data = await response.json();

    setAssets(data);
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <section className="AssetsPage-container">
      <h2>Assets </h2>

      <nav>
        <ul>
          <li><NavLink to="/assets/upload">Upload Assets</NavLink></li>
        </ul>
      </nav>

      {(assets.length === 0) && (
        <div className="AssetsPage-empty">
          ⭕️ No assets.
        </div>
      )}

      {(assets.length > 0) && (
        <div className="AssetsPage-list model-list">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>ID</th>
                <th>Filename</th>
              </tr>
            </thead>
            <tbody>

              {assets.map((asset) => (
                <tr>
                  <td>📄</td>
                  <td>{asset._id}</td>
                  <td>{asset.filename}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      )}

    </section>
  )
}

export default AssetsPage;