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
          d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-.491 4.098a1 1 0 0 0-1.381-.303A7.626 7.626 0 0 1 12 7a7.626 7.626 0 0 1-4.127-1.205A1 1 0 1 0 6.794 7.48c.388.248.795.47 1.219.662l.32.138v7.41c-.539.222-1.054.49-1.539.801a1 1 0 1 0 1.079 1.684A7.627 7.627 0 0 1 12 16.971c1.521 0 2.937.442 4.128 1.204a1 1 0 1 0 1.078-1.684 9.635 9.635 0 0 0-1.219-.662l-.32-.138V8.28a9.645 9.645 0 0 0 1.539-.801 1 1 0 0 0 .303-1.382m-3.842 2.759v6.257a9.722 9.722 0 0 0-2.925-.062l-.409.062V8.857a9.722 9.722 0 0 0 2.925.062z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'GeminiFill'

/**
 * MingCute Icon: Gemini Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GeminiFill = memo(Icon)
