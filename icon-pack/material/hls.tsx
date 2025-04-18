import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.75 9H8.25V15H6.75V12.5H4.75V15H3.25V9H4.75V11H6.75V9ZM16.75 15H19.75C20.3 15 20.75 14.55 20.75 14V12.5C20.75 11.95 20.3 11.5 19.75 11.5H17.25V10.5H19.25V11H20.75V10C20.75 9.45 20.3 9 19.75 9H16.75C16.2 9 15.75 9.45 15.75 10V11.5C15.75 12.05 16.2 12.5 16.75 12.5H19.25V13.5H17.25V13H15.75V14C15.75 14.55 16.2 15 16.75 15ZM14.25 15V13.5H11.75V9H10.25V15H14.25Z" />
    </Svg>
  )
}

Icon.displayName = 'Hls'

/**
 * Material Icon: Hls
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hls Material Icon Docs}
 */
export const Hls = memo(Icon)
