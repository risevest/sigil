import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.935 21.12C18.835 18.18 18.295 15.09 18.295 12C18.295 8.91 18.845 5.82 19.935 2.88C19.975 2.77 19.995 2.66 19.995 2.57C19.995 2.23 19.765 2 19.365 2H4.625C4.225 2 3.995 2.23 3.995 2.57C3.995 2.67 4.015 2.77 4.055 2.88C5.155 5.82 5.705 8.91 5.705 12C5.705 15.09 5.155 18.18 4.065 21.12C4.015 21.23 3.995 21.34 3.995 21.43C3.995 21.76 4.225 22 4.625 22H19.375C19.765 22 20.005 21.76 20.005 21.43C19.995 21.33 19.975 21.23 19.935 21.12ZM6.535 20C7.305 17.4 7.69499 14.72 7.69499 12C7.69499 9.28 7.305 6.6 6.535 4H17.445C16.675 6.6 16.285 9.28 16.285 12C16.285 14.72 16.675 17.4 17.445 20H6.535Z" />
    </Svg>
  )
}

Icon.displayName = 'PanoramaVertical'

/**
 * Material Icon: Panorama Vertical
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:panorama_vertical Material Icon Docs}
 */
export const PanoramaVertical = memo(Icon)
