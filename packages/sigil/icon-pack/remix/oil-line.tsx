import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.07 7 6 11.606V20h12V7zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1M8 12h2v6H8z" />
    </Svg>
  )
})
Icon.displayName = 'OilLine'
/**
 * Remix Icon: Oil Line
 * @see {@link https://remixicon.com/icon/oil-line Remix Icon Docs}
 */
export const OilLine = Icon
