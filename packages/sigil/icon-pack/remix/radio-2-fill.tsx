import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zm3 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5-6v2h4V9zm0 4v2h4v-2z" />
    </Svg>
  )
})
Icon.displayName = 'Radio2Fill'
/**
 * Remix Icon: Radio 2 Fill
 * @see {@link https://remixicon.com/icon/radio-2-fill Remix Icon Docs}
 */
export const Radio2Fill = Icon
