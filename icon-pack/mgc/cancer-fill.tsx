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
          d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-2.667 8.333a3 3 0 0 0-1.545 5.572c-.14.031-.283.057-.43.079-1.86.266-4.026-.307-5.341-1.677a1 1 0 1 0-1.442 1.386c1.843 1.918 4.696 2.61 7.066 2.27 1.197-.171 2.353-.616 3.228-1.385a4.214 4.214 0 0 0 1.464-3.245 3 3 0 0 0-3-3m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2.092-4.026c-1.843-1.918-4.696-2.61-7.066-2.27-1.197.171-2.353.616-3.228 1.385a4.214 4.214 0 0 0-1.464 3.245 3 3 0 1 0 4.545-2.572c.14-.031.283-.057.43-.079 1.86-.266 4.026.308 5.341 1.677a1 1 0 1 0 1.442-1.386m-8.758 1.36a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CancerFill'

/**
 * MingCute Icon: Cancer Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CancerFill = memo(Icon)
