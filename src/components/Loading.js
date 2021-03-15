import React from "react";
import Main from "./Main";

import Navbar from "./NavBar";
import sanityClient from "../client.js";
import logo from "../Assets/AH-logo.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleProject from "./SingleProject.js";
import Resume from "./Resume.js";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
      authorData: undefined,
      experienceData: undefined,
      projectData: undefined,
    };
  }

  componentDidMount() {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name, 
          degree,
          bio,
          "authorImage": image.asset->url,
          "authorResume": resume.asset->url
        }`
      )
      .then((data) => {
        this.setState({ authorData: data[0] });
      });
    setTimeout(() => {
      //fetching experiences
      sanityClient
        .fetch(
          `*[_type=="experience"]{
            title,
            _id,
            slug,
            mainImage{ 
                asset->{
                    _id,
                    url
                  }
              },
            place,
            jobDescription,
            startDate,
            endDate,
            ended,
           }`
        )
        .then((data) => {
          this.setState({ experienceData: data });
        });
      //fetching projects
      sanityClient
        .fetch(
          `*[_type == "project"]{ 
                title,
                slug,
                date,
                place,
                description,
                projectType,
                link,
                gitLink,
                tags
              }`
        )
        .then((data) => {
          this.setState({ done: true, projectData: data });
        });
    }, 1500);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="bg-gray-900 h-screen flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className=" rounded p-0 animate-pulse duration-200 h-20 w-20 "
            />
          </div>
        ) : (
          <BrowserRouter>
            <div>
              <Navbar resume={this.state.authorData.authorResume} />
              {/* <div>
                <a
                  href={`${this.state.authorData.authorResume}`}
                  target="_blank"
                  rel="noopener"
                >
                  Resume
                </a>
              </div> */}
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Main
                      experienceData={this.state.experienceData}
                      authorData={this.state.authorData}
                      projectData={this.state.projectData}
                    />
                  )}
                />
                <Route component={Resume} path="/Resume" />
                <Route component={SingleProject} path="/:slug" />
              </Switch>
            </div>
          </BrowserRouter>
        )}
      </div>
    );
  }
}
