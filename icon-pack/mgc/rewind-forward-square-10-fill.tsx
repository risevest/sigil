import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M15.623 1.283a1.5 1.5 0 0 1 1.938.156l2.483 2.483c.95.952.277 2.578-1.068 2.578H6A1.5 1.5 0 0 0 4.5 8v8A1.5 1.5 0 0 0 6 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 1 3 0v5a4.5 4.5 0 0 1-4.5 4.5H6A4.5 4.5 0 0 1 1.5 16V8A4.5 4.5 0 0 1 6 3.5h9.323l-.165-.33a1.5 1.5 0 0 1 .465-1.887M9.208 7.178A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.499 1.499 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074M11 10.5a3.5 3.5 0 0 1 7 0v3a3.5 3.5 0 1 1-7 0zm3.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RewindForwardSquare10Fill'

/**
 * MingCute Icon: Rewind Forward Square 10 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RewindForwardSquare10Fill = memo(Icon)
