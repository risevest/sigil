import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 1C18 1.71561 17.9359 2.37948 17.8155 3H8.23193C8.87053 5.55223 10.7943 7.22876 13.5829 9.4281C13.0772 9.8647 12.5462 10.294 12 10.7267C8.72906 8.13494 6 5.66845 6 1H4C4 6.46624 7.21013 9.46355 10.3863 12C7.21013 14.5365 4 17.5338 4 23H6C6 18.0404 9.08011 15.566 12.6178 12.7863L12.7096 12.7142C16.149 10.0123 20 6.98705 20 1H18ZM17.8155 21.0002H8.23193C8.89098 18.3663 10.9188 16.665 13.8535 14.3592C14.2973 14.0106 14.7419 13.663 15.1811 13.3086C17.7659 15.5981 20 18.44 20 23.0002H18C18 22.2846 17.9359 21.6207 17.8155 21.0002Z" />
    </Svg>
  )
}

Icon.displayName = 'DnaFill'

/**
 * Remix Icon: Dna Fill
 * @see {@link https://remixicon.com/icon/dna-fill Remix Icon Docs}
 */
export const DnaFill = memo(Icon)
