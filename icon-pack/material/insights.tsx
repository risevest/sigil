import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 8.5C19.55 8.5 18.74 9.94 19.07 11.01L15.52 14.57C15.22 14.48 14.78 14.48 14.48 14.57L11.93 12.02C12.27 10.95 11.46 9.5 10 9.5C8.55 9.5 7.73 10.94 8.07 12.02L3.51 16.57C2.44 16.24 1 17.05 1 18.5C1 19.6 1.9 20.5 3 20.5C4.45 20.5 5.26 19.06 4.93 17.99L9.48 13.43C9.78 13.52 10.22 13.52 10.52 13.43L13.07 15.98C12.73 17.05 13.54 18.5 15 18.5C16.45 18.5 17.27 17.06 16.93 15.98L20.49 12.43C21.56 12.76 23 11.95 23 10.5C23 9.4 22.1 8.5 21 8.5Z" />
      <Path d="M15 9.5L15.94 7.43L18 6.5L15.94 5.57L15 3.5L14.08 5.57L12 6.5L14.08 7.43L15 9.5Z" />
      <Path d="M3.5 11.5L4 9.5L6 9L4 8.5L3.5 6.5L3 8.5L1 9L3 9.5L3.5 11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Insights'

/**
 * Material Icon: Insights
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:insights Material Icon Docs}
 */
export const Insights = memo(Icon)
