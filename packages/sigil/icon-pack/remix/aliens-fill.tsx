import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AliensFill = /* @__PURE__ */ memo(function AliensFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m5.5 10a4.5 4.5 0 0 0-4.475 4.975q.235.025.475.025a4.5 4.5 0 0 0 4.475-4.975A5 5 0 0 0 17.5 12m-11 0q-.24 0-.475.025a4.5 4.5 0 0 0 4.95 4.95Q11 16.74 11 16.5A4.5 4.5 0 0 0 6.5 12" />
    </Svg>
  )
})
/**
 * Remix Icon: Aliens Fill
 * @see {@link https://remixicon.com/icon/aliens-fill Remix Icon Docs}
 */
export { AliensFill }
