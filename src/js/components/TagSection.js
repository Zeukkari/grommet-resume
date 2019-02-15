import React from 'react'

import { Text, Box } from 'grommet'

import { TagHeading } from './TagHeading'

export const TagSection = ({ tags, children }) => {
  if (tags) {
    return (
      <Box>
        <TagHeading>{children}</TagHeading>
        <Box direction="column" margin={{ top: '0px', left: 'xsmall' }}>
          {tags.map(item => (
            <Text key={item}>{item}</Text>
          ))}
        </Box>
      </Box>
    )
  }
  return <></>
}
