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
          d="M3 6a3 3 0 0 1 3-3h9c1.737 0 3.301.738 4.397 1.917a24 24 0 0 1 .973-.611 1 1 0 1 1 .987 1.74c-.105.06-.876.553-.861.543A5.98 5.98 0 0 1 21 9v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm16.656 1.174a5.005 5.005 0 0 0-1.09-1.68 30.96 30.96 0 0 0-1.69 1.31c-1.642 1.366-3.614 3.29-5.239 5.718a9.858 9.858 0 0 0-1.746-1.785 6.858 6.858 0 0 0-.965-.636 3.414 3.414 0 0 0-.451-.21 1 1 0 0 0-.689 1.878c.025.01.37.152.876.546.578.45 1.376 1.239 2.146 2.557a1 1 0 0 0 1.733-.01c1.584-2.792 3.787-5 5.614-6.52a29.008 29.008 0 0 1 1.501-1.168"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChoiceFill'

/**
 * MingCute Icon: Choice Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChoiceFill = memo(Icon)
