import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Medal2Fill = /* @__PURE__ */ memo(function Medal2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 8.5 2.116 5.088 5.493.44-4.185 3.585 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44zM8 2v9H6V2zm10 0v9h-2V2zm-5 0v5h-2V2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Medal 2 Fill
 * @see {@link https://remixicon.com/icon/medal-2-fill Remix Icon Docs}
 */
export { Medal2Fill }
