import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M18 2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6 12h-1a1 1 0 0 0-1 1v4h3v-4a1 1 0 0 0-1-1m2.14-5.203A3.5 3.5 0 0 1 11.5 10a3.5 3.5 0 0 1-2.64-1.203A3.99 3.99 0 0 1 6 10a4 4 0 0 1-2-.535V18a1 1 0 0 0 1 1h3v-4a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v4h3a1 1 0 0 0 1-1V9.465A4 4 0 0 1 17 10c-1.12 0-2.133-.46-2.86-1.203M18 4H5a1 1 0 0 0-.993.883L4 5v1a2 2 0 0 0 3.995.15L8 6a1 1 0 0 1 1.993-.117L10 6v.5a1.5 1.5 0 0 0 2.993.144L13 6.5V6a1 1 0 1 1 2 0 2 2 0 0 0 3.995.15L19 6V5a1 1 0 0 0-.883-.993z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Store2Line'
/**
 * MingCute Icon: Store 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Store2Line = Icon
