import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Transfer2Fill = /* @__PURE__ */ memo(function Transfer2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7.269 3.11c.974-.974 2.617-.34 2.725.991l.006.14V20a1.5 1.5 0 0 1-2.993.144L7 20V7.621l-1.44 1.44a1.5 1.5 0 0 1-2.224-2.008l.103-.114zM15.5 2.5a1.5 1.5 0 0 1 1.493 1.356L17 4v12.379l1.44-1.44a1.5 1.5 0 0 1 2.224 2.008l-.103.114-3.83 3.829c-.974.974-2.617.34-2.725-.991l-.006-.14V4a1.5 1.5 0 0 1 1.5-1.5"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Transfer 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { Transfer2Fill }
