import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin: 15px;
  margin-left: 30px;
  height: 40px;
  display: inline-block;
  background-color: ${props => props.theme.primary};
  transform: skewX(-15deg);
`

const Header = styled.h1`
  font-size: 20px;
    padding: 5px 20px 0 20px;
    color: ${props => props.theme.primaryDark[1]};
    font-weight: 700;
    transform: skewX(15deg);
`

const PageHeader = ({ name }) => (
  <Container>
    <Header>{name}</Header>
  </Container>
)

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PageHeader
