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
          d="M13 4.062V4.5a1 1 0 1 1-2 0v-.438A7.96 7.96 0 0 0 7.094 5.68l.31.31A1 1 0 1 1 5.99 7.404l-.31-.31A7.96 7.96 0 0 0 4.062 11H4.5a1 1 0 1 1 0 2h-.438A8.004 8.004 0 0 0 11 19.938V19.5a1 1 0 1 1 2 0v.438a7.96 7.96 0 0 0 3.906-1.618l-.31-.31a1 1 0 0 1 1.414-1.414l.31.31A7.96 7.96 0 0 0 19.938 13H19.5a1 1 0 1 1 0-2h.438A8.004 8.004 0 0 0 13 4.062M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m14.466-5.156-5.693 3.622a1 1 0 0 0-.307.307l-3.622 5.693c-.287.45.24.977.69.69l5.693-3.623a1 1 0 0 0 .306-.306l3.623-5.693c.287-.451-.24-.977-.69-.69"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SafariLine'

/**
 * MingCute Icon: Safari Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SafariLine = memo(Icon)
