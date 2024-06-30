const ScreenThree = () => {
  return (
    <section id="screen-3">
      <article>
        <header>
          <h2>Station Data</h2>
        </header>
        <div className="content"></div>
        <br></br>
        <figure>
          <table className="tableau-style">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Units</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="alert">Oxygen Levels</td>
                <td className="alert">55</td>
                <td className="alert">%</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>22</td>
                <td>°C</td>
              </tr>
              <tr>
                <td>Power Usage</td>
                <td>85</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Structural Integrity</td>
                <td>100</td>
                <td>%</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h2>ZOG Data</h2>
          <br />
          <table className="tableau-style">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Units</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="alert">Oxygen Levels</td>
                <td className="alert">0</td>
                <td className="alert">%</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>-30</td>
                <td>°C</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>0</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Atmospheric Pressure</td>
                <td>103.5</td>
                <td>kPa</td>
              </tr>
            </tbody>
          </table>
        </figure>
      </article>
    </section>
  );
};
export default ScreenThree;
