import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
      <Path d="M15.97 11.03C14.87 9.79 13.28 9 11.5 9C8.68 9 6.32 10.95 5.68 13.56L6.64 13.88C7.15 11.66 9.13 10 11.5 10C13.01 10 14.35 10.68 15.26 11.74L13 14H18V9L15.97 11.03Z" />
    </Svg>
  )
}

Icon.displayName = 'NextPlan'

/**
 * Material Icon: Next Plan
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:next_plan Material Icon Docs}
 */
export const NextPlan = memo(Icon)
