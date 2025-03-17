import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 14V13H11V13.5H13V12.5H10.5C9.95 12.5 9.5 12.05 9.5 11.5V10C9.5 9.45 9.95 9 10.5 9H13.5C14.05 9 14.5 9.45 14.5 10V11H13V10.5H11V11.5H13.5C14.05 11.5 14.5 11.95 14.5 12.5V14C14.5 14.55 14.05 15 13.5 15H10.5C9.95 15 9.5 14.55 9.5 14ZM17 15H20C20.55 15 21 14.55 21 14V12.5C21 11.95 20.55 11.5 20 11.5H17.5V10.5H19.5V11H21V10C21 9.45 20.55 9 20 9H17C16.45 9 16 9.45 16 10V11.5C16 12.05 16.45 12.5 17 12.5H19.5V13.5H17.5V13H16V14C16 14.55 16.45 15 17 15ZM8 10C8 9.45 7.55 9 7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7C7.55 15 8 14.55 8 14V13H6.5V13.5H4.5V10.5H6.5V11H8V10Z" />
    </Svg>
  )
}

Icon.displayName = 'Css'

/**
 * Material Icon: Css
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:css Material Icon Docs}
 */
export const Css = memo(Icon)
