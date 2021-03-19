import React from "react";
import sanityClient from "../client.js";
import logo from "../Assets/AH-logo.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//importing components
import Navbar from "./NavBar";
import Main from "./Main.js";
import SingleProject from "./SingleProject.js";
import Footer from "./Footer.js";
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
            <div className="bg-gray-900">
              <Navbar resume={this.state.authorData.authorResume} />

              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Main
                      resume={this.state.authorData.authorResume}
                      experienceData={this.state.experienceData}
                      authorData={this.state.authorData}
                      projectData={this.state.projectData}
                    />
                  )}
                />
                <Route
                  path="/Resume"
                  render={(props) => (
                    <Resume resume={this.state.authorData.authorResume} />
                  )}
                />
                <Route component={SingleProject} path="/:slug" />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        )}
      </div>
    );
  }
}
