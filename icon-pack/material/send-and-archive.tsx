import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 11L4.5 9.5V6.01L13.37 9.74C14.31 9.27 15.37 8.99 16.5 8.99C16.6 8.99 16.69 9 16.78 9L2.5 3V19L9.5 16.05C9.5 16.03 9.5 16.02 9.5 16C9.5 15.2 9.64 14.44 9.89 13.72L4.5 15.99V12.5L10.5 11Z" />
      <Path d="M16.5 11C13.74 11 11.5 13.24 11.5 16C11.5 18.76 13.74 21 16.5 21C19.26 21 21.5 18.76 21.5 16C21.5 13.24 19.26 11 16.5 11ZM16.5 19L13.5 16L14.21 15.29L16 17.08V13H17V17.09L18.79 15.3L19.5 16L16.5 19Z" />
    </Svg>
  )
}

Icon.displayName = 'SendAndArchive'

/**
 * Material Icon: Send And Archive
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:send_and_archive Material Icon Docs}
 */
export const SendAndArchive = memo(Icon)
