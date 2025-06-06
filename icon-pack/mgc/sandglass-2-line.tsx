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
          d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1c0 1.441-.609 2.984-1.4 4.316A14.3 14.3 0 0 1 15.533 12a14.3 14.3 0 0 1 2.065 2.684C18.391 16.016 19 17.56 19 19v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1c0-1.441.609-2.984 1.4-4.316A14.298 14.298 0 0 1 8.467 12c-.756-.767-1.48-1.7-2.065-2.684C5.609 7.984 5 6.44 5 5zm12 0H7v1c0 .929.414 2.107 1.12 3.294.696 1.17 1.609 2.236 2.458 2.933a1 1 0 0 1 0 1.546c-.85.697-1.762 1.763-2.458 2.933C7.414 16.893 7 18.071 7 19v1h10v-1c0-.929-.414-2.107-1.12-3.294-.696-1.17-1.609-2.236-2.458-2.933a1 1 0 0 1 0-1.546c.85-.697 1.762-1.763 2.458-2.933C16.586 7.107 17 5.929 17 5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Sandglass2Line'

/**
 * MingCute Icon: Sandglass 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Sandglass2Line = memo(Icon)
