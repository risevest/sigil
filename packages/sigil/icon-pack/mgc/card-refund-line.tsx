import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CardRefundLine = /* @__PURE__ */ memo(function CardRefundLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19 4a3 3 0 0 1 2.995 2.824L22 7v10a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7a3 3 0 0 1 2.824-2.995L5 4zm1 6H4v7a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17zM9.293 11.464a1 1 0 0 1 1.497 1.32l-.083.095-.121.121H15a1 1 0 0 1 .117 1.993L15 15h-4.414l.12.121a1 1 0 0 1-1.32 1.498l-.093-.084-1.829-1.828a1 1 0 0 1-.083-1.32l.083-.094zM19 6H5a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Card Refund Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { CardRefundLine }
