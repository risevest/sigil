import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V20H6V8.83L10.83 4H18Z" />
      <Path d="M16 13L12 17L8 13L9.41 11.59L11 13.17V9.02L13 9V13.17L14.59 11.58L16 13Z" />
    </Svg>
  )
}

Icon.displayName = 'SimCardDownload'

/**
 * Material Icon: Sim Card Download
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sim_card_download Material Icon Docs}
 */
export const SimCardDownload = memo(Icon)
