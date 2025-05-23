import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5L9 15L13 19L19 13V19ZM19 10.5L13 16.5L9 12.5L5 16.5V5H19V10.5ZM13.5 9V6H12V12H13.5V9ZM17.2 12L15.2 9L17.2 6H15.5L13.5 9L15.5 12H17.2ZM11 10.5H8.5V9.75H11V6H7V7.5H9.5V8.25H7V12H11V10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Score'

/**
 * Material Icon: Score
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:score Material Icon Docs}
 */
export const Score = memo(Icon)
