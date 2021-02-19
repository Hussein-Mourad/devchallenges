import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Layout from "./Layouts/Layout";

function App() {
  const getData = async () => {
    const res = await fetch(
      "https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york"
    );
    const data = await res.json();
    // console.log(data)
    return data;
  };
  // let data = getData();
  // console.log(data)
  const jobs = [
    {
      id: "2f3bce46-908b-4018-9135-fe0e514d9929",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/2f3bce46-908b-4018-9135-fe0e514d9929",
      created_at: "Wed Jan 27 17:11:53 UTC 2021",
      company: "CircleBlack, Inc",
      company_url: "http://www.circleblack.com",
      location: "New Jersey ",
      title: " Senior Software Developer (Full Stack)",
      description:
        "<p>Who are we?</p> <p>CircleBlack, Inc. provides financial advisors with technology that aggregates data, integrates other financial applications seamlessly, manages data from multiple custodians and delivers actionable intelligence about client portfolios, helping advisors better manage clients' wealth while growing and deepening advisor-client relationships. CircleBlack provides a leading platform built for the digital age, with a web-based and mobile application that can be taken anywhere and accessed anytime. CircleBlack's solution leverages proprietary technology that helps sustain the Company's unique competitive advantages. CircleBlack believes in making wealth management better, for both the investor and the advisor. For more information about CircleBlack, visit <a href='https://www.circleblack.com'>https://www.circleblack.com</a></p> <p>Position Summary:</p> <p>We are looking for a passionate, forward thinker full stack senior software developer to design, develop and maintain our software solutions. You will be working on building quality performing software that enables financial advisors to deliver real time data to their clients while adapting to industry trends. Ideal candidates should be passionate about solving complex problems while being able to design, develop and support industry-leading solutions using NodeJS in a fast paced environment with seven years of application development.</p> <p>Responsibilities:</p> <p>Design and develop NodeJS APIs, integrations, analytics engines, and infrastructure tools. Implement modern React user interfaces. Lead migration from one core application to another, while proposing and implementing modern performance optimizations and scaling strategies, such as React user interface. Drive software change while ensuring software deliverables comply with quality standards. Collaborate effectively with stakeholders, designers and testers advising on impact, and performance to deliver the highest quality of software. Perform code reviews, suggesting improvements and ensuring adherence to best practices. Participate in an Agile development process. Developing for a full stack of technologies including NodeJS, Nginx, React, Angular 1, MySQL, ElasticSearch, Kibana, PHP, Perl, Python and/or Ruby, Redis on AWS Linux servers. Determine the root cause for complex software issues and develop practical solutions. Serve as technical team lead and act as a mentor to allow for skill development through coaching, and training opportunities.</p> <p>Competencies:</p> <p>Ability to approach problems in a holistic manner, both tactical and strategic Continuously aware of leveraging coaching and mentoring opportunities with junior software engineers Creative, resourceful and outside- the- box thinking approach Initiator; natural “fixer” mentality Problem-solver and analytical</p> <p>Education/Qualification:</p> <p>7+ years of application development experience; 4+ years experience using NodeJS. This is a must! 2+ years of experience with MySQL database development Experience building maintainable and testable code bases, including API and Database design in an agile environment and driving software change Hands on experience integrating third-party SaaS providers using a variety of technologies including at least some the following: REST, SOAP, SAML, OAuth, OpenID, JWT, Salesforce Experience working in a cloud environment, specifically AWS Experience with non-relational databases such as Mongo, Redis, ElasticSearch Ability to work independently, and remotely for the time being BSc degree in Computer Science, Engineering or relevant field</p> <p>What we offer:</p> <p>Competitive base salary + equity Full benefits (medical, dental, vision, 401(k) match, commuter benefits, life insurance) Open vacation policy Adoption assistance, Employee assistance program, and shopping discounts Credit Union benefits Professional development, growth, and support Opportunities for advancement as you learn and grow within the role Hybrid work schedule</p> <p>CircleBlack, Inc is an Equal Opportunity Employer. All qualified applicants will receive considerations for employment, without regard to race, color, religion sex, national origin, disability, sexual orientation, gender identity, protected Veteran status, age , or any other characteristic protected by law.</p> ",
      how_to_apply:
        "<p><a href='https://circleblack.bamboohr.com/jobs/view.php?id=27'>https://circleblack.bamboohr.com/jobs/view.php?id=27</a></p> ",
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjJXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--698d7d2d4397e9b50fa302dd39ebbe54abcf4554/R3mS4AvU3fwdkV9As8Ibs55L1MLNPOXzBj5E-338gbXPCf8rwaStOzkRNJQAFA2PAAWLwCy9JEkwMo-LHLG7oE1q_g56Z3DSvM6eYMCdjSvfpCoA6L4LWR2HGoHUODZvLskYKv_g.png",
    }
  ];

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home jobs={jobs} />
            </Route>
            <Route path="/:jobId">
              <Info jobs={jobs} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
