import React, {useState, useEffect, Suspense, lazy} from "react";
import ApolloClient from "apollo-boost";
import {gql} from "apollo-boost";
import "./Projects.css";
import Button from "../Button/Button";
import {openSource, socialMediaLinks} from "../../content";
import Loading from "../loading/Loading";
export default function Projects() {
  const GithubRepo = lazy(() =>
    import("../GithubRepo/GithubRepo")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  
  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    console.log(process.env.REACT_APP_GITHUB_TOKEN);
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 3, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  url
              }
            }
          }
        }
      }
    }`
      })
      .then(result => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
        setrepoFunction("Error");
        console.log(
          "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
        );
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return (
                <GithubRepo repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    console.log("Failed loading!");
    return <FailedLoading />;
  }
}
