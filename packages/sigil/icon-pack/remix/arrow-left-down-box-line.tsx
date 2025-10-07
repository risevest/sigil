import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm3-2.999v-8h2v4.586l5.293-5.293 1.414 1.414-5.293 5.293H16v2z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowLeftDownBoxLine'
/**
 * Remix Icon: Arrow Left Down Box Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-box-line Remix Icon Docs}
 */
export const ArrowLeftDownBoxLine = Icon
