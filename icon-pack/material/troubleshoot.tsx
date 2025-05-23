import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.5 20.09L17.81 15.4C18.87 14.05 19.5 12.35 19.5 10.5C19.5 6.08 15.92 2.5 11.5 2.5C7.42 2.5 4.06 5.55 3.57 9.5H5.59C6.07 6.67 8.53 4.5 11.5 4.5C14.81 4.5 17.5 7.19 17.5 10.5C17.5 13.81 14.81 16.5 11.5 16.5C9.08 16.5 7 15.06 6.05 13H3.9C4.95 16.19 7.96 18.5 11.5 18.5C13.35 18.5 15.05 17.87 16.4 16.81L21.09 21.5L22.5 20.09Z" />
      <Path d="M8.93 9.19L10.15 14.5H11.79L13.05 10.72L14 13H16V11.5H15L13.75 8.5H12.21L11.09 11.87L9.85 6.5H8.2L6.95 10.5H1.5V12H8.05L8.93 9.19Z" />
    </Svg>
  )
}

Icon.displayName = 'Troubleshoot'

/**
 * Material Icon: Troubleshoot
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:troubleshoot Material Icon Docs}
 */
export const Troubleshoot = memo(Icon)
