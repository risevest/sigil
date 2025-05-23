import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5163)">
        <Path d="M8.565 3.42543V4.31543L10.565 6.31543V3.42543H14.565V7.42543H11.675L13.675 9.42543H14.565V10.3154L16.565 12.3154V9.42543H20.565V13.4254H17.675L19.675 15.4254H20.565V16.3154L22.565 18.3154V3.42543C22.565 2.32543 21.665 1.42543 20.565 1.42543H5.675L7.675 3.42543H8.565ZM16.565 3.42543H20.565V7.42543H16.565V3.42543ZM1.975 0.56543L0.565002 1.97543L2.565 3.97543V19.4254C2.565 20.5254 3.465 21.4254 4.565 21.4254H20.015L22.025 23.4354L23.435 22.0254L1.975 0.56543ZM10.565 11.9754L12.015 13.4254H10.565V11.9754ZM4.565 5.97543L6.015 7.42543H4.565V5.97543ZM8.565 19.4254H4.565V15.4254H8.565V19.4254ZM8.565 13.4254H4.565V9.42543H8.015L8.565 9.97543V13.4254ZM14.565 19.4254H10.565V15.4254H14.015L14.565 15.9754V19.4254ZM16.565 19.4254V17.9754L18.015 19.4254H16.565Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5163">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'GridOff'

/**
 * Material Icon: Grid Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:grid_off Material Icon Docs}
 */
export const GridOff = memo(Icon)
