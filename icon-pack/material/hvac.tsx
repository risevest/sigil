import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      <Path d="M12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18ZM15.44 10C15.7 10.45 15.88 10.96 15.95 11.5H8.05C8.12 10.96 8.29 10.45 8.56 10H15.44ZM15.95 12.5C15.88 13.04 15.71 13.55 15.44 14H8.56C8.3 13.55 8.12 13.04 8.05 12.5H15.95ZM9.38 15H14.62C13.92 15.61 13.01 16 12 16C10.99 16 10.09 15.61 9.38 15ZM14.62 9H9.38C10.08 8.39 10.99 8 12 8C13.01 8 13.91 8.39 14.62 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Hvac'

/**
 * Material Icon: Hvac
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hvac Material Icon Docs}
 */
export const Hvac = memo(Icon)
