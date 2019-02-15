import React, { Component } from 'react'

import { validate } from 'resume-schema'
import { Grommet, Box, Heading } from 'grommet'

import { Section } from './Section'

import { Award } from './sections/Awards'
import { Summary, Contact } from './sections/Basics'
import { EducationItem } from './sections/Education'
import { Interest } from './sections/Interests'
import { Language } from './sections/Languages'
import { Publication } from './sections/Publications'
import { Reference } from './sections/References'
import { Skill } from './sections/Skills'
import { VolunteerItem } from './sections/Volunteer'
import { WorkItem } from './sections/Work'

import { ResumeLayout, TopLayout, ContentColumn } from './Layout'

import { Loading } from './Loading'

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = { isValid: false, error: undefined }
  }

  componentDidMount() {
    const {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    } = this.props

    const resumeData = {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    }

    const cb = (error, report) => {
      console.log('error: ', error)
      console.log('report: ', report)
      if (error) {
        this.setState({ isValid: false, error: error })
      } else {
        this.setState({ isValid: true, error: undefined })
      }
      return
    }
    validate(resumeData, cb)
  }

  render() {
    const {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
      theme,
    } = this.props

    if (this.state.isValid) {
      const {
        name,
        label,
        email,
        phone,
        website,
        summary,

        profiles,
      } = basics

      const workItems = work.map(item => (
        <WorkItem key={item.company} item={item} />
      ))

      const volunteerItems = volunteer.map(item => (
        <VolunteerItem key={item.organization} item={item} />
      ))

      const skillItems = skills.map(item => (
        <Skill key={item.name} item={item} />
      ))
      const referenceItems = references.map(item => {
        return <Reference key={item.name} item={item} />
      })
      const publicationItems = publications.map(item => (
        <Publication item={item} key={item.name} />
      ))
      const languageItems = languages.map(item => (
        <Language key={item.language} item={item} />
      ))
      const interestItems = interests.map(item => (
        <Interest key={item.name} item={item} />
      ))
      const educationItems = education.map(item => (
        <EducationItem key={item.startDate} item={item} />
      ))

      const awardItems = awards.map(item => (
        <Award key={item.title} item={item} />
      ))

      return (
        <Grommet theme={theme} full>
          <ResumeLayout>
            <TopLayout>
              <Summary name={name} label={label} summary={summary} />

              <Contact
                email={email}
                phone={phone}
                website={website}
                profiles={profiles}
              />
            </TopLayout>

            <ContentColumn>
              {work.length > 0 && <Section title="Work" content={workItems} />}

              {education.length > 0 && (
                <Section title="Education" content={educationItems} />
              )}

              {skills.length > 0 && (
                <Section title="Skills" content={skillItems} />
              )}

              {interests.length > 0 && (
                <Section title="Interests" content={interestItems} />
              )}

              {awards.length > 0 && (
                <Section title="Awards" content={awardItems} />
              )}

              {volunteer.length > 0 && (
                <Section title="Volunteer" content={volunteerItems} />
              )}

              {publications.length > 0 && (
                <Section title="Publications" content={publicationItems} />
              )}

              {languages.length > 0 && (
                <Section title="Languages" content={languageItems} />
              )}

              {references.length > 0 && (
                <Section title="References" content={referenceItems} />
              )}
            </ContentColumn>
          </ResumeLayout>
        </Grommet>
      )
    } else if (this.state.error) {
      const errorMessage =
        this.state.error && this.state.error[0].message
          ? this.state.error[0].message
          : 'not sure what went wrong'
      return (
        <Grommet full>
          <Box
            flex
            fill
            justify="center"
            wrap={true}
            height="medium"
            border={{ color: 'status-error', size: 'large' }}
          >
            <Heading>{`Error: ${errorMessage}`}</Heading>
          </Box>
        </Grommet>
      )
    } else {
      return (
        <Grommet full>
          <Loading />
        </Grommet>
      )
    }
  }
}

export { Resume }
