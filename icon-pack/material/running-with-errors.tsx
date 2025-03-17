import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 10V18H20V10H22ZM20 20V22H22V20H20ZM18 17.29C16.53 18.95 14.39 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4V13L19.55 5.45C17.72 3.34 15.02 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C14.25 22 16.33 21.26 18 20V17.29Z" />
    </Svg>
  )
}

Icon.displayName = 'RunningWithErrors'

/**
 * Material Icon: Running With Errors
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:running_with_errors Material Icon Docs}
 */
export const RunningWithErrors = memo(Icon)
