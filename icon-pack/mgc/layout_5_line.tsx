import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color} fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 7H5v9h14zm-3 5a1 1 0 0 1 .117 1.993L16 17H8a1 1 0 0 1-.117-1.993L8 15zm0-3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm3-7H5v3h14z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Layout5Line'

/**
 * MingCute Icon: Layout_5_line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Layout5Line = memo(Icon)
