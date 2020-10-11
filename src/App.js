import React, { useEffect, useState, Fragment } from 'react';
import BoomTownDataDisplay from './components/BoomTownDataDisplay';
import './App.css';

function App() {
  const [topLevelData, setToplevelData] = useState(null);
  const [repos, setRepos] = useState(null);

  // Load initial top-level data on page-load
  useEffect(() => {
    const fetchTopData = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/BoomTownROI');
        const status = await response.status;
        const data = await response.json();
        if (status === 200) {
          setToplevelData(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchTopData();
  }, []);

  // Gets array of repositories and sets it in state
  const getRepos = repos => setRepos(repos);

  return (
    <div className="App">
      <header className="App-header">
        <h3>BoomTown! Test</h3>
      </header>
      {topLevelData ? (
        <main>
          <BoomTownDataDisplay
            dataTitle="Respositories"
            dataURL={topLevelData.repos_url + '?per_page=100'}
            dataNameField="full_name"
            getRepos={getRepos}
          ></BoomTownDataDisplay>
          <BoomTownDataDisplay
            dataTitle="Events"
            dataURL={topLevelData.events_url}
            dataNameField="type"
          ></BoomTownDataDisplay>
          <BoomTownDataDisplay
            dataTitle="Hooks"
            dataURL={topLevelData.hooks_url}
            dataNameField="full_name"
          ></BoomTownDataDisplay>
          <BoomTownDataDisplay
            dataTitle="Issues"
            dataURL={topLevelData.issues_url}
            dataNameField="full_name"
          ></BoomTownDataDisplay>
          <BoomTownDataDisplay
            dataTitle="Members"
            dataURL={topLevelData.members_url.substring(
              0,
              topLevelData.members_url.length - 9 // Trim {/member}
            )}
            dataNameField="login"
          ></BoomTownDataDisplay>
          <BoomTownDataDisplay
            dataTitle="Public Members"
            dataURL={topLevelData.public_members_url.substring(
              0,
              topLevelData.public_members_url.length - 9 // Trim {/member}
            )}
            dataNameField="login"
          ></BoomTownDataDisplay>
          <Fragment>
            <div className="verification">
              <h2>Verification</h2>
              <p>Is the 'created_at' date before the 'updated_at' date?</p>
              {new Date(
                topLevelData.created_at < new Date(topLevelData.updated_at)
              ) ? (
                <span>
                  <strong>Confimed</strong>
                </span>
              ) : (
                <span>
                  <strong>
                    Error: the update_date is before the created_at date
                  </strong>
                </span>
              )}

              <p>Do the number of public repos match the displayed number?</p>
              {repos && repos.length === topLevelData.public_repos ? (
                <span>
                  <strong>Confimed</strong>
                </span>
              ) : (
                <span>
                  <strong>Error: the number of repos doesn't match</strong>
                </span>
              )}
            </div>
          </Fragment>
        </main>
      ) : (
        <div className="loading-msg">Loading...</div>
      )}
    </div>
  );
}

export default App;
