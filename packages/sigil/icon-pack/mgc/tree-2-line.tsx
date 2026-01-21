import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Tree2Line = /* @__PURE__ */ memo(function Tree2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 4c-3.25 0-6 2.844-6 6.5 0 3.274 2.205 5.897 5 6.41v-2.496l-1.707-1.707a1 1 0 1 1 1.414-1.414l1.165 1.165 1.814-2.54a1 1 0 1 1 1.628 1.163L13 14.321v2.588c2.795-.512 5-3.135 5-6.409C18 6.844 15.25 4 12 4m-8 6.5c0 4.278 3.006 7.91 7 8.435V21a1 1 0 1 0 2 0v-2.065c3.994-.525 7-4.157 7-8.435C20 5.872 16.482 2 12 2s-8 3.872-8 8.5"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Tree 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Tree2Line }
