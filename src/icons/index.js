import React from "react";
import { Html } from "./html";
import { Css } from "./css";
import { Angular } from "./angular";
import { Bootstrap } from "./bootstrap";
import { JavaScript } from "./javascript";
import { Material } from "./material";
import { NodeJS } from "./node_js";
import { ReactIcon } from "./react";
import { Email } from "./email";
import { GitHub } from "./github";
import { LinkedIn } from "./linkedin";
import { GitHubWorkLink } from "./github-work-link";
import { LiveDemo } from "./live-demo";
import { Twitter } from "./twitter";
import { Download } from "./download";
import { CaseStudy } from "./case-study";
import { GitHubSocial } from "./github-social";

export const Icon = (props) => {
  switch (props.title) {
    case "html":
      return <Html {...props} />;
    case "css":
      return <Css {...props} />;
    case "angular":
      return <Angular {...props} />;
    case "react":
      return <ReactIcon {...props} />;
    case "bootstrap":
      return <Bootstrap {...props} />;
    case "javascript":
      return <JavaScript {...props} />;
    case "material design":
      return <Material {...props} />;
    case "node_js":
      return <NodeJS {...props} />;
    case "email":
      return <Email {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "github-social":
      return <GitHubSocial {...props} />;
    case "github repo":
      return <GitHubWorkLink {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "live demo":
      return <LiveDemo {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "download":
      return <Download {...props} />;
    case "case study":
      return <CaseStudy {...props} />;
    default:
      return <div />;
  }
};
