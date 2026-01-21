import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpaceShipFill = /* @__PURE__ */ memo(function SpaceShipFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.88 18.049a35.9 35.9 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875M12 14.995a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Space Ship Fill
 * @see {@link https://remixicon.com/icon/space-ship-fill Remix Icon Docs}
 */
export { SpaceShipFill }
