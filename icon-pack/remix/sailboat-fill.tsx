import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.00003 17.9999H21C21.2762 17.9999 21.5 18.2238 21.5 18.4999C21.5 18.6081 21.4649 18.7134 21.4 18.7999L19.3 21.5999C19.1112 21.8517 18.8148 21.9999 18.5 21.9999H5.50003C5.18527 21.9999 4.88888 21.8517 4.70003 21.5999L2.60003 18.7999C2.43434 18.579 2.47912 18.2656 2.70003 18.0999C2.78658 18.035 2.89184 17.9999 3.00003 17.9999ZM15 2.42531V14.9999C15 15.5522 14.5523 15.9999 14 15.9999H4.04034C3.7642 15.9999 3.54034 15.7761 3.54034 15.4999C3.54034 15.3864 3.57898 15.2762 3.64991 15.1876L14.1096 2.11296C14.2821 1.89733 14.5967 1.86237 14.8124 2.03488C14.931 2.12976 15 2.27342 15 2.42531Z" />
    </Svg>
  )
}

Icon.displayName = 'SailboatFill'

/**
 * Remix Icon: Sailboat Fill
 * @see {@link https://remixicon.com/icon/sailboat-fill Remix Icon Docs}
 */
export const SailboatFill = memo(Icon)
