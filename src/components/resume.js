import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Avater from '../assets/img/avater2.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Avater}
                alt="avatarram"
                style={{height: '70%', width: '70%'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Raziela Snow</h2>
            <h4 style={{color: 'grey'}}>Lead, LMU Infometrics</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Km 4, Ipetu, Omu Aran, Kwara State</p>
            <h5>Phone</h5>
            <p>(234) 813-239-2693</p>
            <h5>Email</h5>
            <p>info@covenantolodo.com</p>
            <h5>Web</h5>
            <p>covenantolodo.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2009}
              endYear={2013}
              schoolName="Landmark University"
              schoolDescription="Breaking new grounds through an agrarian revolution"
               />

               <Education
                 startYear={2014}
                 endYear={2016}
                 schoolName="Covenant University"
                 schoolDescription="Raising a new generation of leaders by promoting mental productivity"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Covenant University Secondary School"
              jobDescription="This is a Nigerian Christian secondary school located within the Covenant University campus in Ota, Ogun State. It was established on 14 October 2010, primarily to cater for the educational needs of the children of academic and non-academic staff of the school."
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Landmark University Secondary School"
                jobDescription="Christian secondary school located in Omu-Aran, Kwara State. Established 10 January, 2011 by Living Faith Church Worldwide."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Stabbing"
                progress={100}
                />
                <Skills
                  skill="Pairing"
                  progress={80}
                  />
                  <Skills
                    skill="Tweeting"
                    progress={50}
                    />
                    <Skills
                      skill="Reading"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
