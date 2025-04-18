import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.455 17.74C8.275 17.59 5.745 14.97 5.745 11.75C5.745 8.44 8.435 5.75 11.745 5.75C14.965 5.75 17.585 8.28 17.735 11.46L15.635 10.83C15.225 9.06 13.635 7.75 11.745 7.75C9.535 7.75 7.745 9.54 7.745 11.75C7.745 13.64 9.055 15.23 10.825 15.64L11.455 17.74ZM21.745 11.75C21.745 12.05 21.735 12.35 21.705 12.65L19.735 12.06C19.745 11.96 19.745 11.85 19.745 11.75C19.745 7.33 16.165 3.75 11.745 3.75C7.325 3.75 3.745 7.33 3.745 11.75C3.745 16.17 7.325 19.75 11.745 19.75C11.845 19.75 11.955 19.75 12.055 19.74L12.645 21.71C12.345 21.74 12.045 21.75 11.745 21.75C6.225 21.75 1.745 17.27 1.745 11.75C1.745 6.23 6.225 1.75 11.745 1.75C17.265 1.75 21.745 6.23 21.745 11.75ZM17.975 16.01L21.745 14.75L11.745 11.75L14.745 21.75L16.005 17.98L20.275 22.25L22.255 20.27L17.975 16.01Z" />
    </Svg>
  )
}

Icon.displayName = 'AdsClick'

/**
 * Material Icon: Ads Click
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ads_click Material Icon Docs}
 */
export const AdsClick = memo(Icon)
