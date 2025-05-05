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
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2h-9v14h9zM8 5H5v14h3zm8 10a1 1 0 0 1 .117 1.993L16 17h-3a1 1 0 0 1-.117-1.993L13 15zm0-4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm0-4a1 1 0 0 1 .117 1.993L16 9h-3a1 1 0 0 1-.117-1.993L13 7z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Layout4Line'

/**
 * MingCute Icon: Layout_4_line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Layout4Line = memo(Icon)
