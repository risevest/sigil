import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChromeLine = /* @__PURE__ */ memo(function ChromeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M4.546 9.09a8.002 8.002 0 0 0 6.096 10.796l.248.038 1.708-2.96a5 5 0 0 1-4.86-2.35zM19.419 9H16c.628.836 1 1.874 1 3 0 .942-.26 1.823-.713 2.575l-3.08 5.335A8.002 8.002 0 0 0 19.419 9M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0-5a7.98 7.98 0 0 0-6.134 2.864l-.172.213L7.4 10.034a5 5 0 0 1 4.362-3.028L12 7h6.245A7.99 7.99 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Chrome Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { ChromeLine }
