import React from 'react'
import { Desktop, Mobile, Tablet } from '../../Layout/Reponsive'
import LocationTablet from './LocationTablet'
import LocationMobile from './LocationMobile'
import LocationDesktop from './LocationDesktop'

export default function Location() {
  return (
    <div>
      <Tablet>
        <LocationTablet />
      </Tablet>
      <Desktop>
        <LocationDesktop />
      </Desktop>
      <Mobile>
        <LocationMobile />
      </Mobile>
    </div>
  )
}
