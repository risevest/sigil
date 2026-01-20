import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ZaSortAscendingLettersFill = /* @__PURE__ */ memo(
  function ZaSortAscendingLettersFill(_props: IconProps) {
    const { color = 'black', size = 24, ...props } = _props
    return (
      <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
        <G fill="none">
          <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
          <Path
            fill={color}
            d="M8 12a2.21 2.21 0 0 1 2.016 1.305l.065.161 2.332 6.53a1.5 1.5 0 0 1-2.77 1.142l-.056-.134-.18-.504H6.593l-.18.505a1.5 1.5 0 0 1-2.868-.871l.042-.139 2.332-6.529A2.21 2.21 0 0 1 8 12m10.06-8.06 2.83 2.828a1.5 1.5 0 1 1-2.122 2.121l-.268-.268V20a1.5 1.5 0 0 1-3 0V8.621l-.268.268a1.5 1.5 0 1 1-2.121-2.121l2.828-2.829a1.5 1.5 0 0 1 2.122 0ZM8 16.56l-.336.94h.672zM10.758 2c1.378 0 2.091 1.61 1.227 2.628l-.095.103L8.62 8H11a1.5 1.5 0 0 1 .144 2.993L11 11H5.24c-1.378 0-2.09-1.61-1.226-2.628l.095-.103L7.379 5h-2.38a1.5 1.5 0 0 1-.144-2.993L5 2z"
          />
        </G>
      </Svg>
    )
  }
)
/**
 * MingCute Icon: Za Sort Ascending Letters Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { ZaSortAscendingLettersFill }
