import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpoonFill = /* @__PURE__ */ memo(function SpoonFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12.03 13.739 4.422 7.705a2.337 2.337 0 1 1 3.283-3.283l6.034 7.608c1.307-.571 3.3-.648 4.979 1.03 1.015 1.016 1.647 2.258 1.863 3.44.21 1.15.049 2.426-.803 3.278-.851.852-2.128 1.013-3.277.803-1.182-.216-2.425-.848-3.44-1.864-1.68-1.679-1.602-3.671-1.031-4.978"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Spoon Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { SpoonFill }
