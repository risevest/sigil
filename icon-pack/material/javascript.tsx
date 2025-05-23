import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5 14V13H14V13.5H16V12.5H13.5C12.95 12.5 12.5 12.05 12.5 11.5V10C12.5 9.45 12.95 9 13.5 9H16.5C17.05 9 17.5 9.45 17.5 10V11H16V10.5H14V11.5H16.5C17.05 11.5 17.5 11.95 17.5 12.5V14C17.5 14.55 17.05 15 16.5 15H13.5C12.95 15 12.5 14.55 12.5 14ZM9.5 9V13.5H8V12.5H6.5V13.5C6.5 14.33 7.17 15 8 15H9.5C10.33 15 11 14.33 11 13.5V9C11 9 10.33 9 9.5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Javascript'

/**
 * Material Icon: Javascript
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:javascript Material Icon Docs}
 */
export const Javascript = memo(Icon)
