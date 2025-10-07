import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13.914 12 4.793-4.793-1.414-1.414L11.086 12l6.207 6.207 1.414-1.414zM7 18V6h2v12z" />
    </Svg>
  )
})
Icon.displayName = 'SkipLeftLine'
/**
 * Remix Icon: Skip Left Line
 * @see {@link https://remixicon.com/icon/skip-left-line Remix Icon Docs}
 */
export const SkipLeftLine = Icon
