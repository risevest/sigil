import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1zm6 15v2h3.44l-2-2zm3.56 0 2 2h2.88l-2-2zM20 20v-1.44l-2-2V17a1 1 0 0 1-1 1h-.44l2 2zm0-6.44-2-2v2.88l2 2zm0-2.12V8h-2v1.44z" />
    </Svg>
  )
})
Icon.displayName = 'ShadowFill'
/**
 * Remix Icon: Shadow Fill
 * @see {@link https://remixicon.com/icon/shadow-fill Remix Icon Docs}
 */
export const ShadowFill = Icon
