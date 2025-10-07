import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 17H6v-2h12zm-6-4 6-6H6z" />
    </Svg>
  )
})
Icon.displayName = 'SkipDownFill'
/**
 * Remix Icon: Skip Down Fill
 * @see {@link https://remixicon.com/icon/skip-down-fill Remix Icon Docs}
 */
export const SkipDownFill = Icon
