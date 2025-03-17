import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.4274 10.5929L13.4174 1.58286C12.6674 0.832858 11.3474 0.822858 10.5874 1.58286L1.58744 10.5829C0.807441 11.3629 0.807441 12.6229 1.58744 13.4029L10.5874 22.4029C10.9774 22.7929 11.4874 22.9829 11.9974 22.9829C12.5074 22.9829 13.0174 22.7929 13.4074 22.4029L22.3974 13.4129C23.1874 12.6529 23.1974 11.3929 22.4274 10.5929ZM12.0074 20.9929L3.00744 11.9929L12.0074 2.99286L21.0074 11.9929L12.0074 20.9929ZM7.99744 11.0029V15.0029H9.99744V12.0029H13.9974V14.5029L17.4974 11.0029L13.9974 7.50286V10.0029H8.99744C8.44744 10.0029 7.99744 10.4529 7.99744 11.0029Z" />
    </Svg>
  )
}

Icon.displayName = 'Directions'

/**
 * Material Icon: Directions
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions Material Icon Docs}
 */
export const Directions = memo(Icon)
