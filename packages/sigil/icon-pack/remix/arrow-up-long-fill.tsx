import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 22h2V8.414h5.414L12 2 5.586 8.414H11z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowUpLongFill'
/**
 * Remix Icon: Arrow Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-up-long-fill Remix Icon Docs}
 */
export const ArrowUpLongFill = Icon
