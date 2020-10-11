import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const BoomTownDataDisplay = ({
  dataURL,
  dataNameField,
  dataTitle,
  getRepos
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataURL);
        const status = await response.status;
        const data = await response.json();
        if (status === 200) {
          setData(data);
        } else {
          setError('Data could not be retrieved');
        }
        getRepos(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [dataURL]);

  return (
    <div className="data-display">
      <h4>{dataTitle}</h4>
      {error ? error : ''}
      <ul>
        {!data || error
          ? ''
          : data.map(function(item) {
              return (
                <li>
                  <strong>id:</strong> {item.id} ({item[dataNameField]})
                </li>
              );
            })}
      </ul>
    </div>
  );
};

BoomTownDataDisplay.propTypes = {
  dataURL: PropTypes.string.isRequired,
  dataNameField: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  getRepos: PropTypes.func
};

export default BoomTownDataDisplay;
