import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 7.5C12.97 7.5 13.75 6.72 13.75 5.75C13.75 4.78 12.97 4 12 4C11.03 4 10.25 4.78 10.25 5.75C10.25 6.72 11.03 7.5 12 7.5ZM14 16V20H10V16H8L10.38 9.62C10.63 8.95 11.28 8.5 12 8.5C12.72 8.5 13.37 8.95 13.62 9.62L16 16H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Girl'

/**
 * Material Icon: Girl
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:girl Material Icon Docs}
 */
export const Girl = memo(Icon)
