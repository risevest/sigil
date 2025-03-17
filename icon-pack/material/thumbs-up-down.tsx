import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_6459)">
        <Path d="M12 6C12 5.45 11.55 5 11 5H5.82L6.48 1.82L6.5 1.59C6.5 1.28 6.37 1 6.17 0.79L5.38 0L0.44 4.94C0.17 5.21 0 5.59 0 6V12.5C0 13.33 0.67 14 1.5 14H8.25C8.87 14 9.4 13.62 9.63 13.09L11.89 7.8C11.96 7.63 12 7.44 12 7.25V6ZM10 7.13L7.92 12H2V6.21L3.93 4.28L3.36 7H10V7.13ZM22.5 10H15.75C15.13 10 14.6 10.38 14.37 10.91L12.11 16.2C12.04 16.37 12 16.56 12 16.75V18C12 18.55 12.45 19 13 19H18.18L17.52 22.18L17.5 22.42C17.5 22.73 17.63 23.01 17.83 23.22L18.62 24L23.56 19.06C23.83 18.79 24 18.41 24 18V11.5C24 10.67 23.33 10 22.5 10ZM22 17.79L20.07 19.72L20.64 17H14V16.87L16.08 12H22V17.79Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_6459">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'ThumbsUpDown'

/**
 * Material Icon: Thumbs Up Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:thumbs_up_down Material Icon Docs}
 */
export const ThumbsUpDown = memo(Icon)
