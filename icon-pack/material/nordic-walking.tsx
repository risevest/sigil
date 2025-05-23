import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 22.75H18V13.75H19.5V22.75ZM8.03 13.75H6.5L4.5 22.75H6.03L8.03 13.75ZM14 5.25C15.1 5.25 16 4.35 16 3.25C16 2.15 15.1 1.25 14 1.25C12.9 1.25 12 2.15 12 3.25C12 4.35 12.9 5.25 14 5.25ZM10.3 8.65L7.5 22.75H9.6L11.4 14.75L13.5 16.75V22.75H15.5V15.25L13.4 13.25L14 10.25C15.3 11.75 17.3 12.75 19.5 12.75V10.75C17.6 10.75 16 9.75 15.2 8.35L14.2 6.75C13.64 5.86 12.52 5.5 11.55 5.91L6.5 8.05V12.75H8.5V9.35L10.3 8.65Z" />
    </Svg>
  )
}

Icon.displayName = 'NordicWalking'

/**
 * Material Icon: Nordic Walking
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nordic_walking Material Icon Docs}
 */
export const NordicWalking = memo(Icon)
