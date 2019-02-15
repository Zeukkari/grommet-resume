import React from 'react'
import { Box, Button, Heading, Paragraph, Text } from 'grommet'

import { TopLayout } from '../Layout'

const Profiles = ({ profiles }) => {
  const profileButtons = profiles.map(profile => (
    <Button label={profile.network} key={profile.network} />
  ))

  return <Box direction="row">{profileButtons}</Box>
}

export const Contact = ({ email, phone, website, profiles }) => {
  return (
    <Box
      flex
      align="center"
      justify="between"
      direction="row"
      margin=""
      pad={{ left: 'small', right: 'small' }}
      background="brand"
    >
      <Text> {phone} </Text>

      <Text> {email} </Text>

      <Text> {website} </Text>

      <Profiles profiles={profiles} />
    </Box>
  )
}
Contact.defaultProps = {
  email: 'N/A',
  phone: 'N/A',
  website: 'N/A',

  location: {
    address: 'No address',
    postalCode: '0',
    city: 'N/A',
    countryCode: 'FI',
    region: 'N/A',
  },
  profiles: [
    {
      network: 'Twitter',
      username: 'john',
      url: 'about:blank',
    },
  ],
}

export const Summary = ({ name, label, summary }) => {
  return (
    <Box align="center">
      <Heading level={1} size="small" margin="xsmall" textAlign="center">
        {name}
      </Heading>
      <Heading level={2} size="small" margin="xsmall" textAlign="center">
        {label}
      </Heading>
      <Box>
        <Paragraph size="medium">{summary}</Paragraph>
      </Box>
    </Box>
  )
}
Summary.defaultProps = {
  name: 'N/A',
  label: 'N/A',
  summary: 'N/A',
}

export const Basics = ({
  name,
  label,
  summary,
  email,
  phone,
  location,
  website,
  profiles,
}) => (
  <TopLayout>
    <Summary name={name} label={label} summary={summary} />
    <Contact
      email={email}
      phone={phone}
      website={website}
      location={location}
      profiles={profiles}
    />
  </TopLayout>
)
