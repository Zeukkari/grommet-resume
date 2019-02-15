import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet, Box, Button } from 'grommet'
import { grommet, dark } from 'grommet/themes'
import {
  black,
  materiallight,
  materialdark,
  metro,
  light,
} from 'grommet-controls/themes'

import { aruba } from 'grommet-theme-aruba'
import { dxc } from 'grommet-theme-dxc'
import { hp } from 'grommet-theme-hp'
import { hpe } from 'grommet-theme-hpe'
import { v1 } from 'grommet-theme-v1'

import { Resume } from '../src/js/components/Resume'
import { Loading } from '../src/js/components/Loading'

import { Summary, Contact } from '../src/js/components/sections/Basics'
import {
  ResumeLayout,
  TopLayout,
  ContentColumn,
} from '../src/js/components/Layout'

// import defaultResume from './resume.json'
import defaultResume from './defaultResume.json'

console.log('dark: ', dark)

storiesOf('Resume', module)
  .add('Default', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={grommet}
    />
  ))
  .add('Dark', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={dark}
    />
  ))
  .add('Black', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={black}
    />
  ))
  .add('Material Light', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={materiallight}
    />
  ))
  .add('Material Dark', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={materialdark}
    />
  ))
  .add('Metro', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={metro}
    />
  ))
  .add('Light', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={light}
    />
  ))
  .add('Aruba', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={aruba}
    />
  ))
  .add('DXC', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={dxc}
    />
  ))
  .add('HP', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={hp}
    />
  ))
  .add('HPE', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={hpe}
    />
  ))
  .add('V1 Theme', () => (
    <Resume
      basics={defaultResume.basics}
      work={defaultResume.work}
      volunteer={defaultResume.volunteer}
      education={defaultResume.education}
      awards={defaultResume.awards}
      publications={defaultResume.publications}
      skills={defaultResume.skills}
      languages={defaultResume.languages}
      interests={defaultResume.interests}
      references={defaultResume.references}
      theme={v1}
    />
  ))
  .add('Resume loading', () => (
    <Grommet full>
      <Loading />
    </Grommet>
  ))
  .add('Invalid resume', () => (
    <Grommet full>
      <Resume state="" />
    </Grommet>
  ))

storiesOf('Layout/Default', module).add('Default', () => {
  const Top = () => (
    <Box
      fill
      align="center"
      pad="large"
      margin="none"
      gap="none"
      background="accent-1"
    >
      <Button label="Header" onClick={() => {}} primary />
    </Box>
  )

  const Content = () => (
    <Box
      fill
      align="center"
      pad="large"
      margin="none"
      gap="none"
      background="accent-4"
    >
      <Button label="Content column" onClick={() => {}} primary />
    </Box>
  )

  return (
    <ResumeLayout>
      <Top />
      <Content />
    </ResumeLayout>
  )
})

storiesOf('Layout/Header', module).add('Default', () => {
  const Left = () => (
    <Box align="center" pad="large" background="accent-1">
      <Button label="Avatar" onClick={() => {}} primary />
    </Box>
  )

  const Right = () => (
    <Box align="center" pad="large" background="accent-2">
      <Button label="Name + label + summar" onClick={() => {}} primary />
    </Box>
  )

  const Bottom = () => (
    <Box align="center" pad="large" background="accent-4">
      <Button label="Contact + Profiles" onClick={() => {}} primary />
    </Box>
  )

  return (
    <TopLayout>
      <Left />
      <Right />
      <Bottom />
    </TopLayout>
  )
})

storiesOf('Layout/Left Column', module).add('Default', () => {
  return (
    <ContentColumn>
      <Box align="center" pad="large" border="all" background="accent-1">
        <Button label="Work" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-2">
        <Button label="Education" onClick={() => {}} primary />
      </Box>
    </ContentColumn>
  )
})

storiesOf('Layout/Right Column', module).add('Default', () => {
  return (
    <ContentColumn>
      <Box align="center" pad="large" border="all" background="accent-1">
        <Button label="Skills" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-2">
        <Button label="Interests" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-3">
        <Button label="Organizations" onClick={() => {}} primary />
      </Box>
      <Box align="center" pad="large" border="all" background="accent-4">
        <Button label="Awards" onClick={() => {}} primary />
      </Box>
    </ContentColumn>
  )
})

storiesOf('Resume/Basics section', module).add('Default', () => (
  <TopLayout>
    <Summary
      name={defaultResume.basics.name}
      label={defaultResume.basics.label}
      summary={defaultResume.basics.summary}
    />

    <Contact
      email={defaultResume.basics.email}
      phone={defaultResume.basics.phone}
      website={defaultResume.basics.website}
      location={defaultResume.basics.location}
      profiles={defaultResume.basics.profiles}
    />
  </TopLayout>
))
